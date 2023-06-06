import { deleteCityById } from "../../Utils/supabase-utils";

/* eslint-disable react/prop-types */
export default function RecentCities({ city }) {
  async function handleCityDelete() {
    await deleteCityById(city.id);
  }
  return (
    <div className="city-card">
      <h4>{city.city}</h4>
      <label>
        Delete
        <input type="checkbox" onClick={() => handleCityDelete()}></input>
      </label>
    </div>
  );
}
