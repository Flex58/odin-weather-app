import key from "../variables/key";

const fetchWeather = async (city, unit = "metric") => {
  const weatherApi = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      city +
      "?unitGroup=" +
      unit +
      "&key=" +
      key,
  );
  const weatherJson = await weatherApi.json();
  console.log(weatherJson);
  return weatherJson;
};

export default fetchWeather;
