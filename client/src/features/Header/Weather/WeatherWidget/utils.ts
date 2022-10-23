import {
  faCloud,
  faCloudSunRain,
  faCloudRain,
  faCloudSun,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { WeatherData } from "@react-query-training/models";

const RAINY_DAY_RAINFALL = 30;

export function getWeatherIconByWeatherData({
  precipitation,
  state,
}: Pick<WeatherData, "precipitation" | "state">) {
  if (state === "cloudy") {
    if (precipitation <= RAINY_DAY_RAINFALL) {
      return faCloud;
    }
    return faCloudRain;
  }

  if (state === "partly-cloudy" && precipitation <= RAINY_DAY_RAINFALL) {
    return faCloudSun;
  }

  if (precipitation <= RAINY_DAY_RAINFALL) {
    return faSun;
  }

  return faCloudSunRain;
}
