import { toggleMenu } from "./pages/landing_page/form/toggleMenu";
import { displayOptions } from "./pages/landing_page/form/displayDropdowns";
import { isFormFilled } from "./pages/landing_page/form/isFormFilled";

const confirmBtn = document.querySelector(".confirmBtn");

export const mainFunction = () => {
	displayOptions();
	toggleMenu();
	confirmBtn.addEventListener("click", isFormFilled);
};
