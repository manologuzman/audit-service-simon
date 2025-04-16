import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './infrastructure/database/prisma.module';

import { GeolocationModule } from './modules/geolocation/geolocation.module';
import { RoutingModule } from './modules/routing/routing.module';
import { AlertModule } from './modules/alert/alert.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GeolocationModule,
    RoutingModule,
    AlertModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
