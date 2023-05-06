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
  findWeather(forecastEndpoint, date, formValue).then((data) => {
    updateWeather(data);
    updateHourlyWeather(data);
  });
};

export { baseUrl, forecastEndpoint, date, apiDate };
