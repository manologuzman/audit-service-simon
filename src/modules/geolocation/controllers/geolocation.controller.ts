import { Body, Controller, Post } from '@nestjs/common';
import { CreateGeolocationDto } from '../dto/create-geolocation.dto';
import { CreateGeolocationUseCase } from '../use-cases/create-geolocation.use-case';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Geolocation')
@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly createUseCase: CreateGeolocationUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Registrar ubicación GPS de un vehículo' })
  async create(@Body() dto: CreateGeolocationDto) {
    return this.createUseCase.execute(dto);
  }
}
