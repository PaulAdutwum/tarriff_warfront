import { Controller, Get, Post, Body, Param, Query, Put, Delete, UseGuards } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('tariffs')
@Controller('api/tariffs')
export class TariffsController {
  constructor(private readonly tariffsService: TariffsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tariff events with optional filtering' })
  @ApiQuery({ name: 'sourceCountry', required: false })
  @ApiQuery({ name: 'targetCountry', required: false })
  @ApiQuery({ name: 'sector', required: false })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  async findAll(
    @Query('sourceCountry') sourceCountry?: string,
    @Query('targetCountry') targetCountry?: string,
    @Query('sector') sector?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.tariffsService.findAll({
      sourceCountry,
      targetCountry,
      sector,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      limit: limit ? parseInt(limit, 10) : 50,
      offset: offset ? parseInt(offset, 10) : 0,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific tariff event by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the tariff event' })
  async findOne(@Param('id') id: string) {
    return this.tariffsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'ANALYST')
  @ApiOperation({ summary: 'Create a new tariff event' })
  async create(@Body() createTariffDto: any) {
    return this.tariffsService.create(createTariffDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'ANALYST')
  @ApiOperation({ summary: 'Update a tariff event' })
  @ApiParam({ name: 'id', description: 'The ID of the tariff event to update' })
  async update(@Param('id') id: string, @Body() updateTariffDto: any) {
    return this.tariffsService.update(id, updateTariffDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Delete a tariff event' })
  @ApiParam({ name: 'id', description: 'The ID of the tariff event to delete' })
  async remove(@Param('id') id: string) {
    return this.tariffsService.remove(id);
  }

  @Get('impact/sectors')
  @ApiOperation({ summary: 'Get tariff impact by sectors' })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  async getImpactBySector(
    @Query('country') country?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.tariffsService.getImpactBySector({
      country,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    });
  }

  @Get('impact/countries')
  @ApiOperation({ summary: 'Get tariff impact by countries' })
  @ApiQuery({ name: 'sector', required: false })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  async getImpactByCountry(
    @Query('sector') sector?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.tariffsService.getImpactByCountry({
      sector,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    });
  }

  @Get('timeline')
  @ApiOperation({ summary: 'Get tariff events timeline' })
  @ApiQuery({ name: 'country', required: false })
  @ApiQuery({ name: 'sector', required: false })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getTimeline(
    @Query('country') country?: string,
    @Query('sector') sector?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('limit') limit?: string,
  ) {
    return this.tariffsService.getTimeline({
      country,
      sector,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      limit: limit ? parseInt(limit, 10) : 20,
    });
  }
} 