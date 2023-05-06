import { baseUrl } from "./index";

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

export { findWeather };
