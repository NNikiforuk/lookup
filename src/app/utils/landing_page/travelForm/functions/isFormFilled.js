import { optionOriginTitle } from "../dropdowns/dropdownOrigin"
import optionDate from "../dropdowns/dropdownDate"
import { optionDestinationTitle } from "../dropdowns/dropdownDestination"
import { optionPassengersTitle } from "../dropdowns/dropdownPassengers"


export const isFormFilled = () => {
    if (optionOriginTitle.textContent === "Origin" || optionDestinationTitle.textContent === "Destination" || optionPassengersTitle.textContent === "Passengers") {
			alert("Wypełnij wszystkie pola");
		} else {
			alert("OK");
		}
}
