/* eslint-disable react/prop-types */

export default function DailyForecast({ cityWeather }) {
  const cityName = cityWeather.location.name;
  const cityCountry = cityWeather.location.country;
  const tempF = cityWeather.current.temp_f;
  const feelsLike = cityWeather.current.feelslike_f;
  const cityRegion = cityWeather.location.region;
  const cityCondition = cityWeather.current.condition.text;

  const imageUrl = `../../../public/${cityCondition}.jpg`;
  const inlineStyle = {
    backgroundImage: `url(${imageUrl.replace(/\s/g, "%20")})`,
  };

  return (
    <div className="daily-forecast-container" style={inlineStyle}>
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
