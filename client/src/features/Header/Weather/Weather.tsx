import { Flex } from "@chakra-ui/react";
import { useFetchWeather } from "./hooks";
import { WeatherWidget } from "./WeatherWidget";

export function Weather() {
  const citiesWeatherData = useFetchWeather();

  return (
    <Flex gap={5}>
      {citiesWeatherData.map(
        ({ data, isFetching }) =>
          data && (
            <WeatherWidget key={data.name} isLoading={isFetching} {...data} />
          )
      )}
    </Flex>
  );
}
