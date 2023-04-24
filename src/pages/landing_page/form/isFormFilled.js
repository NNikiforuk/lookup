const optionOriginTitle = document.querySelector(".optionOriginTitle");
const inputDate = document.querySelector(".inputDate");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);
const optionPassengersTitle = document.querySelector(".optionPassengersTitle");

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
		alert("OK");
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
