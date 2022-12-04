import listenForEvents from './modules/listeners';
import { initLocalStorage } from './modules/localStorage';
import { getStoredWatchedCities } from './modules/watchedCities';
import { getWeatherFromCurrentLocation } from './modules/weather';
import './styles/main.css';
import './styles/weather.css';
import './styles/daily-forecast.css';
import './styles/watched-cities.css';

const getUserLocation = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  getWeatherFromCurrentLocation(lat, lon);
};

const handleGeolocationError = (err) => {
  console.log(err.message);
};

const init = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      getUserLocation,
      handleGeolocationError
    );
  } else {
    console.log('Your browser does not support geolocation!');
  }

  if (localStorage.watchedCities === undefined) {
    initLocalStorage();
  } else {
    getStoredWatchedCities();
  }
  listenForEvents();
};

window.onload = init;
