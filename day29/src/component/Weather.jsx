import React, { useEffect } from "react";
import store from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { updateWeatherData, updateCity } from "../action/action";

const Weather = () => {
  const citystate = useSelector((state) => state.cityReducer);
  const datastate = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateWeatherData(citystate));
  },[]);

  //   const transformData = (data) => {
  //     return {
  //       icon: data.current.condition.icon,
  //       summary: data.current.condition.text,
  //       temp: data.current.temp_c,
  //       wind_speed: data.current.wind_kph,
  //       precipitation: data.current.precip_mm,
  //       humidity: data.current.humidity,
  //       city_name: data.location.name,
  //     };
  //   };

  //   const handleClick = (e) => {
  //     fetch(
  //       `http://api.weatherapi.com/v1/current.json?key=1a1202bad9e44bf885e185638213007&q=${citystate}`
  //     )
  //       .then((res) => res.json())
  //       .then((weatherdata) => {
  //         dispatch(updateWeatherData(transformData(weatherdata)));
  //       });
  //   };

  return (
    <div className="container">
      <div style={{ marginBottom: "2px" }}>
        <input
          type="text"
          value={citystate}
          placeholder="Enter city"
          onChange={(e) => dispatch(updateCity(e.target.value))}
        />
        <button onClick={() => dispatch(updateWeatherData(citystate))}>
          Check now
        </button>
      </div>
      {/* {JSON.stringify(citystate)}
      {JSON.stringify(datastate)} */}

      <div className="result">
        <img src={datastate.icon} alt="" />
        <h1>{datastate.temp}°</h1>
        <h3>{datastate.summary}</h3>
        <h1>{datastate.city_name}</h1>
      </div>
      <div className="whp">
        <div className="simple">
          <h5>Wind Now</h5>
          <h2>{datastate.wind_speed}km</h2>
        </div>
        <div className="simple">
          <h5>Humidity</h5>
          <h2>{datastate.humidity}%</h2>
        </div>
        <div className="simple">
          <h5>Percipitation</h5>
          <h2>{datastate.precipitation}%</h2>
        </div>
      </div>
    </div>
  );
};

export default Weather;
