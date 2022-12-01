const fetchCityName = async (lat, lon) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=43177022892ea041c10d42fb7db78476`
  );
  const data = await response.json();
  return data[0].name;
};

const fetchLatAndLong = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=43177022892ea041c10d42fb7db78476`
  );
  const data = await response.json();
  return [data[0].lat, data[0].lon, data[0].name];
};

const fetchWeather = async (lat, lon, units = 'metric') => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${units}&appid=43177022892ea041c10d42fb7db78476`
  );
  const data = await response.json();
  return data;
};

export { fetchCityName, fetchLatAndLong, fetchWeather };
