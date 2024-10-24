import "./styles.css";
import fetchWeatherFull from "./functions/fetchWeather";
import fetchWeatherShort from "./functions/fetchWeatherShort";

Promise.all([fetchWeatherFull("vienna"), fetchWeatherShort("vienna")]).then(result => {
    console.log(result)
})