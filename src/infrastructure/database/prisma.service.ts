import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      await this.$connect();
    } catch (error) {
      console.error(
        'Error connecting to the database:',
        (error as Error).message || error,
      );
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      await this.$disconnect();
    } catch (error) {
      console.error(
        'Error disconnecting from the database:',
        (error as Error).message || error,
      );
      throw error;
    }
  }
}
