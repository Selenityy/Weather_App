import { baseUrl, date, apiDate, forecastEndpoint } from "./index";
import { WEATHER_ICONS } from "./mainContent";
import { currentHour } from "./hourlyForecast";

async function findWeather(endpoint, date, location) {
  let response;
  try {
    response = await fetch(
      `${baseUrl}${endpoint}?` +
        new URLSearchParams({
          key: "6fa47a44ac1b4452b3f40851230105",
          q: location,
          dt: date,
        }),
      {
        method: "GET",
        mode: "cors",
      }
    );
    if (response.status !== 200) {
      throw new SyntaxError("Please input a proper location.");
    }
  } catch (error) {
    console.log(error);
    alert("Please input a proper location.");
  }
  return response.json();
}

const updateWeather = (data) => {
  //Location
  let location = document.getElementById("currentLocation");
  location.innerHTML = data.location.name + " " + data.location.region;

  //Current Time
  let timeNode = document.getElementById("currentTime");
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let amOrPm = hours < 12 ? "AM" : "PM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros to minutes if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const currentTime = hours + ":" + minutes + " " + amOrPm;
  timeNode.innerHTML = currentTime;

  // Current Date
  let dateDiv = document.getElementById("currentDate");
  let options = { month: "long", day: "numeric", year: "numeric" };
  let formattedDate = date.toLocaleDateString("en-US", options);
  dateDiv.innerHTML = formattedDate;

  //Current Weather
  let tempDiv = document.getElementById("currentTemp");
  let maxTempDiv = document.getElementById("currentMaxTemp");
  let minTempDiv = document.getElementById("currentMinTemp");

  //Current Condition
  let conditionTextDiv = document.getElementById("currentConditionText");

  //Current Details
  let humidity = document.getElementById("humidity");
  let precipitation = document.getElementById("precipitation");
  let wind = document.getElementById("wind");
  let sunrise = document.getElementById("sunrise");
  let sunset = document.getElementById("sunset");
  let moonPhase = document.getElementById("moonPhase");

  //API Calls
  console.log(data);
  tempDiv.innerHTML = Math.round(data.current.temp_f) + "°" + "F";
  maxTempDiv.innerHTML =
    Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
  minTempDiv.innerHTML =
    Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
  conditionTextDiv.innerHTML = data.current.condition.text;
  const iconPath = data.current.condition.icon.replace(
    "//cdn.weatherapi.com/weather/64x64/",
    ""
  );
  let imgDiv = document.getElementById("currentConditionImg");
  WEATHER_ICONS.keys().forEach((filePath) => {
    if (filePath.includes(iconPath)) {
      imgDiv.src = `assets/weather_icons/${filePath}`;
    }
  });

  humidity.innerHTML = "Humidity: " + Math.round(data.current.humidity) + "%";
  precipitation.innerHTML =
    "Precipitation: " +
    Math.round(data.forecast.forecastday[0].day.daily_chance_of_rain) +
    "%";
  wind.innerHTML = "Wind: " + Math.round(data.current.wind_mph) + "mph";
  sunrise.innerHTML = "Sunrise: " + data.forecast.forecastday[0].astro.sunrise;
  sunset.innerHTML = "Sunset: " + data.forecast.forecastday[0].astro.sunset;
  moonPhase.innerHTML =
    "Moon Phase: " + data.forecast.forecastday[0].astro.moon_phase;
};

const updateHourlyWeather = (data) => {
  for (let i = currentHour; i <= 23; i++) {
    let temp = document.getElementById(`hr${i}temp`);
    let icon = document.getElementById(`hr${i}icon`);
    temp.innerHTML =
      Math.round(data.forecast.forecastday[0].hour[i].temp_f) + "°" + "F";
    const iconPath = data.forecast.forecastday[0].hour[
      i
    ].condition.icon.replace("//cdn.weatherapi.com/weather/64x64/", "");
    WEATHER_ICONS.keys().forEach((filePath) => {
      if (filePath.includes(iconPath)) {
        icon.src = `assets/weather_icons/${filePath}`;
      }
    });
  }
};

export { findWeather, updateWeather, updateHourlyWeather };
