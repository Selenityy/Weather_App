import { createNewDiv } from "./DOMlogic";
import { findWeather, updateWeather, updateHourlyWeatherToday } from "./APILogic";
import { forecastEndpoint, today, todayHour } from "./index";

//API Requests for Temp and Icon
const defaultHourlyData = () => {
  let defaultLocation = "Minneapolis, MN";
  findWeather(forecastEndpoint, today, defaultLocation).then((data) => {
    updateHourlyWeatherToday(data);
  });
};

// Create Individual Hours Nodes
const individualHourNodesToday = () => {
  let parentDiv = document.getElementById("hourlyGraph");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  for (let i = todayHour; i <= 23; i++) {
    let hourlyDiv = document.createElement("div");
    hourlyDiv.setAttribute("id", "hour" + i);
    hourlyDiv.setAttribute("class", "hourlyNode");
    let AmOrPm = i >= 12 ? "PM" : "AM";
    let hours = i % 12 || 12;
    let finalTime = hours + " " + AmOrPm;
    hourlyDiv.innerHTML = finalTime;

    let iconDiv = document.createElement("img");
    iconDiv.setAttribute("id", "hr" + i + "icon");

    let tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "hr" + i + "temp");

    hourlyDiv.appendChild(iconDiv);
    hourlyDiv.appendChild(tempDiv);
    parentDiv.appendChild(hourlyDiv);
  }
};

const individualHourNodesTomorrow = () => {
  let parentDiv = document.getElementById("hourlyGraph");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  for (let i = 0; i <= 23; i++) {
    let hourlyDiv = document.createElement("div");
    hourlyDiv.setAttribute("id", "hour" + i);
    hourlyDiv.setAttribute("class", "hourlyNode");
    let AmOrPm = i >= 12 ? "PM" : "AM";
    let hours = i % 12 || 12;
    let finalTime = hours + " " + AmOrPm;
    hourlyDiv.innerHTML = finalTime;

    let iconDiv = document.createElement("img");
    iconDiv.setAttribute("id", "hr" + i + "icon");

    let tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "hr" + i + "temp");

    hourlyDiv.appendChild(iconDiv);
    hourlyDiv.appendChild(tempDiv);
    parentDiv.appendChild(hourlyDiv);
  }
};

const createHourlyForecastFooter = () => {
  createNewDiv("hourlyGraph", "content");

  individualHourNodesToday();

  defaultHourlyData();
};

export {
  createHourlyForecastFooter,
  individualHourNodesTomorrow,
  individualHourNodesToday,
};
