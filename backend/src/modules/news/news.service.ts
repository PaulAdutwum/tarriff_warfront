import { Injectable, NotFoundException, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewsArticleMongo } from '../../schemas/mongodb-schemas';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NewsService {
  private readonly logger = new Logger(NewsService.name);

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    @InjectModel('NewsArticle') private newsArticleModel: Model<NewsArticleMongo>,
  ) {}

  async findAll(params: {
    country?: string;
    sector?: string;
    startDate?: Date;
    endDate?: Date;
    keyword?: string;
    limit?: number;
    offset?: number;
  }) {
    try {
      const filter: any = {};
      
      if (params.country) {
        filter.countries = { $in: [params.country] };
      }
      
      if (params.sector) {
        filter.sectors = { $in: [params.sector] };
      }
      
      if (params.startDate || params.endDate) {
        filter.publishedDate = {};
        if (params.startDate) {
          filter.publishedDate.$gte = params.startDate;
        }
        if (params.endDate) {
          filter.publishedDate.$lte = params.endDate;
        }
      }
      
      if (params.keyword) {
        filter.$or = [
          { title: { $regex: params.keyword, $options: 'i' } },
          { content: { $regex: params.keyword, $options: 'i' } },
        ];
      }

      const total = await this.newsArticleModel.countDocuments(filter);
      
      const articles = await this.newsArticleModel.find(filter)
        .sort({ publishedDate: -1 })
        .skip(params.offset || 0)
        .limit(params.limit || 50)
        .exec();
      
      return {
        articles,
        total,
        limit: params.limit || 50,
        offset: params.offset || 0,
      };
    } catch (error) {
      this.logger.error(`Error fetching news: ${error.message}`);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const article = await this.newsArticleModel.findById(id).exec();
      if (!article) {
        throw new Error('Article not found');
      }
      return article;
    } catch (error) {
      this.logger.error(`Error fetching news article: ${error.message}`);
      throw error;
    }
  }

  async getSummary(id: string) {
    try {
      const article = await this.findOne(id);
      
      // If the article already has a summary, return it
      if (article.summary) {
        return { summary: article.summary, sentiment: article.sentiment };
      }
      
      // Otherwise, request a summary from the AI service
      const aiServiceUrl = this.configService.get<string>('AI_SERVICE_URL');
      
      const response = await this.httpService.post(`${aiServiceUrl}/api/summarize`, {
        articles: [{
          title: article.title,
          content: article.content,
          source: article.source,
          published_date: article.publishedDate,
          url: article.url
        }],
        max_length: 300
      }).toPromise();
      
      if (!response) {
        throw new Error('No response from summarization service');
      }
      
      const summaryData = response.data.summaries[0];
      
      // Update the article with the new summary
      article.summary = summaryData.summary;
      article.sentiment = summaryData.sentiment;
      await article.save();
      
      return {
        summary: summaryData.summary,
        sentiment: summaryData.sentiment,
        keyPoints: summaryData.key_points
      };
    } catch (error) {
      this.logger.error(`Error generating summary: ${error.message}`);
      return {
        summary: "Summary currently unavailable",
        sentiment: "neutral",
        error: error.message
      };
    }
  }

  async getRelated(id: string, limit: number = 5) {
    try {
      const article = await this.findOne(id);
      
      // Find articles with similar countries or sectors
      const relatedArticles = await this.newsArticleModel.find({
        _id: { $ne: article.id },
        $or: [
          { countries: { $in: article.countries } },
          { sectors: { $in: article.sectors } },
        ]
      })
      .sort({ publishedDate: -1 })
      .limit(limit)
      .exec();
      
      return { relatedArticles };
    } catch (error) {
      this.logger.error(`Error fetching related articles: ${error.message}`);
      throw error;
    }
  }

  async getTrending(days: number = 7, limit: number = 10) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      
      // Aggregate articles by their key phrases
      const trendingTopics = await this.newsArticleModel.aggregate([
        {
          $match: {
            publishedDate: { $gte: startDate }
          }
        },
        { $unwind: "$keyPhrases" },
        {
          $group: {
            _id: "$keyPhrases",
            count: { $sum: 1 },
            articles: { $push: { id: "$_id", title: "$title" } }
          }
        },
        { $sort: { count: -1 } },
        { $limit: limit }
      ]).exec();
      
      return { 
        trendingTopics: trendingTopics.map(topic => ({
          topic: topic._id,
          count: topic.count,
          articles: topic.articles.slice(0, 3)  // Include up to 3 articles per topic
        }))
      };
    } catch (error) {
      this.logger.error(`Error fetching trending topics: ${error.message}`);
      throw error;
    }
  }

  async favorite(id: string, userId: string) {
    try {
      // In a real implementation, this would add the article to the user's favorites
      // For now, we'll just return success
      return {
        success: true,
        message: `Article ${id} added to favorites for user ${userId}`
      };
    } catch (error) {
      this.logger.error(`Error adding article to favorites: ${error.message}`);
      throw error;
    }
  }

  async search(query: string, limit: number = 20, offset: number = 0) {
    try {
      const articles = await this.newsArticleModel.find({
        $text: { $search: query }
      })
      .sort({ score: { $meta: 'textScore' } })
      .skip(offset)
      .limit(limit)
      .exec();
      
      const total = await this.newsArticleModel.countDocuments({
        $text: { $search: query }
      });
      
      return {
        articles,
        total,
        query,
        limit,
        offset
      };
    } catch (error) {
      this.logger.error(`Error searching articles: ${error.message}`);
      
      // Fall back to regex search if text search fails
      const regexArticles = await this.newsArticleModel.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
        ]
      })
      .sort({ publishedDate: -1 })
      .skip(offset)
      .limit(limit)
      .exec();
      
      const regexTotal = await this.newsArticleModel.countDocuments({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
        ]
      });
      
      return {
        articles: regexArticles,
        total: regexTotal,
        query,
        limit,
        offset
      };
    }
  }

  async fetchNewsFromExternalApi() {
    try {
      // Implement actual news API integration here
      // For now, return mock data
      const mockData = this.getMockNewsData();
      
      for (const newsItem of mockData) {
        await this.saveNewsArticle(newsItem);
      }
      
      this.logger.log(`Fetched ${mockData.length} news articles`);
      return { count: mockData.length };
    } catch (error) {
      this.logger.error(`Error fetching news from API: ${error.message}`);
      throw error;
    }
  }

  private async saveNewsArticle(newsData: any) {
    try {
      // Check if article already exists (by URL)
      const existing = await this.newsArticleModel.findOne({ url: newsData.url }).exec();
      if (existing) {
        return existing;
      }
      
      // Create new article
      const newArticle = new this.newsArticleModel({
        ...newsData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      return await newArticle.save();
    } catch (error) {
      this.logger.error(`Error saving news article: ${error.message}`);
      throw error;
    }
  }

  private getMockNewsData() {
    // Return mock news data for development
    return [
      // Mock data would go here in a real implementation
    ];
  }
} 