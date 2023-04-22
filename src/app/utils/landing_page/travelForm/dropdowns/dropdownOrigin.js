import "../../../../../styles/form.scss";
import { weatherInfo } from "../../form";

const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints/endpoints.json";
const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=287df36ddd265bcd8bc4cfa721eeac5d";
const API_UNITS = "&units=metric";

const optionOrigin = document.createElement("div");
const optionOriginIcon = document.createElement("i");
const optionOriginTitle = document.createElement("p");
const dropdownOrigin = document.createElement("ul");

optionOrigin.classList.add("optionOrigin");
optionOrigin.classList.add("optionToDrop");
optionOrigin.classList.add("optionToClose");
optionOriginIcon.classList.add("fa-solid");
optionOriginIcon.classList.add("fa-house");
optionOriginTitle.classList.add("optionOriginTitle");
optionOriginTitle.textContent = "Origin";
dropdownOrigin.classList.add("dropdownOrigin");
dropdownOrigin.classList.add("dropdown");

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

optionOrigin.append(optionOriginIcon, optionOriginTitle, dropdownOrigin);
export { optionOrigin };
