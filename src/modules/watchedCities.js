import { fetchLatAndLong, fetchWeather } from './apiFetchers';
import { addCityToDOM, deleteCityFromDOM, getCityInputvalue } from './dom';
import {
  addCityToLocalStorage,
  deleteCityFromLocalStorage,
  retrievedStoredData,
} from './localStorage';

const addCityToWatchedCities = async (e) => {
  e.preventDefault();
  const inputtedCityName = getCityInputvalue();
  const [lat, lon, city] = await fetchLatAndLong(inputtedCityName);
  const weather = await fetchWeather(lat, lon);
  addCityToDOM(weather, city);
  addCityToLocalStorage(city);
};

const deleteCityFromWatchedCities = async (e) => {
  const check = e.target.classList.contains('delete-watched-city-btn');
  if (!check) {
    return;
  }
  deleteCityFromDOM(e.target);
  const city = e.target.previousElementSibling.textContent;
  deleteCityFromLocalStorage(city);
};

const getStoredWatchedCities = () => {
  const storedWatchedCities = retrievedStoredData();
  storedWatchedCities.forEach(async (storedWatchedCity) => {
    const [lat, lon, city] = await fetchLatAndLong(storedWatchedCity);
    const weather = await fetchWeather(lat, lon);
    addCityToDOM(weather, city);
  });
};

export {
  addCityToWatchedCities,
  deleteCityFromWatchedCities,
  getStoredWatchedCities,
};
