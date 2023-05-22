const key = import.meta.env;

async function fetchWeather(city) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  );
  const res = await data.json();
  return res;
}

export { fetchWeather };
