import { useState } from "react";
import { fetchWeather } from "../Services/utils";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [cityWeather, setCityWeather] = useState("");

  console.log("cityWeather", cityWeather);

  async function handleFetchWeather() {
    const city = searchCity;
    const data = await fetchWeather(city);
    setCityWeather(data);
    return data;
  }

  return (
    <div>
      <input
        onChange={(e) => setSearchCity(e.target.value)}
        placeholder="Search a City..."
      />
      <button onClick={handleFetchWeather}>Submit</button>
    </div>
  );
}
