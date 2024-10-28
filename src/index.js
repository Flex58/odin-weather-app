import "./styles.css";
import fetchWeatherFull from "./functions/fetchWeather"
import renderCurrent from "./functions/renderCurrent";

const cityInput = document.querySelector("#city");
const form = document.querySelector("#get-weather");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //0 = metric, 1 = us
  const weatherInfo = await Promise.all([
    fetchWeatherFull(cityInput.value),
    fetchWeatherFull(cityInput.value, "us"),
  ]);

  renderCurrent(weatherInfo[0], weatherInfo[1])

  await console.log(weatherInfo);
});
