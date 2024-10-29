import "./styles.css";
import fetchWeatherFull from "./functions/fetchWeather";
import renderCurrent from "./functions/renderCurrent";
import renderDays from "./functions/renderDays";
import clearScreen from "./functions/clearScreen";

const cityInput = document.querySelector("#city");
const form = document.querySelector("#get-weather");
const test = document.querySelector("#load")

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //0 = metric, 1 = us
  test.style.display = "block"
  const weatherInfo = await Promise.all([
    fetchWeatherFull(cityInput.value),
    fetchWeatherFull(cityInput.value, "us"),
  ]);
  test.style.display = "none"
  clearScreen("#selectedWeather");
  clearScreen("#weatherForecast");
  renderCurrent(weatherInfo[0], weatherInfo[1]);
  renderDays(weatherInfo[0], weatherInfo[1]);
});
