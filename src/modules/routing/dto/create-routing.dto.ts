import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

enum RoutingStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

class Coordinates {
  @ApiProperty({ example: 4.567 })
  @IsNumber()
  lat: number;

  @ApiProperty({ example: -74.567 })
  @IsNumber()
  lng: number;
}

export class RoutingDto {
  @ApiProperty({ example: 'ZZZ-001' })
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty({ type: Coordinates })
  @IsObject()
  @ValidateNested()
  @Type(() => Coordinates)
  origin: Coordinates;

  @ApiProperty({ type: Coordinates })
  @IsObject()
  @ValidateNested()
  @Type(() => Coordinates)
  destination: Coordinates;

  @ApiProperty({ type: [Coordinates] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coordinates)
  route: Coordinates[];

  @ApiProperty({ example: 'success' })
  @IsEnum(RoutingStatus)
  status: RoutingStatus;

  @ApiProperty({ example: 300 })
  @IsNumber()
  @IsPositive()
  cacheTTL: number;
}
