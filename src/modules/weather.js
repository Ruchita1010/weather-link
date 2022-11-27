import { fetchCityName, fetchWeather } from './apiFetchers';
import { render } from './dom';

const getWeatherFromCurrentLocation = async (lat, lon) => {
  const city = await fetchCityName(lat, lon);
  const weather = await fetchWeather(lat, lon);
  render(weather, city);
};

export { getWeatherFromCurrentLocation };
