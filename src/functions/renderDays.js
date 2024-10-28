import getDayShort from "./getDayShort";
import activeUnit from "../variables/activeUnit";
import clearScreen from "./clearScreen";
import renderSelected from "./renderSelected";

const renderDays = (metricWeather, usWeather) => {
  const MAX_DAYS = 8;

  let weather;
  if (activeUnit.getActiveUnit() == "metric") {
    weather = metricWeather;
  } else {
    weather = usWeather;
  }

  const container = document.querySelector("#weatherForecast");

  for (let i = 0; i < MAX_DAYS; i++) {
    let date = new Date(weather.days[i].datetime);
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = i;
    const dayName = document.createElement("h3");
    const icon = document.createElement("img");
    const tempHigh = document.createElement("p");
    const tempLow = document.createElement("p");

    dayName.textContent = getDayShort(date.getDay());
    icon.classList.add(weather.days[i].icon);
    icon.classList.add("small")
    tempHigh.textContent = weather.days[i].tempmax + "°";
    tempLow.textContent = weather.days[i].tempmin + "°";

    card.addEventListener("click", () => {
        clearScreen("#selectedWeather")
        renderSelected(metricWeather, usWeather, card.id)
    })

    card.appendChild(dayName);
    card.appendChild(icon);
    card.appendChild(tempHigh);
    card.appendChild(tempLow);
    container.appendChild(card);
  }
};

export default renderDays;
