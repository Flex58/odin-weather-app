import "./styles.css";
import fetchWeatherFull from "./functions/fetchWeather";
import getDayName from "./functions/getDayName";
import activeUnit from "./variables/activeUnit";


const cityInput = document.querySelector("#city");
const form = document.querySelector("#get-weather");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //0 = metric, 1 = us
  const weatherInfo = await Promise.all([
    fetchWeatherFull(cityInput.value),
    fetchWeatherFull(cityInput.value, "us"),
  ]);

  await console.log(weatherInfo);
});
