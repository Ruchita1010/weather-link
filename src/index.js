import './styles/main.css';
import './styles/weather.css';
import { getWeatherFromCurrentLocation } from './modules/weather';
import { handleGeolocationError } from './modules/utils';

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
};

init();
