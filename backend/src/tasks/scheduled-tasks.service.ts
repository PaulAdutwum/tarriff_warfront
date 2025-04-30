import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewsArticleMongo } from '../schemas/mongodb-schemas';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ScheduledTasksService {
  private readonly logger = new Logger(ScheduledTasksService.name);

  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
    private configService: ConfigService,
    @InjectModel('NewsArticle') private newsArticleModel: Model<NewsArticleMongo>,
  ) {}

  /**
   * Fetch new tariff announcements daily at 1:00 AM
   */
  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async fetchTariffUpdates() {
    try {
      this.logger.log('Fetching tariff updates from external APIs...');
      
      // This would call real external APIs in production
      // Example:
      // const apiKey = this.configService.get<string>('OPEN_TRADE_API_KEY');
      // const response = await firstValueFrom(
      //   this.httpService.get(`https://api.example.com/tariffs/latest`, {
      //     headers: { 'Authorization': `Bearer ${apiKey}` }
      //   })
      // );
      // const newTariffs = response.data;
      
      // Mock data for development
      const newTariffs = this.getMockTariffData();
      
      let createdCount = 0;
      let updatedCount = 0;
      
      // Process each tariff
      for (const tariff of newTariffs) {
        // Check if source and target countries exist, create if not
        const sourceCountry = await this.findOrCreateCountry(tariff.sourceCountry);
        const targetCountry = await this.findOrCreateCountry(tariff.targetCountry);
        
        // Check if sector exists, create if not
        const sector = await this.findOrCreateSector(tariff.sector);
        
        // Check if this tariff already exists
        const existingTariff = await this.prisma.tariffEvent.findFirst({
          where: {
            sourceCountryId: sourceCountry.id,
            targetCountryId: targetCountry.id,
            sectorId: sector.id,
            effectiveDate: new Date(tariff.effectiveDate),
          },
        });
        
        if (existingTariff) {
          // Update if tariff rate has changed
          if (existingTariff.tariffRate !== tariff.tariffRate) {
            await this.prisma.tariffEvent.update({
              where: { id: existingTariff.id },
              data: {
                tariffRate: tariff.tariffRate,
                previousRate: existingTariff.tariffRate,
                updatedAt: new Date(),
              },
            });
            updatedCount++;
          }
        } else {
          // Create new tariff entry
          await this.prisma.tariffEvent.create({
            data: {
              sourceCountryId: sourceCountry.id,
              targetCountryId: targetCountry.id,
              sectorId: sector.id,
              tariffRate: tariff.tariffRate,
              previousRate: tariff.previousRate,
              announcementDate: new Date(tariff.announcementDate),
              effectiveDate: new Date(tariff.effectiveDate),
              expiryDate: tariff.expiryDate ? new Date(tariff.expiryDate) : null,
              description: tariff.description,
              sourceUrl: tariff.sourceUrl,
            },
          });
          createdCount++;
        }
      }
      
      this.logger.log(`Tariff update completed. Created: ${createdCount}, Updated: ${updatedCount}`);
    } catch (error) {
      this.logger.error('Error fetching tariff updates:', error.message);
    }
  }

  /**
   * Fetch news articles related to tariffs every 4 hours
   */
  @Cron(CronExpression.EVERY_4_HOURS)
  async fetchTariffNews() {
    try {
      this.logger.log('Fetching tariff-related news...');
      
      // This would call real news APIs in production
      // Example:
      // const apiKey = this.configService.get<string>('NEWS_API_KEY');
      // const response = await firstValueFrom(
      //   this.httpService.get(
      //     `https://newsapi.org/v2/everything?q=tariff OR trade&apiKey=${apiKey}&language=en&sortBy=publishedAt&pageSize=100`
      //   )
      // );
      // const articles = response.data.articles;
      
      // Mock data for development
      const articles = this.getMockNewsData();
      
      let createdCount = 0;
      let skippedCount = 0;
      
      // Process each article
      for (const article of articles) {
        // Check if article already exists
        const existingArticle = await this.newsArticleModel.findOne({ url: article.url }).exec();
        
        if (!existingArticle) {
          // Create new article
          await this.newsArticleModel.create({
            externalId: `news-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            title: article.title,
            content: article.content,
            source: article.source.name,
            author: article.author,
            publishedDate: new Date(article.publishedAt),
            url: article.url,
            imageUrl: article.urlToImage,
            // These fields would be populated by the AI analysis
            summary: null,
            sentiment: null,
            relevanceScore: null,
            keyPhrases: [],
            countries: [], // Would be extracted by NER
            sectors: [],   // Would be extracted by NER
            aiAnalysis: {
              entities: [],
              topics: [],
              sentimentDetails: {
                positive: 0,
                negative: 0,
                neutral: 0,
                compound: 0,
              },
              relatedArticles: [],
            },
            createdAt: new Date(),
            updatedAt: new Date(),
          });
          createdCount++;
        } else {
          skippedCount++;
        }
      }
      
      this.logger.log(`News fetch completed. Created: ${createdCount}, Skipped: ${skippedCount}`);
      
      // Trigger AI analysis for new articles (would call your AI service)
      if (createdCount > 0) {
        await this.triggerNewsAnalysis();
      }
    } catch (error) {
      this.logger.error('Error fetching news:', error.message);
    }
  }

  /**
   * Update market data every 30 minutes during market hours
   */
  @Cron('0,30 * 9-17 * * 1-5') // At minute 0 and 30, between 9 AM and 5 PM, Monday through Friday
  async updateMarketData() {
    try {
      this.logger.log('Updating market data...');
      
      // This would call real stock APIs in production
      // Example:
      // const apiKey = this.configService.get<string>('ALPHA_VANTAGE_API_KEY');
      // const stocks = await this.prisma.stock.findMany();
      // 
      // for (const stock of stocks) {
      //   const response = await firstValueFrom(
      //     this.httpService.get(
      //       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apiKey=${apiKey}`
      //     )
      //   );
      //   const quote = response.data['Global Quote'];
      //   
      //   if (quote) {
      //     await this.prisma.stock.update({
      //       where: { id: stock.id },
      //       data: { currentPrice: parseFloat(quote['05. price']) },
      //     });
      //     
      //     await this.prisma.stockPrice.create({
      //       data: {
      //         stockId: stock.id,
      //         date: new Date(),
      //         openPrice: parseFloat(quote['02. open']),
      //         highPrice: parseFloat(quote['03. high']),
      //         lowPrice: parseFloat(quote['04. low']),
      //         closePrice: parseFloat(quote['05. price']),
      //         volume: parseInt(quote['06. volume']),
      //       },
      //     });
      //   }
      // }
      
      this.logger.log('Market data update completed');
    } catch (error) {
      this.logger.error('Error updating market data:', error.message);
    }
  }

  /**
   * Calculate economic impact scores weekly
   */
  @Cron(CronExpression.EVERY_WEEKEND)
  async calculateImpactScores() {
    try {
      this.logger.log('Calculating tariff impact scores...');
      
      // Get recent tariffs without impact scores
      const recentTariffs = await this.prisma.tariffEvent.findMany({
        where: {
          impactScore: null,
          effectiveDate: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
        include: {
          sourceCountry: true,
          targetCountry: true,
          sector: true,
        },
      });
      
      // This would call your AI service in production
      // for (const tariff of recentTariffs) {
      //   try {
      //     const aiServiceUrl = this.configService.get<string>('AI_SERVICE_URL');
      //     const response = await firstValueFrom(
      //       this.httpService.post(`${aiServiceUrl}/api/predict-impact`, {
      //         country_from: tariff.sourceCountry.name,
      //         country_to: tariff.targetCountry.name,
      //         sector: tariff.sector.name,
      //         tariff_rate: tariff.tariffRate,
      //       })
      //     );
      //     
      //     const prediction = response.data;
      //     
      //     // Update tariff with impact score
      //     await this.prisma.tariffEvent.update({
      //       where: { id: tariff.id },
      //       data: {
      //         impactScore: prediction.predicted_impact.confidence * 10, // Scale to 0-10
      //       },
      //     });
      //   } catch (analyticError) {
      //     this.logger.error(`Error calculating impact for tariff ${tariff.id}:`, analyticError.message);
      //   }
      // }
      
      this.logger.log(`Impact score calculation completed for ${recentTariffs.length} tariffs`);
    } catch (error) {
      this.logger.error('Error calculating impact scores:', error.message);
    }
  }

  /**
   * Process user alerts
   */
  @Cron(CronExpression.EVERY_HOUR)
  async processUserAlerts() {
    try {
      this.logger.log('Processing user alerts...');
      
      // In a real implementation, this would:
      // 1. Find active alerts
      // 2. Check for matching conditions (new tariffs, news, etc.)
      // 3. Create notifications or send emails
      
      this.logger.log('Alert processing completed');
    } catch (error) {
      this.logger.error('Error processing alerts:', error.message);
    }
  }

  /**
   * Trigger AI analysis for news articles
   */
  private async triggerNewsAnalysis() {
    try {
      // Find articles without AI analysis
      const articlesToAnalyze = await this.newsArticleModel
        .find({ summary: null })
        .sort({ publishedDate: -1 })
        .limit(50)
        .lean();
      
      if (articlesToAnalyze.length === 0) {
        return;
      }
      
      this.logger.log(`Triggering AI analysis for ${articlesToAnalyze.length} articles`);
      
      // This would call your AI service in production
      // const aiServiceUrl = this.configService.get<string>('AI_SERVICE_URL');
      // 
      // for (const article of articlesToAnalyze) {
      //   try {
      //     const response = await firstValueFrom(
      //       this.httpService.post(`${aiServiceUrl}/api/summarize`, {
      //         articles: [{
      //           title: article.title,
      //           content: article.content,
      //           source: article.source,
      //           published_date: article.publishedDate,
      //           url: article.url,
      //         }],
      //         max_length: 300,
      //       })
      //     );
      //     
      //     const summary = response.data.summaries[0];
      //     
      //     // Update article with AI analysis
      //     await this.newsArticleModel.findByIdAndUpdate(article._id, {
      //       summary: summary.summary,
      //       sentiment: summary.sentiment,
      //       keyPhrases: summary.key_points,
      //       updatedAt: new Date(),
      //     });
      //   } catch (analyticError) {
      //     this.logger.error(`Error analyzing article ${article._id}:`, analyticError.message);
      //   }
      // }
    } catch (error) {
      this.logger.error('Error triggering news analysis:', error.message);
    }
  }

  /**
   * Helper function to find or create a country
   */
  private async findOrCreateCountry(countryData: any) {
    const country = await this.prisma.country.findFirst({
      where: {
        OR: [
          { name: countryData.name },
          { code: countryData.code },
        ],
      },
    });
    
    if (country) {
      return country;
    }
    
    return this.prisma.country.create({
      data: {
        name: countryData.name,
        code: countryData.code,
        region: countryData.region || 'Unknown',
        flagUrl: countryData.flagUrl,
        economicStatus: countryData.economicStatus,
      },
    });
  }

  /**
   * Helper function to find or create a sector
   */
  private async findOrCreateSector(sectorData: any) {
    const sector = await this.prisma.sector.findFirst({
      where: { name: sectorData.name },
    });
    
    if (sector) {
      return sector;
    }
    
    return this.prisma.sector.create({
      data: {
        name: sectorData.name,
        description: sectorData.description,
      },
    });
  }

  /**
   * Generate mock tariff data for development
   */
  private getMockTariffData() {
    return [
      {
        sourceCountry: { name: 'United States', code: 'USA', region: 'North America' },
        targetCountry: { name: 'China', code: 'CHN', region: 'Asia' },
        sector: { name: 'Electronics', description: 'Consumer and industrial electronics' },
        tariffRate: 25,
        previousRate: 10,
        announcementDate: '2023-06-01',
        effectiveDate: '2023-07-01',
        expiryDate: null,
        description: 'Increased tariffs on electronic components and devices',
        sourceUrl: 'https://example.com/tariff-announcement',
      },
      {
        sourceCountry: { name: 'European Union', code: 'EU', region: 'Europe' },
        targetCountry: { name: 'United Kingdom', code: 'GBR', region: 'Europe' },
        sector: { name: 'Agriculture', description: 'Agricultural products and foodstuffs' },
        tariffRate: 15,
        previousRate: 5,
        announcementDate: '2023-06-05',
        effectiveDate: '2023-07-15',
        expiryDate: null,
        description: 'New post-Brexit tariffs on agricultural imports',
        sourceUrl: 'https://example.com/eu-uk-tariffs',
      },
    ];
  }

  /**
   * Generate mock news data for development
   */
  private getMockNewsData() {
    return [
      {
        source: { id: 'financial-times', name: 'Financial Times' },
        author: 'John Smith',
        title: 'US-China Trade Tensions Escalate with New Tariffs',
        content: 'The United States has announced new tariffs on Chinese electronic goods, escalating the ongoing trade war between the two economic superpowers. The 25% tariff will affect an estimated $50 billion worth of imports...',
        publishedAt: '2023-06-02T10:30:00Z',
        url: 'https://example.com/us-china-tariffs-1',
        urlToImage: 'https://example.com/images/tariff-news-1.jpg',
      },
      {
        source: { id: 'economist', name: 'The Economist' },
        author: 'Jane Doe',
        title: 'EU Imposes New Agricultural Tariffs on UK Imports',
        content: 'In the latest post-Brexit development, the European Union has announced a 15% tariff on agricultural products from the United Kingdom. This move is expected to significantly impact farmers and food processors...',
        publishedAt: '2023-06-06T08:45:00Z',
        url: 'https://example.com/eu-uk-tariffs-1',
        urlToImage: 'https://example.com/images/tariff-news-2.jpg',
      },
    ];
  }
} 