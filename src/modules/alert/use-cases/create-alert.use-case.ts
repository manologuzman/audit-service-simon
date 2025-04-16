import { Injectable, BadRequestException } from '@nestjs/common';
import { AlertPrismaRepository } from 'src/infrastructure/Repositories/alert.prisma.repository';
import { Alert } from '../entities/alert.entity';
import { AlertSpecification } from '../specifications/valid-alert.spec';

@Injectable()
export class CreateAlertUseCase {
  constructor(private readonly repo: AlertPrismaRepository) {}

  async execute(data: {
    type: string;
    message: string;
    source: string;
    deviceId: string;
  }): Promise<void> {
    const alert = new Alert(
      data.type,
      data.message,
      data.source,
      data.deviceId,
    );
    if (!AlertSpecification.isSatisfiedBy(alert)) {
      throw new BadRequestException('Datos inválidos para la alerta');
    }

    await this.repo.create(alert);
  }
}
