import {
  baseUrl,
  findToday,
  todayHour,
  todayMinute,
  findTomorrow,
} from "./index";
import { WEATHER_ICONS } from "./mainContent";
import {
  individualHourNodesToday,
  individualHourNodesTomorrow,
} from "./hourlyForecast";

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

const updateWeatherToday = (data) => {
  console.log(data);
  //Find Nodes
  let location = document.getElementById("currentLocation");
  let timeNode = document.getElementById("currentTime");
  let dateDiv = document.getElementById("currentDate");
  let maxTempDiv = document.getElementById("currentMaxTemp");
  let tempDiv = document.getElementById("currentTemp");
  let minTempDiv = document.getElementById("currentMinTemp");
  let imgDiv = document.getElementById("currentConditionImg");
  let conditionTextDiv = document.getElementById("currentConditionText");

  let humidity = document.getElementById("humidity");
  let precipitation = document.getElementById("precipitation");
  let wind = document.getElementById("wind");
  let sunrise = document.getElementById("sunrise");
  let sunset = document.getElementById("sunset");
  let moonPhase = document.getElementById("moonPhase");

  // Create Date Variable
  let options = { month: "long", day: "numeric", year: "numeric" };

  // Convert to 12-hour format and add leading zeros to minutes if needed
  let amOrPm = todayHour < 12 ? "AM" : "PM";
  let hour = todayHour % 12 || 12;
  let minute = todayMinute < 10 ? "0" + todayMinute : todayMinute;
  let currentTime = hour + ":" + minute + " " + amOrPm;

  let sunriseTime = data.forecast.forecastday[0].astro.sunrise;
  let sunriseTimeArray = sunriseTime.split(":");
  let sunriseHour = parseInt(sunriseTimeArray[0]);
  let sunriseMinute = sunriseTimeArray[1];
  if (sunriseHour === 0) {
    sunriseHour = 12;
  } else if (sunriseHour > 12) {
    sunriseHour = sunriseHour - 12;
  }

  let sunsetTime = data.forecast.forecastday[0].astro.sunset;
  let sunsetTimeArray = sunsetTime.split(":");
  let sunsetHour = parseInt(sunsetTimeArray[0]);
  let sunsetMinute = sunsetTimeArray[1];
  if (sunsetHour === 0) {
    sunsetHour = 12;
  } else if (sunsetHour > 12) {
    sunsetHour = sunsetHour - 12;
  }

  location.innerHTML = data.location.name + "," + " " + data.location.region;
  timeNode.innerHTML = currentTime;
  let formattedDate = findToday.toLocaleDateString("en-US", options);
  dateDiv.innerHTML = formattedDate;
  maxTempDiv.innerHTML =
    Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
  tempDiv.innerHTML = Math.round(data.current.temp_f) + "°" + "F";
  minTempDiv.innerHTML =
    Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
  conditionTextDiv.innerHTML = data.current.condition.text;
  const iconPath = data.current.condition.icon.replace(
    "//cdn.weatherapi.com/weather/64x64/",
    ""
  );
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
  sunrise.innerHTML = "Sunrise: " + sunriseHour + ":" + sunriseMinute;
  sunset.innerHTML = "Sunset: " + sunsetHour + ":" + sunsetMinute;
  moonPhase.innerHTML =
    "Moon Phase: " + data.forecast.forecastday[0].astro.moon_phase;
};

const updateWeatherTomorrow = (data) => {
  console.log(data);
  //Find Nodes
  let location = document.getElementById("currentLocation");
  let timeNode = document.getElementById("currentTime");
  let dateDiv = document.getElementById("currentDate");
  let maxTempDiv = document.getElementById("currentMaxTemp");
  let minTempDiv = document.getElementById("currentMinTemp");
  let imgDiv = document.getElementById("currentConditionImg");
  let conditionTextDiv = document.getElementById("currentConditionText");

  let humidity = document.getElementById("humidity");
  let precipitation = document.getElementById("precipitation");
  let wind = document.getElementById("wind");
  let sunrise = document.getElementById("sunrise");
  let sunset = document.getElementById("sunset");
  let moonPhase = document.getElementById("moonPhase");

  // Create Date Variable
  let options = { month: "long", day: "numeric", year: "numeric" };

  let sunriseTime = data.forecast.forecastday[0].astro.sunrise;
  let sunriseTimeArray = sunriseTime.split(":");
  let sunriseHour = parseInt(sunriseTimeArray[0]);
  let sunriseMinute = sunriseTimeArray[1];
  if (sunriseHour === 0) {
    sunriseHour = 12;
  } else if (sunriseHour > 12) {
    sunriseHour = sunriseHour - 12;
  }

  let sunsetTime = data.forecast.forecastday[0].astro.sunset;
  let sunsetTimeArray = sunsetTime.split(":");
  let sunsetHour = parseInt(sunsetTimeArray[0]);
  let sunsetMinute = sunsetTimeArray[1];
  if (sunsetHour === 0) {
    sunsetHour = 12;
  } else if (sunsetHour > 12) {
    sunsetHour = sunsetHour - 12;
  }

  location.innerHTML = data.location.name + "," + " " + data.location.region;
  timeNode.innerHTML = "";
  let tomorrowFormattedDate = findTomorrow.toLocaleDateString("en-US", options);
  dateDiv.innerHTML = tomorrowFormattedDate;
  maxTempDiv.innerHTML =
    Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
  minTempDiv.innerHTML =
    Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
  conditionTextDiv.innerHTML = data.forecast.forecastday[0].day.condition.text;
  const iconPath = data.forecast.forecastday[0].day.condition.icon.replace(
    "//cdn.weatherapi.com/weather/64x64/",
    ""
  );
  WEATHER_ICONS.keys().forEach((filePath) => {
    if (filePath.includes(iconPath)) {
      imgDiv.src = `assets/weather_icons/${filePath}`;
    }
  });

  humidity.innerHTML =
    "Humidity: " +
    Math.round(data.forecast.forecastday[0].day.avghumidity) +
    "%";
  precipitation.innerHTML =
    "Precipitation: " +
    Math.round(data.forecast.forecastday[0].day.daily_chance_of_rain) +
    "%";
  wind.innerHTML =
    "Wind: " + Math.round(data.forecast.forecastday[0].day.maxwind_mph) + "mph";
  sunrise.innerHTML = "Sunrise: " + sunriseHour + ":" + sunriseMinute;
  sunset.innerHTML = "Sunset: " + sunsetHour + ":" + sunsetMinute;
  moonPhase.innerHTML =
    "Moon Phase: " + data.forecast.forecastday[0].astro.moon_phase;
};

