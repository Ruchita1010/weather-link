import { getWeatherForSearchedCity, toggleUnits } from './weather';

const listenForEvents = () => {
  const cityWeatherSearch = document.querySelector('#city-weather-search');
  cityWeatherSearch.addEventListener('submit', getWeatherForSearchedCity);

  const toggleUnitBtn = document.querySelector('#toggle-unit-btn');
  toggleUnitBtn.addEventListener('click', toggleUnits);
};

export { listenForEvents };
