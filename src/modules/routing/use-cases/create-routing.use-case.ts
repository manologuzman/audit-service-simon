import { Injectable } from '@nestjs/common';
import { Routing } from '../entities/routing.entity';
import { RoutingPrismaRepository } from 'src/infrastructure/Repositories/routing-prisma.repository';

@Injectable()
export class CreateRoutingUseCase {
  constructor(private readonly routingRepository: RoutingPrismaRepository) {}

  async execute(routing: Routing): Promise<void> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await this.routingRepository.save(routing);
    } catch (error) {
      console.error('Error saving routing:', error);
      throw new Error('Failed to save routing data');
    }
  }
}
