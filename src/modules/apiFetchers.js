const fetchCityName = async (lat, lon) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=43177022892ea041c10d42fb7db78476`
  );
  const data = await response.json();
  return data[0].name;
};

const fetchWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=43177022892ea041c10d42fb7db78476`
  );
  const data = await response.json();
  return data;
};

export { fetchCityName, fetchWeather };
