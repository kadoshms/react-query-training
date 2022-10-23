import { WeatherData } from "@react-query-training/models";
import { Center, Flex, Text } from "@chakra-ui/react";
import { getWeatherIconByWeatherData } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../../../components";

interface WeatherWidgetProps extends WeatherData {
  isLoading?: boolean;
}

export function WeatherWidget({
  precipitation,
  temperature,
  name,
  state,
  isLoading,
}: WeatherWidgetProps) {
  return (
    <Card opacity={isLoading ? 0.6 : 1} flex={1}>
      <Center flex={1}>
        <Flex alignItems="flex-start" flexDirection="column">
          <Flex alignItems="center" gap={4}>
            <FontAwesomeIcon
              size="3x"
              icon={getWeatherIconByWeatherData({ state, precipitation })}
            />
            <Flex alignItems="center">
              <Text color="blue.600" fontSize="6xl">
                {temperature}
              </Text>
              <Text pb={8}>°C</Text>
            </Flex>
          </Flex>
          <Flex gap={2}>
            Precipitation <Text color="orange.600">{precipitation}%</Text>
          </Flex>
          <Text fontSize="4xl">{name}</Text>
        </Flex>
      </Center>
    </Card>
  );
}
