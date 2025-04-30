import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll(
    @Query('country') country?: string,
    @Query('sector') sector?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('keyword') keyword?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.newsService.findAll({
      country,
      sector,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      keyword,
      limit: limit ? parseInt(limit, 10) : 50,
      offset: offset ? parseInt(offset, 10) : 0,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Get(':id/summary')
  getSummary(@Param('id') id: string) {
    return this.newsService.getSummary(id);
  }

  @Get(':id/related')
  getRelated(
    @Param('id') id: string,
    @Query('limit') limit?: string,
  ) {
    return this.newsService.getRelated(id, limit ? parseInt(limit, 10) : 5);
  }

  @Get('trending')
  getTrending(
    @Query('days') days?: string,
    @Query('limit') limit?: string,
  ) {
    return this.newsService.getTrending(
      days ? parseInt(days, 10) : 7,
      limit ? parseInt(limit, 10) : 10,
    );
  }

  @Post(':id/favorite')
  favorite(
    @Param('id') id: string,
    @Body('userId') userId: string,
  ) {
    return this.newsService.favorite(id, userId);
  }

  @Get('search')
  search(
    @Query('query') query: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.newsService.search(
      query,
      limit ? parseInt(limit, 10) : 20,
      offset ? parseInt(offset, 10) : 0,
    );
  }
} 