export interface Article {
  title: string;
  image: string;
  brief: string;
  id: string;
  likes: number;
}

export interface Promotion {
  description: string;
}

export type WeatherState = 'sunny' | 'cloudy' | 'partly-cloudy';

export interface WeatherData {
  name: string;
  temperature: number;
  precipitation: number;
  state: WeatherState;
}
