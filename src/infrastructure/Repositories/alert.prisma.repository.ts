import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Alert } from 'src/modules/alert/entities/alert.entity';
import { IAlertRepository } from 'src/modules/alert/repositories/alert-repository';

@Injectable()
export class AlertPrismaRepository implements IAlertRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(alert: Alert): Promise<Alert> {
    const createdAlert = await this.prisma.alert.create({
      data: {
        type: alert.type,
        message: alert.message,
        source: alert.source,
        deviceId: alert.deviceId,
        timestamp: alert.timestamp,
      },
    });
    return createdAlert;
  }
}
