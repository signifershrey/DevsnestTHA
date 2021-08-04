export const updateCity = (cityName) => {
  return {
    type: "UPDATE_CITY",
    payload: cityName,
  };
};



// export const updateWeatherData = (weatherdata) => {
//   return (dispatch) => {
//     dispatch({
//       type: "UPDATE_WEATHER",
//       payload: weatherdata,
//     });
//   };
// };

// const url = `http://api.weatherapi.com/v1/current.json?key=1a1202bad9e44bf885e185638213007&`;

const transformData = (data) => {
  return {
    icon: data.current.condition.icon,
    summary: data.current.condition.text,
    temp: data.current.temp_c,
    wind_speed: data.current.wind_kph,
    precipitation: data.current.precip_mm,
    humidity: data.current.humidity,
    city_name: data.location.name,
  };
};

export const updateWeatherData = (place) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=1a1202bad9e44bf885e185638213007&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_WEATHER",
          payload: transformData(data),
        });
      });
  };
};