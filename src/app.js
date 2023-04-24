import { toggleMenu } from "./pages/landing_page/form/toggleMenu";
import { showOriginDropdown } from "./pages/landing_page/form/dropdownOrigin";
import { isFormFilled } from "./pages/landing_page/form/isFormFilled";
import { showDestinationDropdown } from "./pages/landing_page/form/dropdownDestination";
import { showPassengersDropdown } from "./pages/landing_page/form/dropdownPassengers";
const confirmBtn = document.querySelector(".confirmBtn");

export const mainFunction = () => {
	showOriginDropdown();
	showDestinationDropdown();
	showPassengersDropdown();
	toggleMenu();
	confirmBtn.addEventListener("click", isFormFilled);
};
