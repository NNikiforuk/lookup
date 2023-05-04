import * as xd from "./openWeatherMapApiKey.json";

const { API_KEY } = xd;
const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_UNITS = "&units=metric";
const currentDates = document.querySelectorAll(".currentDate");
const currentHours = document.querySelectorAll(".currentHour");
const currentTemps = document.querySelectorAll(".currentTemp");
const optionOriginTitle = document.querySelector(".optionOriginTitle");

export const cityInfo = () => {
	const city = optionOriginTitle.textContent;
	const URL = API_LINK + city + API_KEY + API_UNITS;

	if (city !== "Origin") {
		axios.get(URL).then((response) => {
			const temp = response.data.main.temp;
			const temperatureContainer = Math.floor(temp) + "°C";

			const date = new Date();
			const dateDetails = date.toLocaleDateString("en");

			const hour = date.getHours();
			const minute = date.getMinutes();

			currentDates.forEach((currentDate) => {
				currentDate.textContent = `Today in ${city}: ${dateDetails}`;
			});

			currentHours.forEach((currentHour) => {
				currentHour.textContent = hour + ":" + minute;
			});

			currentTemps.forEach((currentTemp) => {
				currentTemp.textContent = temperatureContainer;
			});
		});
	}
};
