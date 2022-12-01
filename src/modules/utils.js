const getDateAndDay = (dt, timezone) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const totalMilliSeconds = (dt + timezone) * 1000;
  const dateObj = new Date(totalMilliSeconds);
  const date = `${months[dateObj.getUTCMonth()]} ${dateObj.getUTCDate()}`;
  const weekDay = `${days[dateObj.getUTCDay()]}`;
  return [date, weekDay];
  /*  
  # 'dt' => the number of seconds since January 1st, 1970 UTC 
  'timezone' => by how many seconds the timezone in a city is different from UTC
  # (dt + timezone) => number of seconds from January 1st, 1970 to current time in that city
  # converting to date using new Date(...).
  # new Date() => accepts only utc in milliseconds 
  # (dt+timezone) * 1000 => converting utc_seconds to milliseconds.
  # new Date(utc_milliseconds) => the current time in that city in local timezone (different from the timezone in that city)
  # getUTC(date/day/month) gives the time according to the universal time
  **/
};

const getSymbolForUnits = (units) => {
  let tempUnit = '℃',
    windSpeedUnit = 'm/s';
  if (units === 'imperial') {
    tempUnit = '℉';
    windSpeedUnit = 'mph';
  }
  return [tempUnit, windSpeedUnit];
};

const handleGeolocationError = (err) => {
  console.log(err.message);
};

export { getDateAndDay, getSymbolForUnits, handleGeolocationError };
