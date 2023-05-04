const optionOriginTitle = document.querySelector(".optionOriginTitle");
const inputDate = document.querySelector(".inputDate");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);
const optionPassengersTitle = document.querySelector(".optionPassengersTitle");
const registerLogin = document.querySelector(".registerLogin");
const warning = document.querySelector(".warning");

let originalValue = inputDate.value;
let dateChanged;

export const isFormFilled = () => {
	if (
		optionOriginTitle.textContent === "Origin" ||
		dateChanged === false ||
		optionDestinationTitle.textContent === "Destination" ||
		optionPassengersTitle.textContent === "Passengers"
	) {
		warning.textContent = "Fill the fields";
		warning.classList.toggle("show");
	} else {
		registerLogin.classList.add("show");
	}
};

const ifDateChanged = () => {
	inputDate.addEventListener("input", () => {
		const newValue = inputDate.value;

		if (newValue !== originalValue) {
			dateChanged = true;
		} else {
			dateChanged = false;
		}
	});
};

export const closeWarning = () => {
	warning.classList.toggle("show");
};

ifDateChanged();
