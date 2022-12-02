import {
  addCityToWatchedCities,
  deleteCityFromWatchedCities,
} from './watchedCities';
import { getWeatherForSearchedCity, toggleUnits } from './weather';

const listenForEvents = () => {
  const cityWeatherSearch = document.querySelector('#city-weather-search');
  cityWeatherSearch.addEventListener('submit', getWeatherForSearchedCity);

  const toggleUnitBtn = document.querySelector('#toggle-unit-btn');
  toggleUnitBtn.addEventListener('click', toggleUnits);

  const watchedCitiesForm = document.querySelector('#watched-cities-form');
  watchedCitiesForm.addEventListener('submit', addCityToWatchedCities);

  const watchedCities = document.querySelector('#watched-cities');
  watchedCities.addEventListener('click', deleteCityFromWatchedCities);
};

export { listenForEvents };
