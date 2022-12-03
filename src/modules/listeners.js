import {
  addCityToWatchedCities,
  deleteCityFromWatchedCities,
} from './watchedCities';
import { getWeatherForSearchedCity, toggleUnits } from './weather';

const listenForEvents = () => {
  // listening for search of a city's weather
  const cityWeatherSearch = document.querySelector('#city-weather-search');
  cityWeatherSearch.addEventListener('submit', getWeatherForSearchedCity);

  // listening for units toggle
  const toggleUnitBtn = document.querySelector('#toggle-unit-btn');
  toggleUnitBtn.addEventListener('click', toggleUnits);

  // listening for addition of watched city
  const watchedCitiesForm = document.querySelector('#watched-cities-form');
  watchedCitiesForm.addEventListener('submit', addCityToWatchedCities);

  // listening for deletion of watched city
  const watchedCities = document.querySelector('#watched-cities');
  watchedCities.addEventListener('click', deleteCityFromWatchedCities);
};

export default listenForEvents;
