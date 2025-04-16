import { Body, Controller, Post } from '@nestjs/common';
import { CreateGeolocationDto } from '../dto/create-geolocation.dto';
import { CreateGeolocationUseCase } from '../use-cases/create-geolocation.use-case';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Geolocation')
@ApiBearerAuth()
@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly createUseCase: CreateGeolocationUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Registrar geolocalización' })
  @ApiResponse({
    status: 201,
    description: 'Geolocalización registrada correctamente',
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async create(@Body() dto: CreateGeolocationDto) {
    return this.createUseCase.execute(dto);
  }
}
