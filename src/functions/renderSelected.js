import getDayName from "./getDayName";
import activeUnit from "../variables/activeUnit";
import clearScreen from "./clearScreen";
import renderDays from "./renderDays";

const renderSelected = (metricWeather, usWeather, id) => {
  let weather;
  let unitIcon;

  if (activeUnit.getActiveUnit() == "metric") {
    weather = metricWeather;
    unitIcon = "km/h";
  } else {
    weather = usWeather;
    unitIcon = "mph";
  }
  let date = new Date(weather.days[id].datetime);

  const container = document.querySelector("#selectedWeather");

  const weatherLeft = document.createElement("div");
  const weatherIcon = document.createElement("img");
  const tempDiv = document.createElement("h1");

  const unitContainer = document.createElement("div");
  const celsius = document.createElement("div");
  const divider = document.createElement("div");
  const fahrenheit = document.createElement("div");

  const extraInfoContainer = document.createElement("div");
  const precipitation = document.createElement("p");
  const humid = document.createElement("p");
  const wind = document.createElement("p");

  const descriptionContainer = document.createElement("div");
  const currentConditions = document.createElement("h2");
  const day = document.createElement("p");
  const description = document.createElement("p");

  weatherIcon.classList.add(weather.days[id].icon);
  tempDiv.textContent = weather.days[id].temp;

  celsius.textContent = "°C";
  divider.textContent = "|";
  fahrenheit.textContent = "°F";

  precipitation.textContent =
    "Precipitation: " + weather.days[id].precip + "%";
  humid.textContent = "Humidity: " + weather.days[id].humidity + "%";
  wind.textContent = "Wind: " + weather.days[id].windspeed + unitIcon;

  currentConditions.textContent = "Weather";
  day.textContent =
    getDayName(date.getDay());
  description.textContent = weather.days[id].conditions;

  celsius.addEventListener("click", () => {
    if (weather == usWeather) {
      activeUnit.switchActiveUnit();
      weather = metricWeather;
      clearScreen("#selectedWeather");
      clearScreen("#weatherForecast");
      renderSelected(metricWeather, usWeather, id);
      renderDays(metricWeather, usWeather);
    }
  });

  fahrenheit.addEventListener("click", () => {
    if (weather == metricWeather) {
      activeUnit.switchActiveUnit();
      weather = usWeather;
      clearScreen("#selectedWeather");
      clearScreen("#weatherForecast");
      renderSelected(metricWeather, usWeather, id);
      renderDays(metricWeather, usWeather);
    }
  });

  weatherLeft.appendChild(weatherIcon);
  weatherLeft.appendChild(tempDiv);

  unitContainer.appendChild(celsius);
  unitContainer.appendChild(divider);
  unitContainer.appendChild(fahrenheit);

  extraInfoContainer.appendChild(precipitation);
  extraInfoContainer.appendChild(humid);
  extraInfoContainer.appendChild(wind);

  weatherLeft.appendChild(unitContainer);
  weatherLeft.appendChild(extraInfoContainer);

  descriptionContainer.appendChild(currentConditions);
  descriptionContainer.appendChild(day);
  descriptionContainer.appendChild(description);

  container.appendChild(weatherLeft);
  container.appendChild(descriptionContainer);
};

export default renderSelected;
