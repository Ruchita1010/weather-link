import { fetchCityName, fetchLatAndLong, fetchWeather } from './apiFetchers';
import {
  changeTextInToggleUnitBtn,
  clearSearchBox,
  displayWeatherWithChangeUnits,
  getNextUnits,
  getSearchBoxInput,
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
  const cityName = await fetchCityName(lat, lon);
  const weather = await fetchWeather(lat, lon);
  render(weather, cityName);
  // set/store the lat and lon
  location.coords = [lat, lon];
};

const getWeatherForSearchedCity = async (e) => {
  e.preventDefault();
  const searchedCity = getSearchBoxInput();
  clearSearchBox();
  const [lat, lon, cityName] = await fetchLatAndLong(searchedCity);
  const weather = await fetchWeather(lat, lon);
  render(weather, cityName);
  // set/store the lat and lon
  location.coords = [lat, lon];
};

const toggleUnits = async () => {
  const [lat, lon] = location.coords;
  const units = getNextUnits();
  const weather = await fetchWeather(lat, lon, units);
  const [tempUnitSymbol, windspeedUnitSymbol] = getSymbolForUnits(units);
  changeTextInToggleUnitBtn();
  displayWeatherWithChangeUnits(weather, tempUnitSymbol, windspeedUnitSymbol);
};

export {
  getWeatherFromCurrentLocation,
  getWeatherForSearchedCity,
  toggleUnits,
};
