/* eslint-disable react/prop-types */
export default function RecentCities({ city }) {
  const cityName = city.location.name;

  return (
    <div className="city-card">
      <label>
        Delete
        <input type="checkbox"></input>
      </label>
      <h4>{cityName}</h4>
    </div>
  );
}
