/* eslint-disable react/prop-types */
export default function RecentCities({ city }) {
  console.log("city in recent city", city);
  return (
    <div className="city-card">
      <label>
        Delete
        <input type="checkbox"></input>
      </label>
      <h4>{city.city}</h4>
    </div>
  );
}
