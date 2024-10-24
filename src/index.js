import "./styles.css";
import fetchWeatherFull from "./functions/fetchWeather";
import fetchWeatherShort from "./functions/fetchWeatherShort";

const cityInput = document.querySelector("#city");
const form = document.querySelector("#get-weather");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const weatherInfo = await Promise.all([
    fetchWeatherFull(cityInput.value),
    fetchWeatherShort(cityInput.value),
  ]);

  await console.log(weatherInfo);
});
