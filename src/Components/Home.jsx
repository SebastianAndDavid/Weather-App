export default function Home() {
  const API_KEY = "d014903a08a44fcbaa5164753232205";
  const CITY = "Portland";

  async function fetchWeather() {
    const data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
    );
    const res = await data.json();
    console.log("res", res);
  }

  fetchWeather();

  return <div>Home</div>;
}
