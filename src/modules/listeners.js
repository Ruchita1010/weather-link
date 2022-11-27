import { getWeatherForSearchedCity } from './weather';

const listenForEvents = () => {
  const cityWeatherSearch = document.querySelector('#city-weather-search');
  cityWeatherSearch.addEventListener('submit', getWeatherForSearchedCity);
};

export { listenForEvents };
