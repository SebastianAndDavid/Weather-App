const key = import.meta.env.VITE_API_KEY;

async function fetchWeather(city) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  );
  const res = await data.json();
  return res;
}

export { fetchWeather };
