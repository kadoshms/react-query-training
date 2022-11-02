import { WeatherData } from "@react-query-training/models";
import { useQueries, useQuery } from "react-query";
import { axiosInstance } from "../../../../api";
import { FIVE_MINUTES } from "../../../../consts";

const queryKeys = {
  weather: "weather",
  cities: ["weather", "cities"],
  byCity(city: string) {
    return [queryKeys.weather, city];
  },
};

function useFetchWeatherCities() {
  return useQuery<string[]>(queryKeys.cities, async () => {
    const response = await axiosInstance.get(`weather/cities`);
    return response.data;
  }, );
}

export function useFetchWeather() {
  const { data: cities = [] } = useFetchWeatherCities();

  const queries = cities.map((code) => ({
    queryKey: queryKeys.byCity(code),
    staleTime: FIVE_MINUTES,
    enabled: Boolean(cities),
    queryFn: async () => {
      const response = await axiosInstance.get<WeatherData>(`weather/${code}`);
      return response.data;
    },
  }));

  return useQueries(queries);
}
