import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { AlertController } from './controllers/alert.controller';
import { CreateAlertUseCase } from './use-cases/create-alert.use-case';
import { AlertPrismaRepository } from 'src/infrastructure/Repositories/alert.prisma.repository';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [
    CreateAlertUseCase,
    AlertPrismaRepository,
    {
      provide: 'AlertRepository',
      useClass: AlertPrismaRepository,
    },
    PrismaService,
  ],
})
export class AlertModule {}
