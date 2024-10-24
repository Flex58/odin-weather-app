import key from "../variables/key";

const fetchWeatherFull = async (city, unit = "metric") => {
  try {
    const weatherApi = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        city +
        "?unitGroup=" +
        unit +
        "&key=" +
        key,
    );
    if (!weatherApi.ok) {
      throw new Error(`Something went wrong. Code: ${weatherApi.status}`);
    }
    const weatherJson = await weatherApi.json();
    return weatherJson;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default fetchWeatherFull;
