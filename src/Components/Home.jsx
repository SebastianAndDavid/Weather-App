import { useState } from "react";
import { fetchWeather } from "../Services/utils";
import DailyForecast from "./DailyForecast";
import "./Home.css";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [cityWeather, setCityWeather] = useState("");

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
      <DailyForecast />
    </div>
  );
}
