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

enum RoutingStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

class Coordinates {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;
}

export class RoutingDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsObject()
  @ValidateNested()
  @Type(() => Coordinates)
  origin: Coordinates;

  @IsObject()
  @ValidateNested()
  @Type(() => Coordinates)
  destination: Coordinates;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coordinates)
  route: Coordinates[];

  @IsEnum(RoutingStatus)
  status: RoutingStatus;

  @IsNumber()
  @IsPositive()
  cacheTTL: number;
}
