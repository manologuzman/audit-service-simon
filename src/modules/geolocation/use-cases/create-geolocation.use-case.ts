/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateGeolocationDto } from '../dto/create-geolocation.dto';
import { PrismaService } from '../../../infrastructure/database/prisma.service';
import { ValidGeolocationSpecification } from '../specifications/valid-geolocation.spec';
import { Geolocation } from '../entities/geolocation.entity';

@Injectable()
export class CreateGeolocationUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(dto: CreateGeolocationDto): Promise<Geolocation> {
    const spec = new ValidGeolocationSpecification();
    if (!spec.isSatisfiedBy(dto)) {
      throw new BadRequestException('Datos inválidos');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const geo: Geolocation = await this.prisma.geolocation.create({
      data: {
        deviceId: dto.deviceId,
        lat: dto.lat,
        lng: dto.lng,
        timestamp: new Date(),
      },
    });

    if (geo.lat === undefined || geo.lng === undefined) {
      throw new Error('Latitude and longitude must be defined');
    }

    if (!geo.deviceId) {
      throw new Error('Device ID must be defined');
    }

    return new Geolocation(
      geo.deviceId,
      geo.lat ?? 0,
      geo.lng ?? 0,
      new Date(geo.timestamp),
    );
  }
}
