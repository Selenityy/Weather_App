import { findWeather, updateWeather } from "./APILogic";
import { createImg, createNewDiv } from "./DOMlogic";
import { forecastEndpoint, date, apiDate } from ".";

const WEATHER_ICONS = require.context(
  "./assets/weather_icons",
  true,
  /[a-zA-Z0-9.-]/
);

const defaultData = () => {
  let defaultLocation = "Minneapolis, MN";
  findWeather(forecastEndpoint, apiDate, defaultLocation).then((data) => {
    updateWeather(data);
  });
};

// const updateWeather = (data) => {
//   //Location
//   let location = document.getElementById("currentLocation");
//   location.innerHTML = data.location.name + " " + data.location.region;

//   //Current Time
//   let timeNode = document.getElementById("currentTime");
//   let today = new Date();
//   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   let amOrPm = hours < 12 ? "AM" : "PM";

//   // Convert to 12-hour format
//   hours = hours % 12 || 12;

//   // Add leading zeros to minutes if needed
//   minutes = minutes < 10 ? "0" + minutes : minutes;

//   const currentTime = hours + ":" + minutes + " " + amOrPm;
//   timeNode.innerHTML = currentTime;

//   // Current Date
//   let dateDiv = document.getElementById("currentDate");
//   let options = { month: "long", day: "numeric", year: "numeric" };
//   let formattedDate = date.toLocaleDateString("en-US", options);
//   dateDiv.innerHTML = formattedDate;

//   //Current Weather
//   let tempDiv = document.getElementById("currentTemp");
//   let maxTempDiv = document.getElementById("currentMaxTemp");
//   let minTempDiv = document.getElementById("currentMinTemp");

//   //Current Condition
//   let conditionTextDiv = document.getElementById("currentConditionText");

//   //Current Details
//   let humidity = document.getElementById("humidity");
//   let precipitation = document.getElementById("precipitation");
//   let wind = document.getElementById("wind");
//   let sunrise = document.getElementById("sunrise");
//   let sunset = document.getElementById("sunset");
//   let moonPhase = document.getElementById("moonPhase");

//   //API Calls
//   console.log(data);
//   tempDiv.innerHTML = Math.round(data.current.temp_f) + "°" + "F";
//   maxTempDiv.innerHTML =
//     Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
//   minTempDiv.innerHTML =
//     Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
//   conditionTextDiv.innerHTML = data.current.condition.text;
//   const iconPath = data.current.condition.icon.replace(
//     "//cdn.weatherapi.com/weather/64x64/",
//     ""
//   );
//   let imgDiv = document.getElementById("currentConditionImg");
//   WEATHER_ICONS.keys().forEach((filePath) => {
//     if (filePath.includes(iconPath)) {
//       imgDiv.src = `assets/weather_icons/${filePath}`;
//     }
//   });

//   humidity.innerHTML = "Humidity: " + Math.round(data.current.humidity) + "%";
//   precipitation.innerHTML =
//     "Precipitation: " +
//     Math.round(data.forecast.forecastday[0].day.daily_chance_of_rain) +
//     "%";
//   wind.innerHTML = "Wind: " + Math.round(data.current.wind_mph) + "mph";
//   sunrise.innerHTML = "Sunrise: " + data.forecast.forecastday[0].astro.sunrise;
//   sunset.innerHTML = "Sunset: " + data.forecast.forecastday[0].astro.sunset;
//   moonPhase.innerHTML =
//     "Moon Phase: " + data.forecast.forecastday[0].astro.moon_phase;
// };

const createMainContent = () => {
  // Parent Node
  createNewDiv("mainSection", "content");

  // Current Forecast Temperature
  createNewDiv("currentForecastTemp", "mainSection");
  createNewDiv("currentLocation", "currentForecastTemp");
  createNewDiv("currentTime", "currentForecastTemp");
  createNewDiv("currentDate", "currentForecastTemp");
  createNewDiv("currentMaxTemp", "currentForecastTemp");
  createNewDiv("currentTemp", "currentForecastTemp");
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
