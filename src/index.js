import "./style.css";
import { createSearchHeader } from "./searchBar";
import { createMainContent } from "./mainContent";
import { createHourlyForecastFooter } from "./hourlyForecast";
import {
  findWeather,
  updateWeatherToday,
  updateHourlyWeatherToday,
  updateWeatherTomorrow,
  updateHourlyWeatherTomorrow,
} from "./APILogic";

// Dates
const baseUrl = "http://api.weatherapi.com/v1";
const forecastEndpoint = "	/forecast.json";

let findToday = new Date();
let today = findToday.toISOString().slice(0, 10);
let todayHour = findToday.getHours();
let todayMinute = findToday.getMinutes();

let findTomorrow = new Date(
  findToday.getFullYear(),
  findToday.getMonth(),
  findToday.getDate() + 1
);
let tomorrow = findTomorrow.toISOString().slice(0, 10);

let findThreeDay = new Date(
  findToday.getFullYear(),
  findToday.getMonth(),
  findToday.getDate() + 2
);
let threeDay = findThreeDay.toISOString().slice(0, 10);

//Nodes and Default Data
createSearchHeader();

createMainContent();

createHourlyForecastFooter();

//On clicks
let submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, today, formValue).then((data) => {
    updateWeatherToday(data);
    updateHourlyWeatherToday(data);
    console.log(data);
  });
};

let todayTab = document.getElementById("today");
todayTab.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, today, formValue).then((data) => {
    updateWeatherToday(data);
    updateHourlyWeatherToday(data);
  });
};

let tomorrowTab = document.getElementById("tomorrow");
tomorrowTab.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, tomorrow, formValue).then((data) => {
    updateWeatherTomorrow(data);
    updateHourlyWeatherTomorrow(data);
  });
};

let threeDayTab = document.getElementById("threeDay");
threeDayTab.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, apiToday, formValue).then((data) => {
    console.log("3 day");
  });
};

export {
  baseUrl,
  forecastEndpoint,
  findToday,
  today,
  todayHour,
  todayMinute,
  findTomorrow,
  tomorrow,
  findThreeDay,
  threeDay,
};
