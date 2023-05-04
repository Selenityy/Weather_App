import { defaultWeather } from "./APILogic";
import { createNewDiv, setClassAttr } from "./DOMlogic";

const defaultData = () => {
  // Current Date
  let dateDiv = document.getElementById("currentDate");
  let date = new Date();
  let apiDate = date.toISOString().slice(0, 10);
  let options = { month: "long", day: "numeric", year: "numeric" };
  let formattedDate = date.toLocaleDateString("en-US", options);
  dateDiv.innerHTML = formattedDate;

  //Current Weather
  let tempDiv = document.getElementById("currentTemp");
  let defaultLocation = "Minneapolis, MN";
  let endpoint = "/current.json";

  //API Call
  defaultWeather(endpoint, apiDate, defaultLocation).then((data) => {
    console.log(data);
    tempDiv.innerHTML = data.current.temp_f;
  });
};

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

  defaultData();
};

export { createMainContent };
