import { baseUrl } from "./index";

async function defaultWeather(endpoint, date, location) {
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
  } catch (error) {
    console.log(error);
  }
  return response.json();
}

export { defaultWeather };
