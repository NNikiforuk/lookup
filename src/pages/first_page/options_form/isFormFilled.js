import { userData } from "../../../config/firebase";
import { handleGoToSummary } from "../navbar/routing";

const optionOriginTitle = document.querySelector(".optionOriginTitle");
const inputDates = document.querySelectorAll(".inputDate");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);
const optionPassengersTitle = document.querySelector(".optionPassengersTitle");
const registerLogin = document.querySelector(".registerLogin");
const warning = document.querySelector(".warning");

let selectedDate = "";

export const isFormFilled = () => {
	if (userData().isUserLoggedIn === true) {
		if (
			optionOriginTitle.textContent === "Origin" ||
			selectedDate === "" ||
			optionDestinationTitle.textContent === "Destination" ||
			optionPassengersTitle.textContent === "Passengers"
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
	selectedDate = e.target.value;
	console.log(selectedDate);
	for (let inputDate of inputDates) {
		inputDate.value = selectedDate;
	}
};

export const closeWarning = () => {
	warning.classList.toggle("showWarning");
};

ifDateChanged();
