import { faker } from '@faker-js/faker';

const states = ['cloudy', 'partly-cloudy', 'sunny'];

function createWeatherData({
  name,
  maxTemperature,
  maxRainfall,
}: {
  name: string;
  maxTemperature: number;
  maxRainfall: number;
}) {
  return {
    name,
    temperature: faker.datatype.number({
      min: maxTemperature - 4,
      max: maxTemperature,
    }),
    precipitation: faker.datatype.number({
      min: maxRainfall - 10,
      max: maxRainfall,
    }),
    state: faker.helpers.arrayElement(states),
  };
}

export function getData() {
  return {
    NYC: createWeatherData({
      name: 'New York City',
      maxTemperature: 28,
      maxRainfall: 70,
    }),
    TLV: createWeatherData({
      name: 'Tel Aviv',
      maxTemperature: 36,
      maxRainfall: 20,
    }),
    LND: createWeatherData({
      name: 'London',
      maxTemperature: 24,
      maxRainfall: 90,
    }),
  };
}
