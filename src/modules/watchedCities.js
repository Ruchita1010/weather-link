import { fetchLatAndLong, fetchWeather } from './apiFetchers';
import { addCityToDOM, deleteCityFromDOM, getCityInputvalue } from './dom';

const addCityToWatchedCities = async (e) => {
  e.preventDefault();
  const city = getCityInputvalue();
  const [lat, lon, cityName] = await fetchLatAndLong(city);
  const weather = await fetchWeather(lat, lon);
  addCityToDOM(weather, cityName);
};

const deleteCityFromWatchedCities = async (e) => {
  const check = e.target.classList.contains('delete-watched-city-btn');
  if (!check) {
    return;
  }
  deleteCityFromDOM(e.target);
};

export { addCityToWatchedCities, deleteCityFromWatchedCities };
