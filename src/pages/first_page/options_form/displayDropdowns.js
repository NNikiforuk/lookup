import { cityInfo } from "./cityInfo.js";
import { handlePassengerCountChange } from "./countPassengers.js";
import { addPassengersDetails } from "./addPassengersDetails.js";

const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints.json";
const dropdownOrigins = document.querySelectorAll(".dropdownOrigin");
const optionOriginTitles = document.querySelectorAll(".optionOriginTitle");
const dropdownDestinations = document.querySelectorAll(".dropdownDestination");
const optionDestinationTitles = document.querySelectorAll(
	".optionDestinationTitle"
);
const dropdownsPassengers = document.querySelectorAll(".dropdownPassengers");
const dropdownLuggages = document.querySelectorAll(".dropdownLuggage");
const optionLuggageTitles = document.querySelectorAll(".optionLuggageTitle");

export const displayOptions = async () => {
	const response = await axios.get(URL);
	createOrigin(response.data.origin);
	createDestination(response.data.destination);
	dropdownsPassengers.forEach((dropdownPassengers) => {
		const passengerContainers = createPassengers(response.data.passengers);
		passengerContainers.forEach((passengerContainer) => {
			dropdownPassengers.append(passengerContainer);
		});
	});
	createLuggage(response.data.luggage);
	addPassengersDetails();
};

const createOrigin = (origins) => {
	origins.forEach((element) => {
		dropdownOrigins.forEach((dropdownOrigin) => {
			const li = document.createElement("li");
			li.textContent = element.description + " (" + element.code + ")";
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

const createDestination = (destinations) => {
	destinations.forEach((element) => {
		dropdownDestinations.forEach((dropdownDestination) => {
			const li = document.createElement("li");
			li.textContent = `${element.description} (${element.code})`;
			li.classList.add("liItem");

			dropdownDestination.appendChild(li);

			li.addEventListener("click", () => {
				optionDestinationTitles.forEach((optionDestinationTitle) => {
					optionDestinationTitle.textContent = li.textContent;
				});
			});
		});
	});
};

const createPassengers = (passengers) => {
	let containers = [];

	passengers.forEach((element) => {
		const passengerContainer = document.createElement("div");
		const divLeft = document.createElement("div");
		const divLeftTitle = document.createElement("div");
		const divLeftDesc = document.createElement("div");
		const selectRight = document.createElement("select");

		for (let i = 0; i < 9; i++) {
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
		selectRight.classList.add("passengerSelect_" + element.value);

		divLeft.append(divLeftTitle, divLeftDesc);
		passengerContainer.append(divLeft, selectRight);
		containers.push(passengerContainer);
		selectRight.addEventListener("change", handlePassengerCountChange);
	});

	return containers;
};

const createLuggage = (luggages) => {
	luggages.forEach((element) => {
		dropdownLuggages.forEach((dropdownLuggage) => {
			const li = document.createElement("li");
			li.textContent = element.value;
			li.classList.add("liItem");

			dropdownLuggage.appendChild(li);

			li.addEventListener("click", () => {
				optionLuggageTitles.forEach((optionLuggageTitle) => {
					optionLuggageTitle.textContent = li.textContent;
				});
			});
		});
	});
};
