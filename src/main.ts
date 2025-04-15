import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Audit Service')
  .setDescription('API para auditoría de posiciones, rutas y alertas')
  .setVersion('1.0')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `Servicios de Auditoria está ejecutándose en: ${await app.getUrl()}`,
  );

  // console.log(
  //   `Documentación disponible en: ${await app.getUrl()}/documentation/`,
  // );
}

bootstrap();
