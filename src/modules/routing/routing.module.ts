import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { RoutingController } from './controllers/routing.controller';
import { CreateRoutingUseCase } from './use-cases/create-routing.use-case';
import { RoutingPrismaRepository } from 'src/infrastructure/Repositories/routing-prisma.repository';

@Module({
  imports: [],
  controllers: [RoutingController],
  providers: [
    CreateRoutingUseCase,
    RoutingPrismaRepository,
    {
      provide: 'RoutingRepository',
      useClass: RoutingPrismaRepository,
    },
    PrismaService,
  ],
})
export class RoutingModule {}
