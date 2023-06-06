/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchWeather } from "../../Utils/weather-utils";
import { CirclesWithBar } from "react-loader-spinner";
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

  console.log("cityWeather", cityWeather);

  async function handleFetchWeather() {
    setLoading(true);

    const data = await fetchWeather(searchCity);
    if (data === "error") {
      setLoading(false);
      return alert("Error: Please enter a valid location");
    } else {
      setLastFiveCities([]);
      setCityWeather(data);
      await addCitiesOnSubmit(data.location.name, user.id);
      setLoading(false);
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
  }, [user, cityWeather]);

  async function handlelogOut() {
    await logOut();
    window.location.replace("/");
  }

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <CirclesWithBar />
        </div>
      ) : (
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
          <div className="daily-forecast-field">
            <DailyForecast cityWeather={cityWeather} />
          </div>
          <h4>
            Here you can see a list of cities you have recently searched for!
          </h4>
          <div className="city-parent">
            <div className="city-container">
              {lastFiveCities.map((city, i) => {
                return <RecentCities key={city.created_at + i} city={city} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
