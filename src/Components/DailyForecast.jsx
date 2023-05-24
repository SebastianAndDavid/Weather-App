/* eslint-disable react/prop-types */
import "./Home.css";

export default function DailyForecast({ cityWeather }) {
  const cityName = cityWeather.location.name;
  const cityCountry = cityWeather.location.country;
  const tempF = cityWeather.current.temp_f;
  const feelsLike = cityWeather.current.feelslike_f;

  return (
    <div className="daily-forecast">
      <h4>{cityName}</h4>
      <p>Country: {cityCountry}</p>
      <p>Current Temperature: {tempF}</p>
      {cityWeather.current.temp_f != feelsLike && (
        <p>Feels like: {feelsLike}</p>
      )}
    </div>
  );
}
