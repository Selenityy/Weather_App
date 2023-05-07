import "./style.css";
import { createSearchHeader } from "./searchBar";
import { createMainContent, updateWeather } from "./mainContent";
import {
  createHourlyForecastFooter,
  updateHourlyWeather,
} from "./hourlyForecast";
import { findWeather } from "./APILogic";

const baseUrl = "http://api.weatherapi.com/v1";
const forecastEndpoint = "	/forecast.json";
let date = new Date();
let apiDate = date.toISOString().slice(0, 10);

createSearchHeader();

createMainContent();

createHourlyForecastFooter();

let submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, apiDate, formValue).then((data) => {
    updateWeather(data);
    updateHourlyWeather(data);
  });
};

let todayTab = document.getElementById("today");
todayTab.onclick = function (event) {
  event.preventDefault();
  console.log("today");
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, apiDate, formValue).then((data) => {
    updateWeather(data);
    updateHourlyWeather(data);
  });
};

let tomorrowTab = document.getElementById("tomorrow");
tomorrowTab.onclick = function (event) {
  event.preventDefault();
  console.log("tomorrow");
};

let threeDayTab = document.getElementById("threeDay");
threeDayTab.onclick = function (event) {
  event.preventDefault();
  console.log("3 day");
};

export { baseUrl, forecastEndpoint, date, apiDate };
