import { listenForEvents } from './modules/listeners';
import { handleGeolocationError } from './modules/utils';
import { getWeatherFromCurrentLocation } from './modules/weather';
import './styles/main.css';
import './styles/weather.css';
import './styles/daily-forecast.css';

const getUserLocation = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  getWeatherFromCurrentLocation(lat, lon);
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
  listenForEvents();
};

init();
