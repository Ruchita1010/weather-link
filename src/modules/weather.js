import { fetchCityName, fetchLatAndLong, fetchWeather } from './apiFetchers';
import { getSearchBoxInput, render } from './dom';

const getWeatherFromCurrentLocation = async (lat, lon) => {
  const city = await fetchCityName(lat, lon);
  const weather = await fetchWeather(lat, lon);
  render(weather, city);
};

const getWeatherForSearchedCity = async (e) => {
  e.preventDefault();
  const searchedCity = getSearchBoxInput();
  const [lat, lon, cityName] = await fetchLatAndLong(searchedCity);
  const weather = await fetchWeather(lat, lon);
  render(weather, cityName);
};

export { getWeatherFromCurrentLocation, getWeatherForSearchedCity };
