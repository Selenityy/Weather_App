import "./style.css";
import { createSearchHeader } from "./searchBar";
import { createMainContent } from "./mainContent";
import { createHourlyForecastFooter } from "./hourlyForecast";

const baseUrl = "http://api.weatherapi.com/v1";

createSearchHeader();

createMainContent();

createHourlyForecastFooter();

export { baseUrl };
