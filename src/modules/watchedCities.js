import { fetchLatAndLong, fetchWeather } from './apiFetchers';
import {
  addCityToDOM,
  checkWatchedCityExists,
  clearAlertForWatchedCityInput,
  clearInputFieldValue,
  deleteCityFromDOM,
  displayAlertForWatchedCityInput,
  displayErrorScreen,
  getInputFieldValue,
} from './dom';
import {
  addCityToLocalStorage,
  deleteCityFromLocalStorage,
  retrievedStoredData,
} from './localStorage';

const addCityToWatchedCities = async (e) => {
  e.preventDefault();
  const inputtedCityName = getInputFieldValue('watched-city-inputfield');
  clearInputFieldValue('watched-city-inputfield');
  // if city exists in the list, show alert msg for 2s
  if (checkWatchedCityExists(inputtedCityName)) {
    displayAlertForWatchedCityInput();
    setTimeout(() => {
      clearAlertForWatchedCityInput();
    }, 2000);
    return;
  }
  try {
    const [lat, lon, city] = await fetchLatAndLong(inputtedCityName);
    const weather = await fetchWeather(lat, lon);
    addCityToDOM(weather, city);
    addCityToLocalStorage(city);
  } catch (error) {
    displayErrorScreen(error.message);
  }
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
    try {
      const [lat, lon, city] = await fetchLatAndLong(storedWatchedCity);
      const weather = await fetchWeather(lat, lon);
      addCityToDOM(weather, city);
    } catch (error) {
      displayErrorScreen(error.message);
    }
  });
};

export {
  addCityToWatchedCities,
  deleteCityFromWatchedCities,
  getStoredWatchedCities,
};
