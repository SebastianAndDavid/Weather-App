import { useState } from "react";
import { fetchWeather } from "../Services/utils";
import DailyForecast from "./DailyForecast";
import "./Home.css";
import RecentCities from "./RecentCities";

export default function Home() {
  const portland = {
    location: {
      name: "Portland",
      region: "Oregon",
      country: "United States of America",
      lat: 45.52,
      lon: -122.68,
      tz_id: "America/Los_Angeles",
      localtime_epoch: 1684884316,
      localtime: "2023-05-23 16:25",
    },
    current: {
      last_updated_epoch: 1684883700,
      last_updated: "2023-05-23 16:15",
      temp_c: 17.2,
      temp_f: 63.0,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_mph: 2.2,
      wind_kph: 3.6,
      wind_degree: 10,
      wind_dir: "N",
      pressure_mb: 1019.0,
      pressure_in: 30.09,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 45,
      cloud: 75,
      feelslike_c: 17.2,
      feelslike_f: 63.0,
      vis_km: 16.0,
      vis_miles: 9.0,
      uv: 6.0,
      gust_mph: 3.6,
      gust_kph: 5.8,
    },
  };
  const [searchCity, setSearchCity] = useState("");
  const [cityWeather, setCityWeather] = useState(portland);

  console.log("cityWeather", cityWeather);

  async function handleFetchWeather() {
    const city = searchCity;
    const data = await fetchWeather(city);
    setCityWeather(data);
    return data;
  }

  return (
    <div className="home">
      <header className="search-field">
        <h3>Weather App</h3>
        <input
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Search a City..."
        />
        <button onClick={handleFetchWeather}>Submit</button>
        <button>Logout</button>
      </header>
      <DailyForecast cityWeather={cityWeather} />
      <div className="recently-searched-cities">
        <h5>Recently Searched Cities</h5>
      </div>
      <div className="recent-cities">
        <RecentCities city={portland} />
        <RecentCities city={portland} />
        <RecentCities city={portland} />
        <RecentCities city={portland} />
        <RecentCities city={portland} />
      </div>
    </div>
  );
}