const updateWeatherThreeDay = () => {
  console.log("hi");
};

const updateHourlyWeatherToday = (data) => {
  individualHourNodesToday();
  let todayVar = new Date();
  let todayHourVar = todayVar.getHours();
  for (let i = todayHourVar; i <= 23; i++) {
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

const updateHourlyWeatherTomorrow = (data) => {
  individualHourNodesTomorrow();
  for (let i = 0; i <= 23; i++) {
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

const updateThreeDay1 = (data) => {
  let options = { month: "long", day: "numeric", year: "numeric" };
  let formattedDate = findToday.toLocaleDateString("en-US", options);
  let location = document.getElementById("threeDayLocation");
  let date = document.getElementById("date1");
  let max = document.getElementById("high1");
  let min = document.getElementById("low1");
  let condition = document.getElementById("condition1");
  let icon = document.getElementById("icon1");
  let rain = document.getElementById("rainPercent1");

  location.innerHTML = data.location.name + "," + " " + data.location.region;
  date.innerHTML = formattedDate;
  max.innerHTML =
    Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
  min.innerHTML =
    Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
  condition.innerHTML = data.current.condition.text;

  const iconPath = data.current.condition.icon.replace(
    "//cdn.weatherapi.com/weather/64x64/",
    ""
  );
  WEATHER_ICONS.keys().forEach((filePath) => {
    if (filePath.includes(iconPath)) {
      icon.src = `assets/weather_icons/${filePath}`;
    }
  });

  rain.innerHTML = Math.round(
    data.forecast.forecastday[0].day.daily_chance_of_rain
  );
};

const updateThreeDay2 = (data) => {
  let options = { month: "long", day: "numeric", year: "numeric" };
  let formattedDate = findToday.toLocaleDateString("en-US", options);
  let location = document.getElementById("threeDayLocation");
  let date = document.getElementById("date2");
  let max = document.getElementById("high2");
  let min = document.getElementById("low2");
  let condition = document.getElementById("condition2");
  let icon = document.getElementById("icon2");
  let rain = document.getElementById("rainPercent2");

  location.innerHTML = data.location.name + "," + " " + data.location.region;
  date.innerHTML = formattedDate; //fix date
  max.innerHTML =
    Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
  min.innerHTML =
    Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
  condition.innerHTML = data.current.condition.text;

  const iconPath = data.current.condition.icon.replace(
    "//cdn.weatherapi.com/weather/64x64/",
    ""
  );
  WEATHER_ICONS.keys().forEach((filePath) => {
    if (filePath.includes(iconPath)) {
      icon.src = `assets/weather_icons/${filePath}`;
    }
  });

  rain.innerHTML = Math.round(
    data.forecast.forecastday[0].day.daily_chance_of_rain
  );
};

const updateThreeDay3 = (data) => {
    let options = { month: "long", day: "numeric", year: "numeric" };
    let formattedDate = findToday.toLocaleDateString("en-US", options);
    let location = document.getElementById("threeDayLocation");
    let date = document.getElementById("date3");
    let max = document.getElementById("high3");
    let min = document.getElementById("low3");
    let condition = document.getElementById("condition3");
    let icon = document.getElementById("icon3");
    let rain = document.getElementById("rainPercent3");
  
    location.innerHTML = data.location.name + "," + " " + data.location.region;
    date.innerHTML = formattedDate; //fix date
    max.innerHTML =
      Math.round(data.forecast.forecastday[0].day.maxtemp_f) + "°" + "F";
    min.innerHTML =
      Math.round(data.forecast.forecastday[0].day.mintemp_f) + "°" + "F";
    condition.innerHTML = data.current.condition.text;
  
    const iconPath = data.current.condition.icon.replace(
      "//cdn.weatherapi.com/weather/64x64/",
      ""
    );
    WEATHER_ICONS.keys().forEach((filePath) => {
      if (filePath.includes(iconPath)) {
        icon.src = `assets/weather_icons/${filePath}`;
      }
    });
  
    rain.innerHTML = Math.round(
      data.forecast.forecastday[0].day.daily_chance_of_rain
    );
  };

export {
  findWeather,
  updateWeatherToday,
  updateHourlyWeatherToday,
  updateWeatherTomorrow,
  updateHourlyWeatherTomorrow,
  updateWeatherThreeDay,
  updateThreeDay1,
  updateThreeDay2,
  updateThreeDay3,
};
