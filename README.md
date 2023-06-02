# Weather-App

import { useState } from "react";
import { fetchWeather } from "../../Utils/weather-utils";

import { portland } from "../../Utils/portland";
import DailyForecast from "../NotProtected/DailyForecast";
import { addCitiesOnSubmit, logOut } from "../../Utils/supabase-utils";
import { useUserContext } from "../../Context/UserContext";

export default function UserHome() {
const { user } = useUserContext();
const [searchCity, setSearchCity] = useState("Portland");
const [cityWeather, setCityWeather] = useState(portland);
// const [lastFiveCities, setLastFiveCities] = useState([]);

// console.log("lastFiveCities", lastFiveCities);

async function handleFetchWeather() {
const data = await fetchWeather(searchCity);
if (data === "error") {
return alert("Error: Please enter a valid location");
} else {
setCityWeather(data);
await addCitiesOnSubmit(cityWeather.location.name, user.id);
return data;
}
}

// async function handleGetFiveLastCities() {
// const data = await getLastFiveCities(user.id);
// console.log("data", data);
// setLastFiveCities(data);
// return data;
// }

// useEffect(() => {
// handleGetFiveLastCities();
// }, []);

async function handlelogOut() {
await logOut();
window.location.replace("/");
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
<button onClick={() => handlelogOut()}>Logout</button>
</header>
<DailyForecast cityWeather={cityWeather} />
</div>
</>
);
}
