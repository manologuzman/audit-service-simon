import { Body, Controller, Post } from '@nestjs/common';
import { CreateAlertDto } from '../dto/create-alert.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateAlertUseCase } from '../use-cases/create-alert.use-case';

@ApiTags('alerts')
@Controller('alerts')
export class AlertController {
  constructor(private readonly createAlertUseCase: CreateAlertUseCase) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Alerta creada correctamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async create(@Body() dto: CreateAlertDto): Promise<{ message: string }> {
    await this.createAlertUseCase.execute(dto);
    return { message: 'Alerta registrada' };
  }
}
