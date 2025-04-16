import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlertDto {
  @ApiProperty({ example: 'routing-error', description: 'Tipo de alerta' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: 'Timeout al calcular ruta',
    description: 'Mensaje de alerta',
  })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    example: 'routing-service',
    description: 'Servicio que generó la alerta',
  })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({ example: 'JJJ-255', description: 'ID del dispositivo' })
  @IsString()
  @IsNotEmpty()
  deviceId: string;
}
