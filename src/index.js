import "./style.css";
import { createNewDiv } from "./DOMlogic";
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
import {
  createThreeDayForecast,
  removeThreeDayForecast,
} from "./threeDayForecast";

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

let degreesFar = true;
let threeDayVar = false;

//Nodes and Default Data
createSearchHeader();

createNewDiv("mainSection", "content");
createMainContent();

createNewDiv("hourlyGraph", "content");
createHourlyForecastFooter();

//On clicks
let submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  findWeather(forecastEndpoint, today, formValue).then((data) => {
    if (degreesFar === true) {
      updateWeatherToday(data);
      updateHourlyWeatherToday(data);
    } else if (degreesFar === false) {
      console.log("Celsius");
    }
  });
};

// let toggleBtn = document.getElementById("toggleC/F");
// toggleBtn.onclick = function (event) {
//   console.log("am I pressed?");
//   event.preventDefault();
//   if (degreesFar === true) {
//     degreesFar = false;
//     toggleBtn.innerHTML = "Celsius";
//   } else if (degreesFar === false) {
//     degreesFar = true;
//     toggleBtn.innerHTML = "Fahrenheit";
//   }
// };

let todayTab = document.getElementById("today");
todayTab.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;

  if (threeDayVar === true) {
    removeThreeDayForecast();
    createMainContent();
    createHourlyForecastFooter();
    threeDayVar = false;
    findWeather(forecastEndpoint, today, formValue).then((data) => {
      updateWeatherToday(data);
      updateHourlyWeatherToday(data);
    });
  } else if (threeDayVar === false) {
    findWeather(forecastEndpoint, today, formValue).then((data) => {
      updateWeatherToday(data);
      updateHourlyWeatherToday(data);
    });
  }
};

let tomorrowTab = document.getElementById("tomorrow");
tomorrowTab.onclick = function (event) {
  event.preventDefault();
  const formValue = document.getElementById("location").value;
  if (threeDayVar === true) {
    removeThreeDayForecast();
    createMainContent();
    createHourlyForecastFooter();
    threeDayVar = false;
    findWeather(forecastEndpoint, tomorrow, formValue).then((data) => {
      updateWeatherTomorrow(data);
      updateHourlyWeatherTomorrow(data);
    });
  } else if (threeDayVar === false) {
    findWeather(forecastEndpoint, tomorrow, formValue).then((data) => {
      updateWeatherTomorrow(data);
      updateHourlyWeatherTomorrow(data);
    });
  }
};

let threeDayTab = document.getElementById("threeDay");
threeDayTab.onclick = function (event) {
  event.preventDefault();
  createThreeDayForecast();
  threeDayVar = true;
  //   const formValue = document.getElementById("location").value;
  //   findWeather(forecastEndpoint, today, formValue).then((data) => {
  //     console.log("today");
  //     console.log(data);
  //   });
  //   findWeather(forecastEndpoint, tomorrow, formValue).then((data) => {
  //     console.log("tomorrow");
  //     console.log(data);
  //   });
  //   findWeather(forecastEndpoint, threeDay, formValue).then((data) => {
  //     console.log("3 day");
  //     console.log(data);
  //   });
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
