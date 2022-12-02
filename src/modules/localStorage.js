const initLocalStorage = () => {
  const watchedCities = [];
  localStorage.setItem('watchedCities', JSON.stringify(watchedCities));
};

const addCityToLocalStorage = (city) => {
  const storedWatchedCities = JSON.parse(localStorage.getItem('watchedCities'));
  storedWatchedCities.push(city);
  localStorage.setItem('watchedCities', JSON.stringify(storedWatchedCities));
};

const deleteCityFromLocalStorage = (city) => {
  const storedWatchedCities = JSON.parse(localStorage.getItem('watchedCities'));
  const filteredWatchedCities = storedWatchedCities.filter(
    (storedWatchedCity) => storedWatchedCity !== city
  );
  localStorage.setItem('watchedCities', JSON.stringify(filteredWatchedCities));
};

const retrievedStoredData = () => {
  const storedWatchedCities = JSON.parse(localStorage.getItem('watchedCities'));
  return storedWatchedCities;
};

export {
  addCityToLocalStorage,
  initLocalStorage,
  deleteCityFromLocalStorage,
  retrievedStoredData,
};
