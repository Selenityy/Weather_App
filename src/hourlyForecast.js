import { createNewDiv, setClassAttr } from "./DOMlogic";
import { defaultWeather } from "./APILogic";

//API Requests
const defaultHourlyData = () => {
  let defaultLocation = "Minneapolis, MN";
  let forecastEndpoint = "	/forecast.json";
  let date = new Date();
  let apiDate = date.toISOString().slice(0, 10);
  let h0 = document.getElementById("hour0");
  defaultWeather(forecastEndpoint, apiDate, defaultLocation).then((data) => {
    h0.innerHTML = data.forecast.forecastday[0].hour[0].temp_f;
  });
};

// Create Individual Hours
const individualHourNodes = () => {
  let parentDiv = document.getElementById("hourlyGraph");
  for (let i = 0; i <= 23; i++) {
    let hourlyDiv = document.createElement("div");
    hourlyDiv.setAttribute("id", "hour" + i);

    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("id", "hr" + i + "icon");

    let tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "hr" + i + "temp");

    hourlyDiv.appendChild(iconDiv);
    hourlyDiv.appendChild(tempDiv);
    parentDiv.appendChild(hourlyDiv);
  }
};

const createHourlyForecastFooter = () => {
  console.log("bunny");
  createNewDiv("hourlyGraph", "content");

  individualHourNodes();

  defaultHourlyData();
};

export { createHourlyForecastFooter };
