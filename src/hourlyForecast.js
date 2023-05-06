import { createNewDiv } from "./DOMlogic";
import { defaultWeather } from "./APILogic";
import { WEATHER_ICONS } from "./mainContent";

//API Requests
const defaultHourlyData = () => {
  let defaultLocation = "Minneapolis, MN";
  let forecastEndpoint = "	/forecast.json";
  let date = new Date();
  let apiDate = date.toISOString().slice(0, 10);
  //   let h0Temp = document.getElementById("hr0temp");
  //   let h0Icon = document.getElementById("hr0icon");
  defaultWeather(forecastEndpoint, apiDate, defaultLocation).then((data) => {
    for (let i = 0; i <= 23; i++) {
      let temp = document.getElementById(`hr${i}temp`);
      let icon = document.getElementById(`hr${i}icon`);
      temp.innerHTML = data.forecast.forecastday[0].hour[i].temp_f;
      const iconPath = data.forecast.forecastday[0].hour[
        i
      ].condition.icon.replace("//cdn.weatherapi.com/weather/64x64/", "");
      WEATHER_ICONS.keys().forEach((filePath) => {
        if (filePath.includes(iconPath)) {
          icon.src = `assets/weather_icons/${filePath}`;
        }
      });
    }
    // h0Temp.innerHTML = data.forecast.forecastday[0].hour[0].temp_f;
    // const iconPath =
    //   data.forecast.forecastday[0].hour[0].condition.icon.replace(
    //     "//cdn.weatherapi.com/weather/64x64/",
    //     ""
    //   );
    // WEATHER_ICONS.keys().forEach((filePath) => {
    //   if (filePath.includes(iconPath)) {
    //     h0Icon.src = `assets/weather_icons/${filePath}`;
    //   }
    // });
  });
};

// Create Individual Hours
const individualHourNodes = () => {
  let parentDiv = document.getElementById("hourlyGraph");
  for (let i = 0; i <= 23; i++) {
    let hourlyDiv = document.createElement("div");
    hourlyDiv.setAttribute("id", "hour" + i);
    hourlyDiv.setAttribute("class", "hourlyNode");
    hourlyDiv.innerHTML = i;

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
  console.log("bunny");
  createNewDiv("hourlyGraph", "content");

  individualHourNodes();

  defaultHourlyData();
};

export { createHourlyForecastFooter };
