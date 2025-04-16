import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsISO8601,
} from 'class-validator';

export class CreateGeolocationDto {
  @ApiProperty({ example: 'AAA-222' })
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty({ example: 4.710989 })
  @IsNumber()
  lat: number;

  @ApiProperty({ example: -74.07209 })
  @IsNumber()
  lng: number;

  @ApiProperty({ example: '2025-04-15T17:05:00.000Z' })
  @IsISO8601()
  @IsOptional()
  timestamp: string;
}
