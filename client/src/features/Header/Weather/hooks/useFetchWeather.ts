import { WeatherData } from "@react-query-training/models";
import { useQueries } from "react-query";
import { axiosInstance } from "../../../../api";
import { FIVE_MINUTES } from "../../../../consts";

const queryKeys = {
  base: "weather",
  byCity(city: string) {
    return [this.base, city];
  },
};

const CITIES_TO_FETCH = ["NYC", "TLV", "LND"];

const queries = CITIES_TO_FETCH.map((code) => ({
  queryKey: queryKeys.byCity(code),
  staleTime: FIVE_MINUTES,
  queryFn: async () => {
    const response = await axiosInstance.get<WeatherData>(`/weather/${code}`);
    return response.data;
  },
}));

export function useFetchWeather() {
  return useQueries(queries);
}
