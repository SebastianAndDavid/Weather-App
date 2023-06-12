import "./NotProtected.css";
import { useState } from "react";
import { fetchWeather } from "../../Utils/weather-utils";
import DailyForecast from "./DailyForecast";
import { portland } from "../../Utils/portland";
import SignUpAuth from "./SignUpAuth";
import SignInAuth from "./SignInAuth";

export default function Home() {
  const [searchCity, setSearchCity] = useState("Portland");
  const [cityWeather, setCityWeather] = useState(portland);
  const [isClicked, setIsClicked] = useState(false);
  const [loginClick, setLoginClick] = useState(false);

  async function handleFetchWeather() {
    const data = await fetchWeather(searchCity);
    if (data === "error") {
      return alert("Error: Please enter a valid location");
    } else {
      setCityWeather(data);
      return data;
    }
  }

  function handleClick() {
    setIsClicked(true);
  }

  function handleLogin() {
    setLoginClick(true);
    !isClicked ? setIsClicked(loginClick) : setLoginClick(false);
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
          <button onClick={() => handleLogin()}>Login</button>
        </header>
        <div className="daily-forecast-field">
          <DailyForecast cityWeather={cityWeather} />
        </div>
        <div className="login-container">
          <div className="login-field">
            <p>Want to see your recently searched cities?</p>
            <p className="login" onClick={() => handleClick()}>
              Click here to create an account!
            </p>
          </div>
        </div>
        {isClicked && !loginClick && <SignUpAuth />}
        {loginClick && <SignInAuth />}
      </div>
    </>
  );
}
