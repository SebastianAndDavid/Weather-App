/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchWeather } from "../../Utils/weather-utils";

import { portland } from "../../Utils/portland";
import DailyForecast from "../NotProtected/DailyForecast";
import RecentCities from "./RecentCities";
import {
  addCitiesOnSubmit,
  getLastFiveCities,
  logOut,
} from "../../Utils/supabase-utils";
import { useUserContext } from "../../Context/UserContext";

export default function UserHome() {
  const { user } = useUserContext();
  const [searchCity, setSearchCity] = useState("Portland");
  const [cityWeather, setCityWeather] = useState(portland);
  const [lastFiveCities, setLastFiveCities] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleFetchWeather() {
    const data = await fetchWeather(searchCity);
    if (data === "error") {
      return alert("Error: Please enter a valid location");
    } else {
      setLastFiveCities([]);
      setCityWeather(data);
      await addCitiesOnSubmit(data.location.name, user.id);
      return data;
    }
  }

  async function handleFetchLastFiveCities() {
    const data = await getLastFiveCities(user.id);
    if (data) {
      setLastFiveCities([]);
      setLastFiveCities(data);
    } else {
      setLastFiveCities([]);
    }
  }

  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    handleLoading();
  }, []);

  useEffect(() => {
    handleFetchLastFiveCities();
  }, [user, cityWeather, lastFiveCities]);

  async function handlelogOut() {
    await logOut();
    window.location.replace("/");
  }

  return (
    <>
      {!loading && (
        <div className="home">
          <header className="search-field">
            <h3>Weather App</h3>
            <h4>Welcome {user.email}</h4>
            <input
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Search a City..."
            />
            <button onClick={handleFetchWeather}>Submit</button>
            <button onClick={() => handlelogOut()}>Logout</button>
          </header>
          <DailyForecast cityWeather={cityWeather} />
          {lastFiveCities.map((city, i) => {
            return <RecentCities key={city.created_at + i} city={city} />;
          })}
        </div>
      )}
    </>
  );
}
