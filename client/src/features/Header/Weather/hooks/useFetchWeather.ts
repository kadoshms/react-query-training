const CITIES_TO_FETCH = ["NYC", "TLV", "LND"];

export function useFetchWeather() {
  return CITIES_TO_FETCH.map(name => ({
    data: {
      name: 'N/A',
      temperature: 0,
      precipitation: 0,
      state: 'sunny' as const
    },
    isFetching: false
  }));
}
