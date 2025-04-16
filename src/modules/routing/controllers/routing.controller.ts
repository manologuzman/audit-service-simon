import { Body, Controller, Post } from '@nestjs/common';
import { Routing } from '../entities/routing.entity';
import { RoutingDto } from '../dto/create-routing.dto';
import { CreateRoutingUseCase } from '../use-cases/create-routing.use-case';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Routing')
@ApiBearerAuth()
@Controller('routing')
export class RoutingController {
  constructor(private readonly createRoutingUseCase: CreateRoutingUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Registrar ruta calculada' })
  @ApiResponse({ status: 201, description: 'Ruta registrada correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async saveRouting(@Body() dto: RoutingDto): Promise<{ message: string }> {
    const routing = new Routing(
      dto.deviceId,
      dto.origin,
      dto.destination,
      dto.route,
      dto.status,
      dto.cacheTTL,
    );
    await this.createRoutingUseCase.execute(routing);
    return { message: 'Routing data saved successfully' };
  }
}
