import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Routing } from 'src/modules/routing/entities/routing.entity';
import { IRoutingRepository } from 'src/modules/routing/repositories/routing-repository';

@Injectable()
export class RoutingPrismaRepository implements IRoutingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(routing: Routing): Promise<void> {
    await this.prisma.routing.create({
      data: {
        deviceId: routing.deviceId,
        originLat: routing.origin.lat,
        originLng: routing.origin.lng,
        destinationLat: routing.destination.lat,
        destinationLng: routing.destination.lng,
        status: routing.status,
        cacheTTL: routing.cacheTTL,
        timestamp: routing.timestamp,
        route: {
          createMany: {
            data: routing.route.map((p) => ({ lat: p.lat, lng: p.lng })),
          },
        },
      },
    });
  }

  async create(routing: Routing): Promise<Routing> {
    // Implementa la lógica para crear un nuevo routing si es necesario
    await this.save(routing); // O cualquier otra lógica que necesites
    return routing;
  }
}
