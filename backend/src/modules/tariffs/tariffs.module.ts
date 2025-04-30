import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TariffsController } from './tariffs.controller';
import { TariffsService } from './tariffs.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [TariffsController],
  providers: [TariffsService, PrismaService],
  exports: [TariffsService],
})
export class TariffsModule {} 