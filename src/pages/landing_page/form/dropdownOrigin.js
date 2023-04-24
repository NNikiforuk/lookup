import * as xd from "./openWeatherMapApiKey.json";

const { API_KEY } = xd;
const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints/endpoints.json";
const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_UNITS = "&units=metric";
const dropdownOrigin = document.querySelector(".dropdownOrigin");
const optionOriginTitle = document.querySelector(".optionOriginTitle");
const weatherInfo = document.querySelector(".weatherInfo");

export const showOriginDropdown = () => {
	axios.get(URL).then((response) => {
		response.data.origin.forEach((element) => {
			const li = document.createElement("li");
			li.textContent = element.description;
			li.classList.add("liItem");
			dropdownOrigin.appendChild(li);
			li.addEventListener("click", () => {
				optionOriginTitle.textContent = li.textContent;
				cityInfo();
			});
		});
	});
};

const cityInfo = () => {
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

			weatherInfo.textContent =
				temperatureContainer + "  " + dateDetails + "  " + hour + ":" + minute;
		});
	}
};
