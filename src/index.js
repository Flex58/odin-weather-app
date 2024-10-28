import "./styles.css";
import fetchWeatherFull from "./functions/fetchWeather";
import renderCurrent from "./functions/renderCurrent";
import renderDays from "./functions/renderDays";
import clearScreen from "./functions/clearScreen";

const cityInput = document.querySelector("#city");
const form = document.querySelector("#get-weather");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //0 = metric, 1 = us
  const weatherInfo = await Promise.all([
    fetchWeatherFull(cityInput.value),
    fetchWeatherFull(cityInput.value, "us"),
  ]);
  clearScreen("#selectedWeather");
  clearScreen("#weatherForecast");
  renderCurrent(weatherInfo[0], weatherInfo[1]);
  renderDays(weatherInfo[0], weatherInfo[1]);
});
