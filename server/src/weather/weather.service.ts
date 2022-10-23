import { Injectable } from '@nestjs/common';
import { timeout } from '../utils';
import { getData } from './data';

@Injectable()
export class WeatherService {
  public async getByCity(code: string) {
    await timeout(1300);
    const data = getData();
    const weatherData = data[code];
    if (!weatherData) {
      return null;
    }
    return weatherData;
  }
}
