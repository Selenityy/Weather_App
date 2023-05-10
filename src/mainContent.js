import { findWeather, updateWeatherToday } from "./APILogic";
import { addText, createImg, createNewDiv } from "./DOMlogic";
import { forecastEndpoint, today } from ".";

const WEATHER_ICONS = require.context(
  "./assets/weather_icons",
  true,
  /[a-zA-Z0-9.-]/
);

const defaultData = () => {
  let defaultLocation = "Minneapolis, MN";
  findWeather(forecastEndpoint, today, defaultLocation).then((data) => {
    updateWeatherToday(data);
  });
};

const createMainContent = () => {
  // Current Forecast Temperature
  createNewDiv("currentForecastTemp", "mainSection");
  createNewDiv("currentLocation", "currentForecastTemp");
  createNewDiv("currentTime", "currentForecastTemp");
  createNewDiv("currentDate", "currentForecastTemp");
  createNewDiv("currentMaxTemp", "currentForecastTemp");
  createNewDiv("currentTemp", "currentForecastTemp");
  createNewDiv("tempF", "currentForecastTemp");
  addText("tempF", "°F");
  createNewDiv("currentMinTemp", "currentForecastTemp");
  createNewDiv("currentCondition", "currentForecastTemp");
  createImg("currentConditionImg", "currentCondition");
  createNewDiv("currentConditionText", "currentCondition");

  // Current Forecast Details
  createNewDiv("currentForecastDetails", "mainSection");
  createNewDiv("details", "currentForecastDetails");
  createNewDiv("humidity", "details");
  createNewDiv("precipitation", "details");
  createNewDiv("wind", "details");
  createNewDiv("sunrise", "details");
  createNewDiv("sunset", "details");
  createNewDiv("moonPhase", "details");

  defaultData();
};

export { createMainContent, WEATHER_ICONS };
