/* eslint-disable react/prop-types */
import { fetchWeather } from "../Services/utils";
import DailyForecast from "./DailyForecast";
import "./Home.css";
// import RecentCities from "./RecentCities";
import { addCitiesOnSubmit, logOut } from "../Services/supabase-utils";
import { portland } from "../Services/Portland";
import { Outlet } from "react-router-dom";
import RecentCities from "./RecentCities";
import { useState } from "react";

export default function Home({ user }) {
  const [searchCity, setSearchCity] = useState("Portland");
  const [cityWeather, setCityWeather] = useState(portland);
  const [isClicked, setIsClicked] = useState(false);

  async function handleFetchWeather() {
    const data = await fetchWeather(searchCity);
    if (data === "error") {
      return alert("Error: Please enter a valid location");
    } else {
      setCityWeather(data);
      const addedCities = await addCitiesOnSubmit(data.location.name, user.id);
      setSearchCity("Portland");
      return [data, addedCities];
    }
  }

  async function handlelogOut() {
    const res = await logOut();
    return res;
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
        <button onClick={() => handlelogOut()}>Logout</button>
      </header>
      <DailyForecast cityWeather={cityWeather} />
      <div className="recently-searched-cities">
        <h5
          className="recent-searched-cities-button"
          onClick={() => setIsClicked(true)}
        >
          Recently Searched Cities
        </h5>
      </div>
      {isClicked && (
        <div className="recent-cities">
          <RecentCities city={portland} />
        </div>
      )}
      <Outlet />
    </div>
  );
}
