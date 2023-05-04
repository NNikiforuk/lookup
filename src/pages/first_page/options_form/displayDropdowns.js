import { cityInfo } from "./cityInfo.js";
import { countPassengers } from "./countPassengers.js";
import { addPassengersDetails } from "./addPassengersDetails.js";

const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/c7ce7d82acc7dd3ed169734fb82d50afbcc0d597/endpoints/endpoints.json";
const dropdownOrigins = document.querySelectorAll(".dropdownOrigin");
const optionOriginTitles = document.querySelectorAll(".optionOriginTitle");
const dropdownDestination = document.querySelector(".dropdownDestination");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);
const dropdownPassengers = document.querySelector(".dropdownPassengers");

export const displayOptions = async () => {
	const response = await axios.get(URL);
	createOrigin(response.data.origin);

	response.data.destination.forEach((element) => {
		const li = document.createElement("li");
		li.textContent = element.description;
		li.classList.add("liItem");
		dropdownDestination.appendChild(li);
		li.addEventListener("click", () => {
			optionDestinationTitle.textContent = li.textContent;
		});
	});

	response.data.passengers.forEach((element) => {
		const passengerContainer = document.createElement("div");
		const divLeft = document.createElement("div");
		const divLeftTitle = document.createElement("div");
		const divLeftDesc = document.createElement("div");
		const selectRight = document.createElement("select");

		for (let i = 0; i < 10; i++) {
			const passengerOption = document.createElement("option");
			passengerOption.value = i;
			passengerOption.textContent = i;
			passengerOption.classList.add("option");
			selectRight.append(passengerOption);
		}
		passengerContainer.classList.add("passengerContainer");
		divLeft.classList.add("passengerLeft");
		divLeftTitle.textContent = element.description;
		divLeftTitle.classList.add("passenger");
		divLeftDesc.textContent = element.details;
		divLeftDesc.classList.add("passengerDesc");
		selectRight.classList.add("passengerSelect");

		divLeft.append(divLeftTitle, divLeftDesc);
		passengerContainer.append(divLeft, selectRight);
		dropdownPassengers.append(passengerContainer);
		selectRight.addEventListener("change", countPassengers);
	});
	addPassengersDetails();
};

const createOrigin = (origins) => {
	console.log(origins);
	origins.forEach((element) => {
		dropdownOrigins.forEach((dropdownOrigin) => {
			const li = document.createElement("li");
			li.textContent = element.description;
			li.classList.add("liItem");

			dropdownOrigin.appendChild(li);

			li.addEventListener("click", () => {
				optionOriginTitles.forEach((dropdownOriginTitle) => {
					dropdownOriginTitle.textContent = li.textContent;
				});
				cityInfo();
			});
		});
	});
};
