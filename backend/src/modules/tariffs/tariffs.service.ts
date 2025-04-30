import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TariffsService {
  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}

  async findAll(params: {
    sourceCountry?: string;
    targetCountry?: string;
    sector?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    offset?: number;
  }) {
    const { sourceCountry, targetCountry, sector, startDate, endDate, limit = 50, offset = 0 } = params;

    const where = {
      ...(sourceCountry && {
        sourceCountry: {
          OR: [
            { name: { contains: sourceCountry, mode: 'insensitive' } },
            { code: { equals: sourceCountry.toUpperCase() } },
          ],
        },
      }),
      ...(targetCountry && {
        targetCountry: {
          OR: [
            { name: { contains: targetCountry, mode: 'insensitive' } },
            { code: { equals: targetCountry.toUpperCase() } },
          ],
        },
      }),
      ...(sector && {
        sector: {
          name: { contains: sector, mode: 'insensitive' },
        },
      }),
      ...(startDate && {
        effectiveDate: { gte: startDate },
      }),
      ...(endDate && {
        effectiveDate: { lte: endDate },
      }),
    };

    const [tariffs, total] = await Promise.all([
      this.prisma.tariffEvent.findMany({
        where,
        include: {
          sourceCountry: true,
          targetCountry: true,
          sector: true,
        },
        take: limit,
        skip: offset,
        orderBy: { effectiveDate: 'desc' },
      }),
      this.prisma.tariffEvent.count({ where }),
    ]);

    return {
      tariffs,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    };
  }

  async findOne(id: string) {
    const tariff = await this.prisma.tariffEvent.findUnique({
      where: { id },
      include: {
        sourceCountry: true,
        targetCountry: true,
        sector: true,
        stockImpacts: {
          include: {
            stock: true,
            market: true,
          },
        },
      },
    });

    if (!tariff) {
      throw new NotFoundException(`Tariff event with ID ${id} not found`);
    }

    return tariff;
  }

  async create(data: any) {
    return this.prisma.tariffEvent.create({
      data: {
        sourceCountry: { connect: { id: data.sourceCountryId } },
        targetCountry: { connect: { id: data.targetCountryId } },
        sector: { connect: { id: data.sectorId } },
        tariffRate: data.tariffRate,
        previousRate: data.previousRate,
        announcementDate: new Date(data.announcementDate),
        effectiveDate: new Date(data.effectiveDate),
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        description: data.description,
        impactScore: data.impactScore,
        sourceUrl: data.sourceUrl,
      },
      include: {
        sourceCountry: true,
        targetCountry: true,
        sector: true,
      },
    });
  }

  async update(id: string, data: any) {
    // First check if the tariff exists
    const tariff = await this.prisma.tariffEvent.findUnique({
      where: { id },
    });

    if (!tariff) {
      throw new NotFoundException(`Tariff event with ID ${id} not found`);
    }

    return this.prisma.tariffEvent.update({
      where: { id },
      data: {
        ...(data.sourceCountryId && { sourceCountry: { connect: { id: data.sourceCountryId } } }),
        ...(data.targetCountryId && { targetCountry: { connect: { id: data.targetCountryId } } }),
        ...(data.sectorId && { sector: { connect: { id: data.sectorId } } }),
        ...(data.tariffRate !== undefined && { tariffRate: data.tariffRate }),
        ...(data.previousRate !== undefined && { previousRate: data.previousRate }),
        ...(data.announcementDate && { announcementDate: new Date(data.announcementDate) }),
        ...(data.effectiveDate && { effectiveDate: new Date(data.effectiveDate) }),
        ...(data.expiryDate && { expiryDate: new Date(data.expiryDate) }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.impactScore !== undefined && { impactScore: data.impactScore }),
        ...(data.sourceUrl !== undefined && { sourceUrl: data.sourceUrl }),
      },
      include: {
        sourceCountry: true,
        targetCountry: true,
        sector: true,
      },
    });
  }

  async remove(id: string) {
    // First check if the tariff exists
    const tariff = await this.prisma.tariffEvent.findUnique({
      where: { id },
    });

    if (!tariff) {
      throw new NotFoundException(`Tariff event with ID ${id} not found`);
    }

    return this.prisma.tariffEvent.delete({
      where: { id },
    });
  }

  async getImpactBySector(params: {
    country?: string;
    startDate?: Date;
    endDate?: Date;
  }) {
    const { country, startDate, endDate } = params;

    // Find all sectors first
    const sectors = await this.prisma.sector.findMany();
    
    // For each sector, calculate average tariff rate and count
    const sectorImpacts = await Promise.all(
      sectors.map(async (sector) => {
        const where = {
          sectorId: sector.id,
          ...(country && {
            OR: [
              {
                sourceCountry: {
                  OR: [
                    { name: { contains: country, mode: 'insensitive' } },
                    { code: { equals: country.toUpperCase() } },
                  ],
                },
              },
              {
                targetCountry: {
                  OR: [
                    { name: { contains: country, mode: 'insensitive' } },
                    { code: { equals: country.toUpperCase() } },
                  ],
                },
              },
            ],
          }),
          ...(startDate && { effectiveDate: { gte: startDate } }),
          ...(endDate && { effectiveDate: { lte: endDate } }),
        };

        const [tariffs, avg] = await Promise.all([
          this.prisma.tariffEvent.count({ where }),
          this.prisma.tariffEvent.aggregate({
            where,
            _avg: { tariffRate: true },
          }),
        ]);

        return {
          sector: {
            id: sector.id,
            name: sector.name,
          },
          tariffCount: tariffs,
          avgTariffRate: avg._avg.tariffRate || 0,
        };
      })
    );

    return sectorImpacts.filter(impact => impact.tariffCount > 0);
  }

  async getImpactByCountry(params: {
    sector?: string;
    startDate?: Date;
    endDate?: Date;
  }) {
    const { sector, startDate, endDate } = params;

    // Find all countries
    const countries = await this.prisma.country.findMany();

    // For each country, calculate tariffs as source and target
    const countryImpacts = await Promise.all(
      countries.map(async (country) => {
        const whereSource = {
          sourceCountryId: country.id,
          ...(sector && {
            sector: {
              name: { contains: sector, mode: 'insensitive' },
            },
          }),
          ...(startDate && { effectiveDate: { gte: startDate } }),
          ...(endDate && { effectiveDate: { lte: endDate } }),
        };

        const whereTarget = {
          targetCountryId: country.id,
          ...(sector && {
            sector: {
              name: { contains: sector, mode: 'insensitive' },
            },
          }),
          ...(startDate && { effectiveDate: { gte: startDate } }),
          ...(endDate && { effectiveDate: { lte: endDate } }),
        };

        const [
          sourceCount,
          targetCount,
          sourceAvg,
          targetAvg,
        ] = await Promise.all([
          this.prisma.tariffEvent.count({ where: whereSource }),
          this.prisma.tariffEvent.count({ where: whereTarget }),
          this.prisma.tariffEvent.aggregate({
            where: whereSource,
            _avg: { tariffRate: true },
          }),
          this.prisma.tariffEvent.aggregate({
            where: whereTarget,
            _avg: { tariffRate: true },
          }),
        ]);

        return {
          country: {
            id: country.id,
            name: country.name,
            code: country.code,
            region: country.region,
          },
          asSource: {
            tariffCount: sourceCount,
            avgTariffRate: sourceAvg._avg.tariffRate || 0,
          },
          asTarget: {
            tariffCount: targetCount,
            avgTariffRate: targetAvg._avg.tariffRate || 0,
          },
          total: sourceCount + targetCount,
        };
      })
    );

    return countryImpacts.filter(impact => impact.total > 0);
  }

  async getTimeline(params: {
    country?: string;
    sector?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
  }) {
    const { country, sector, startDate, endDate, limit = 20 } = params;

    const where = {
      ...(country && {
        OR: [
          {
            sourceCountry: {
              OR: [
                { name: { contains: country, mode: 'insensitive' } },
                { code: { equals: country.toUpperCase() } },
              ],
            },
          },
          {
            targetCountry: {
              OR: [
                { name: { contains: country, mode: 'insensitive' } },
                { code: { equals: country.toUpperCase() } },
              ],
            },
          },
        ],
      }),
      ...(sector && {
        sector: {
          name: { contains: sector, mode: 'insensitive' },
        },
      }),
      ...(startDate && { effectiveDate: { gte: startDate } }),
      ...(endDate && { effectiveDate: { lte: endDate } }),
    };

    const tariffs = await this.prisma.tariffEvent.findMany({
      where,
      include: {
        sourceCountry: true,
        targetCountry: true,
        sector: true,
      },
      orderBy: { effectiveDate: 'asc' },
      take: limit,
    });

    return tariffs;
  }

  // Additional methods for external API calls
  async fetchTariffDataFromExternalApi() {
    try {
      // This would call an external API to get tariff data
      // For example:
      // const { data } = await firstValueFrom(
      //   this.httpService.get('https://api.example.com/tariffs')
      // );
      
      // For now, return mock data
      return {
        success: true,
        message: 'Mock data fetched',
        timestamp: new Date(),
      };
    } catch (error) {
      console.error('Error fetching external tariff data:', error);
      throw error;
    }
  }
} 