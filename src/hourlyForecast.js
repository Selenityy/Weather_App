import { createNewDiv, setClassAttr } from "./DOMlogic";

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
};

export { createHourlyForecastFooter };
