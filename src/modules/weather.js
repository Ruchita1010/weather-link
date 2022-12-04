import { fetchCityName, fetchLatAndLong, fetchWeather } from './apiFetchers';
import {
  changeTextInToggleUnitBtn,
  clearInputFieldValue,
  displayErrorScreen,
  displayWeatherWithChangeUnits,
  getInputFieldValue,
  getNextUnits,
  render,
} from './dom';
import { getSymbolForUnits } from './utils';

/* getter and setter for keeping track of the location => required when changing the units 
as we again make an API call to get the weather data as per units) */
let location = {
  set coords([latValue, lonValue]) {
    this.latitude = latValue;
    this.longitude = lonValue;
  },

  get coords() {
    return [this.latitude, this.longitude];
  },
};

const getWeatherFromCurrentLocation = async (lat, lon) => {
  try {
    const cityName = await fetchCityName(lat, lon);
    const weather = await fetchWeather(lat, lon);
    render(weather, cityName);
    // set/store the lat and lon
    location.coords = [lat, lon];
  } catch (error) {
    displayErrorScreen(error.message);
  }
};

const checkNeedForUnitsToggle = () => {
  const units = getNextUnits();
  /* if units are changed and a city is searched, the toggle btn text needs to be changed 
  bcoz the resultant data of the searched city will be rendered in ℃ and the btn will also show ℃ */
  if (units === 'metric') {
    changeTextInToggleUnitBtn();
  }
};

const getWeatherForSearchedCity = async (e) => {
  e.preventDefault();
  const searchedCity = getInputFieldValue('search-city-inputfield');
  clearInputFieldValue('search-city-inputfield');
  try {
    const [lat, lon, cityName] = await fetchLatAndLong(searchedCity);
    const weather = await fetchWeather(lat, lon);
    checkNeedForUnitsToggle();
    render(weather, cityName);
    // set/store the lat and lon
    location.coords = [lat, lon];
  } catch (error) {
    displayErrorScreen(error.message);
  }
};

const toggleUnits = async () => {
  const [lat, lon] = location.coords;
  const units = getNextUnits();
  try {
    const weather = await fetchWeather(lat, lon, units);
    const [tempUnitSymbol, windspeedUnitSymbol] = getSymbolForUnits(units);
    changeTextInToggleUnitBtn();
    displayWeatherWithChangeUnits(weather, tempUnitSymbol, windspeedUnitSymbol);
  } catch (error) {
    displayErrorScreen(error.message);
  }
};

export {
  getWeatherFromCurrentLocation,
  getWeatherForSearchedCity,
  toggleUnits,
};
