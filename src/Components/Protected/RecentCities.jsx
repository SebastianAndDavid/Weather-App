import { useEffect, useState } from "react";
import { deleteCityById } from "../../Utils/supabase-utils";
import { fetchWeather } from "../../Utils/weather-utils";

/* eslint-disable react/prop-types */
export default function RecentCities({ city }) {
  const [cityObj, setCityObj] = useState({});

  const cityCondition = cityObj?.current?.condition?.text;

  const imageUrl = `../../../public/${cityCondition}.jpg`;
  const inlineStyle = {
    backgroundImage: `url(${imageUrl.replace(/\s/g, "%20")})`,
  };
  console.log("cityObj", cityObj);

  async function handleFetchCityObj() {
    const data = await fetchWeather(city.city);
    console.log("data", data);
    setCityObj(data);
    return data;
  }

  useEffect(() => {
    handleFetchCityObj();
  }, []);

  async function handleCityDelete() {
    await deleteCityById(city.id);
  }
  return (
    <div className="city-card" style={inlineStyle}>
      <h4>{city.city}</h4>
      <label>
        Delete
        <input type="checkbox" onClick={() => handleCityDelete()}></input>
      </label>
    </div>
  );
}
