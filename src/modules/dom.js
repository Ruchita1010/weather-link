const displayWeather = (currWeather, cityName = 'Tokyo') => {
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');
  const description = document.querySelector('#description');
  const feelsLike = document.querySelector('#feels-like');
  const cloudiness = document.querySelector('#cloudiness');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');

  city.textContent = `In ${cityName}`;
  temp.innerHTML = `${parseFloat(currWeather.temp).toFixed(1)} ℃`;
  description.textContent = currWeather.weather[0].description;
  feelsLike.textContent = `${parseFloat(currWeather.feels_like).toFixed(1)}℃`;
  cloudiness.textContent = `${parseFloat(currWeather.clouds).toFixed(0)}%`;
  humidity.textContent = `${parseFloat(currWeather.humidity).toFixed(0)}%`;
  windSpeed.textContent = `${parseFloat(currWeather.wind_speed).toFixed(2)}m/s`;
};

const getSearchBoxInput = () => {
  const city = document.querySelector('#search-box').value;
  return city.trim();
};

const render = (weather, city) => {
  displayWeather(weather.current, city);
};

export { getSearchBoxInput, render };
