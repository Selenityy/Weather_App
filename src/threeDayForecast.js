import { createNewDiv, createImg } from "./DOMlogic";
import raindropImg from "./assets/raindrop.png";

const createThreeDayForecast = () => {
  let parent = document.getElementById("mainSection");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let hourly = document.getElementById("hourlyGraph");
  while (hourly.firstChild) {
    hourly.removeChild(hourly.firstChild);
  }

  createNewDiv("threeDayLocation", "mainSection");
  createNewDiv("threeDayDates", "mainSection");
  createNewDiv("day1", "threeDayDates");
  createNewDiv("date1", "day1");
  createNewDiv("temp1", "day1");
  createNewDiv("high1", "temp1");
  createNewDiv("low1", "temp1");
  createNewDiv("weather1", "day1");
  createNewDiv("icon1", "weather1");
  createNewDiv("condition1", "weather1");
  createNewDiv("rainChance1", "day1");
  createNewDiv("rainPercent1", "rainChance1");
  createImg("rainIcon1", "rainChance1");
  let icon1img = document.getElementById("rainIcon1");
  icon1img.src = raindropImg;

  createNewDiv("day2", "threeDayDates");
  createNewDiv("date2", "day2");
  createNewDiv("temp2", "day2");
  createNewDiv("high2", "temp2");
  createNewDiv("low2", "temp2");
  createNewDiv("weather2", "day2");
  createNewDiv("icon2", "weather2");
  createNewDiv("condition2", "weather2");
  createNewDiv("rainChance2", "day2");
  createNewDiv("rainPercent2", "rainChance2");
  createImg("rainIcon2", "rainChance2");
  let icon2img = document.getElementById("rainIcon2");
  icon2img.src = raindropImg;

  createNewDiv("day3", "threeDayDates");
  createNewDiv("date3", "day3");
  createNewDiv("temp3", "day3");
  createNewDiv("high3", "temp3");
  createNewDiv("low3", "temp3");
  createNewDiv("weather3", "day3");
  createNewDiv("icon3", "weather3");
  createNewDiv("condition3", "weather3");
  createNewDiv("rainChance3", "day3");
  createNewDiv("rainPercent3", "rainChance3");
  createImg("rainIcon3", "rainChance3");
  let icon3img = document.getElementById("rainIcon3");
  icon3img.src = raindropImg;

  console.log("completed");
};

export { createThreeDayForecast };
