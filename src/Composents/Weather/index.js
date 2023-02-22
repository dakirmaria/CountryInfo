import React from "react";
import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";
export default function Weather(props) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
        type="text/css"
      />
      <ReactWeather
        forecast="today"
        apikey="f6973195b3a29969a6ad7e393d2ac38b"
        type="geo"
        lat={props.position[0]}
        lon={props.position[1]}
      />
    </div>
  );
}
