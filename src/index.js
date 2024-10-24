import "./styles.css";
import fetchWeather from "./functions/fetchWeather";

fetchWeather("vienna").then(result => {
    console.log(result)
})