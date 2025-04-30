import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsArticleSchema } from '../../schemas/mongodb-schemas';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'NewsArticle', schema: NewsArticleSchema },
    ]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {} 