import { Module } from '@nestjs/common';
import { GeolocationController } from './controllers/geolocation.controller';
import { CreateGeolocationUseCase } from './use-cases/create-geolocation.use-case';
import { PrismaService } from '../../infrastructure/database/prisma.service';

@Module({
  controllers: [GeolocationController],
  providers: [CreateGeolocationUseCase, PrismaService],
})
export class GeolocationModule {}
