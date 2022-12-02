import { getDateAndDay } from './utils';

const displayWeather = (cityName = 'Tokyo', currWeather, timezone) => {
  const date = document.querySelector('#date');
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');
  const description = document.querySelector('#description');
  const feelsLike = document.querySelector('#feels-like');
  const cloudiness = document.querySelector('#cloudiness');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');

  const [currDate, currWeekday] = getDateAndDay(currWeather.dt, timezone);
  date.textContent = `${currWeekday}, ${currDate}`;
  city.textContent = `In ${cityName}`;
  temp.textContent = `${parseFloat(currWeather.temp).toFixed(1)} ℃`;
  description.textContent = currWeather.weather[0].description;
  feelsLike.textContent = `${parseFloat(currWeather.feels_like).toFixed(1)}℃`;
  cloudiness.textContent = `${parseFloat(currWeather.clouds).toFixed(0)}%`;
  humidity.textContent = `${parseFloat(currWeather.humidity).toFixed(0)}%`;
  windSpeed.textContent = `${parseFloat(currWeather.wind_speed).toFixed(2)}m/s`;
};

const displayDailyForecast = (dailyWeather, timezone) => {
  const weekDaysForecast = document.querySelector('#week-days-forecast');

  // to prevent new data of searched place getting appended
  weekDaysForecast.textContent = '';

  // removes the current day (curr day will be the first elem in the array)
  dailyWeather.shift();

  dailyWeather.forEach((dayWeather) => {
    const weekDayForecast = document.createElement('div');
    weekDayForecast.classList.add('week-day-forecast');

    let [, weekDay] = getDateAndDay(dayWeather.dt, timezone);
    // shorten the week day name
    weekDay = weekDay.slice(0, 3);

    // requiring all the images files
    const images = require.context(
      '../assets/openweathermap/',
      false,
      /\.svg$/
    );

    // creating new elem for each day's weather data
    weekDayForecast.innerHTML = `
      <div class="week-day">${weekDay}</div>
      <img src="${images(`./${dayWeather.weather[0].icon}.svg`)}" 
      class="forecast-weather-icon">
      </img>
      <div class="daily-temp">
      ${parseFloat(dayWeather.temp.min).toFixed(0)}℃ 
      ~ ${parseFloat(dayWeather.temp.max).toFixed(0)}℃ 
      </div>
    `;
    weekDaysForecast.appendChild(weekDayForecast);
  });
};

const changeBackgroundGIF = (mainWeather) => {
  const gifs = require.context('../assets/bg-gifs/', false, /\.gif$/);
  document.body.style.backgroundImage = `url(${gifs(`./${mainWeather}.gif`)})`;
};

const displayWeatherWithChangeUnits = (
  weather,
  tempUnitSymbol,
  windspeedUnitSymbol
) => {
  const temp = document.querySelector('#temp');
  const feelsLike = document.querySelector('#feels-like');
  const windSpeed = document.querySelector('#wind-speed');
  temp.textContent = `
  ${parseFloat(weather.current.temp).toFixed(1)}${tempUnitSymbol}`;
  feelsLike.textContent = `
  ${parseFloat(weather.current.feels_like).toFixed(1)}${tempUnitSymbol}`;
  windSpeed.textContent = `
  ${parseFloat(weather.current.wind_speed).toFixed(2)}${windspeedUnitSymbol}`;

  // updating units in daily forecast
  const dailyTemps = document.querySelectorAll('.daily-temp');
  const dailyWeather = weather.daily;
  dailyTemps.forEach((dailyTemp, index) => {
    dailyTemp.textContent = `
    ${parseFloat(dailyWeather[index].temp.min).toFixed(0)}${tempUnitSymbol}
    ~ ${parseFloat(dailyWeather[index].temp.max).toFixed(0)}${tempUnitSymbol}
    `;
  });
};

const getNextUnits = () => {
  // metric: ℃ and m/s || imperial: ℉ and mph
  const toggleUnitBtn = document.querySelector('#toggle-unit-btn');
  if (toggleUnitBtn.textContent === '℃ | m/s') {
    return 'metric';
  }
  return 'imperial';
};

const changeTextInToggleUnitBtn = () => {
  const toggleUnitBtn = document.querySelector('#toggle-unit-btn');
  const btnContent = toggleUnitBtn.textContent;
  if (btnContent === '℉ | mph') {
    toggleUnitBtn.textContent = '℃ | m/s';
    return;
  }
  toggleUnitBtn.textContent = '℉ | mph';
};

const clearSearchBox = () => {
  const searchBox = document.querySelector('#search-box');
  searchBox.value = '';
};

const getSearchBoxInput = () => {
  const city = document.querySelector('#search-box').value;
  return city.trim();
};

const getCityInputvalue = () => {
  const cityInput = document.querySelector('#watched-city-input');
  return cityInput.value;
};

const addCityToDOM = (weather, cityName) => {
  const watchedCities = document.querySelector('#watched-cities');
  const watchedCity = document.createElement('div');
  watchedCity.classList.add('watched-city');
  const images = require.context('../assets/openweathermap/', false, /\.svg$/);
  watchedCity.innerHTML = `
  <div class="header">
    <p class="watched-city-name">${cityName}</p>
    <button class="delete-watched-city-btn">x</button>
  </div>
  <div class="watched-city-weather-icon-wrapper">
    <img 
    src="${images(`./${weather.current.weather[0].icon}.svg`)}" 
    class="watched-city-weather-icon" />
  </div>
  <div class="watched-city-weather-wrapper">
    <span class="watched-city-temp">
      ${parseFloat(weather.current.temp).toFixed(1)}℃
    </span>
    <span> 
      • ${weather.current.weather[0].main}
    </span>
  </div>
  `;
  watchedCities.appendChild(watchedCity);
};

const deleteCityFromDOM = (deleteWatchedCityBtn) => {
  const watchedCity = deleteWatchedCityBtn.parentElement.parentElement;
  const watchedCities = document.querySelector('#watched-cities');
  watchedCities.removeChild(watchedCity);
};

const render = (weather, city) => {
  displayWeather(city, weather.current, weather.timezone_offset);
  changeBackgroundGIF(weather.current.weather[0].main);
  displayDailyForecast(weather.daily, weather.timezone_offset);
};

export {
  addCityToDOM,
  changeTextInToggleUnitBtn,
  clearSearchBox,
  deleteCityFromDOM,
  displayWeatherWithChangeUnits,
  getNextUnits,
  getCityInputvalue,
  getSearchBoxInput,
  render,
};
