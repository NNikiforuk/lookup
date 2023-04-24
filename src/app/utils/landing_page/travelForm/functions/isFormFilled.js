import { optionOriginTitle } from "../dropdowns/dropdownOrigin";
import { input } from "../dropdowns/dropdownDate";
import { optionDestinationTitle } from "../dropdowns/dropdownDestination";
import { optionPassengersTitle } from "../dropdowns/dropdownPassengers";

let originalValue = input.value;
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
	input.addEventListener("input", () => {
		const newValue = input.value;

		if (newValue !== originalValue) {
			dateChanged = true;
		} else {
			dateChanged = false;
		}
	});
};

ifDateChanged();