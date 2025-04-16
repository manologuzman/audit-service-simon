import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsISO8601,
} from 'class-validator';

export class CreateGeolocationDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsISO8601()
  @IsOptional()
  timestamp: string;
}
