import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Routing } from '../entities/routing.entity';
import { RoutingDto } from '../dto/create-routing.dto';
import { CreateRoutingUseCase } from '../use-cases/create-routing.use-case';

@Controller('routing')
export class RoutingController {
  constructor(private readonly createRoutingUseCase: CreateRoutingUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
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
