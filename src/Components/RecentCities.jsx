/* eslint-disable react/prop-types */
export default function RecentCities({ city }) {
  const cityName = city.location.name;

  return (
    <div className="recent-cities">
      <h4>{cityName}</h4>
    </div>
  );
}
