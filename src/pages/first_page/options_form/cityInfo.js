import * as xd from "./openWeatherMapApiKey.json";

export const { API_KEY } = xd;
export const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
export const API_UNITS = "&units=metric";
const currentCities = document.querySelectorAll(".currentCity");
const currentDates = document.querySelectorAll(".currentDate");
const currentHours = document.querySelectorAll(".currentHour");
const currentTemps = document.querySelectorAll(".currentTemp");
const optionOriginTitle = document.querySelector(".optionOriginTitle");

export const cityInfo = () => {
	const city = optionOriginTitle.textContent.slice(0, -6);
	const URL = API_LINK + city + API_KEY + API_UNITS;

	if (city !== "Origin") {
		axios.get(URL).then((response) => {
			const temp = response.data.main.temp;
			const temperatureContainer = Math.floor(temp) + "°C";

			const date = new Date();
			const dateDetails = date.toLocaleDateString("en", {
				weekday: "short",
				day: "2-digit",
				month: "2-digit",
				year: "2-digit",
			});

			const hour = date.getHours();
			const minute = date.getMinutes();

			currentCities.forEach((currentCity) => {
				currentCity.textContent = `Today in: ${city}`;
			});

			currentDates.forEach((currentDate) => {
				currentDate.textContent = dateDetails;
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
