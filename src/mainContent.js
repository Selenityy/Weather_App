import { createNewDiv, setClassAttr } from "./DOMlogic";

const createMainContent = () => {
  console.log("dog");
  // Parent Node
  createNewDiv("mainSection", "content");

  // Current Forecast Temperature
  createNewDiv("currentForecastTemp", "mainSection");
  createNewDiv("currentDate", "currentForecastTemp");
  createNewDiv("currentMaxTemp", "currentForecastTemp");
  createNewDiv("currentTemp", "currentForecastTemp");
  createNewDiv("currentMinTemp", "currentForecastTemp");
  createNewDiv("currentCondition", "currentForecastTemp");

  // Current Forecast Details
  createNewDiv("currentForecastDetails", "mainSection");
  createNewDiv("details", "currentForecastDetails");
  createNewDiv("humidity", "details");
  createNewDiv("precipitation", "details");
  createNewDiv("wind", "details");
  createNewDiv("sunrise", "details");
  createNewDiv("sunset", "details");
};

export { createMainContent };
