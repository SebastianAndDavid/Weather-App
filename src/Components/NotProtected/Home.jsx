import "./NotProtected.css";
import { useState } from "react";
import { fetchWeather } from "../../Utils/weather-utils";
import DailyForecast from "./DailyForecast";
import { portland } from "../../Utils/portland";

export default function Home() {
  const [searchCity, setSearchCity] = useState("Portland");
  const [cityWeather, setCityWeather] = useState(portland);

  async function handleFetchWeather() {
    const data = await fetchWeather(searchCity);
    if (data === "error") {
      return alert("Error: Please enter a valid location");
    } else {
      setCityWeather(data);
      return data;
    }
  }

  return (
    <>
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
      </div>
    </>
  );
}
