import axios from "axios";
import { useState } from "react";
import "./Weather.css";
interface WeatherData {
  //add properties because the periods are within the properties attribute.
  properties: {
    periods: {
      name: string;
      temperature: number;
      icon: string;
      detailedForecast: string;
    }[];
  };
}
export default function Weather() {
  const [weather, setWeather] = useState<WeatherData>();
  axios
    .get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => {
      setWeather(response.data);
    });
  return (
    <div className="body">
      <h1 className="weatherUpdates">Weather Updates</h1>
      <div className="Element">
        <div className="weather">
          {weather?.properties.periods.map((period, index) => (
            <div>
              <div className="daytemp">
                <h2 className="day">{period.name}</h2>
                <h3 className="temp">{period.temperature}</h3>
              </div>
              <img src={period.icon} alt="" />
              <div>{period.detailedForecast}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
