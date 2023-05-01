const optionOriginTitle = document.querySelector(".optionOriginTitle");
const inputDate = document.querySelector(".inputDate");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);
const optionPassengersTitle = document.querySelector(".optionPassengersTitle");
const registerLogin = document.querySelector(".registerLogin");

let originalValue = inputDate.value;
let dateChanged;

export const isFormFilled = () => {
	if (
		optionOriginTitle.textContent === "Origin" ||
		dateChanged === false ||
		optionDestinationTitle.textContent === "Destination" ||
		optionPassengersTitle.textContent === "Passengers"
	) {
		alert("Wypełnij wszystkie pola");
	} else {
		registerLogin.classList.add("show")
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

ifDateChanged();
