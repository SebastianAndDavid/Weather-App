/* eslint-disable react/prop-types */

export default function DailyForecast({ cityWeather }) {
  const cityName = cityWeather.location.name;
  const cityCountry = cityWeather.location.country;
  const tempF = cityWeather.current.temp_f;
  const feelsLike = cityWeather.current.feelslike_f;
  const cityRegion = cityWeather.location.region;

  return (
    <div className="daily-forecast-container">
      <div className="daily-forecast">
        <h4>{cityName}</h4>
        <p>Country: {cityCountry}</p>
        <p>Region: {cityRegion}</p>
        <p>Current Temperature: {tempF}</p>
        {cityWeather.current.temp_f != feelsLike && (
          <p>Feels like: {feelsLike}</p>
        )}
      </div>
    </div>
  );
}
