import { userData } from "../../../config/firebase";
import { handleGoToSummary } from "../navbar/routing";

const optionOriginTitle = document.querySelector(".optionOriginTitle");
const inputDates = document.querySelectorAll(".inputDate");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);
const optionPassengersTitle = document.querySelector(".optionPassengersTitle");
const optionLuggageTitle = document.querySelector(".optionLuggageTitle");
const registerLogin = document.querySelector(".registerLogin");
const warning = document.querySelector(".warning");

export let selectedDate = "";

export const isFormFilled = () => {
	if (userData().isUserLoggedIn === true) {
		if (
			optionOriginTitle.textContent === "Origin" ||
			selectedDate === "" ||
			optionDestinationTitle.textContent === "Destination" ||
			optionPassengersTitle.textContent === "Passengers" ||
			optionLuggageTitle.textContent === "Luggage"
		) {
			warning.textContent = "Fill the fields";
			warning.classList.toggle("showWarning");
		} else {
			handleGoToSummary();
		}
	} else {
		registerLogin.classList.add("show");
	}
};

const ifDateChanged = () => {
	for (let inputDate of inputDates) {
		inputDate.addEventListener("input", handleDateChange);
	}
};

const handleDateChange = (e) => {
	const date = new Date();
	selectedDate = e.target.value;

	for (let inputDate of inputDates) {
		inputDate.value = selectedDate;
		const array = inputDate.value.split("-");
		const year = Number(array[0]);
		const month = Number(array[1]);
		const day = Number(array[2]);
		const secondDayMs = new Date(year, month - 1, day);
		const difference = secondDayMs - date;
		//                                        ms     s  m    h
		const diffDays = Math.round(difference / (1000 * 60 * 60 * 24));

		if (diffDays < 0) {
			alert("You cannot book a flight before today");
		}
	}
};

export const closeWarning = () => {
	warning.classList.toggle("showWarning");
};

ifDateChanged();
