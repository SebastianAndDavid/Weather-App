import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { deleteCityById } from "../../Utils/supabase-utils";
import { fetchWeather } from "../../Utils/weather-utils";

export default function RecentCities({ city, handleClick }) {
  const [cityObj, setCityObj] = useState({});

  const cityCondition = cityObj?.current?.condition?.text;

  const imageUrl = `../../../public/${cityCondition}.jpg`;
  const inlineStyle = {
    backgroundImage: `url(${imageUrl.replace(/\s/g, "%20")})`,
  };

  async function handleFetchCityObj() {
    const data = await fetchWeather(city.city);
    setCityObj(data);
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      await handleFetchCityObj();
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleCityDelete]);

  async function handleCityDelete() {
    await deleteCityById(city.id);
    handleClick(true);
  }

  return (
    <div className="city-card" style={inlineStyle}>
      <h4>{city.city}</h4>
      <label>
        Delete
        <input type="checkbox" onClick={() => handleCityDelete()} />
      </label>
    </div>
  );
}
RecentCities.propTypes = {
  city: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
