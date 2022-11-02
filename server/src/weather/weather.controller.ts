import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('cities')
  public async getCities() {
    return this.weatherService.getCities();
  }

  @Get(':code')
  public async getWeatherByCity(@Param('code') code: string) {
    const data = await this.weatherService.getByCity(code);

    if (!data) {
      throw new NotFoundException('City not found');
    }

    return data;
  }
}
