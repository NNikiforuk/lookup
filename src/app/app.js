import navbar from "../app/utils/landing_page/navbar";
import main from "../app/utils/landing_page/main";
import { toggleMenu } from "../app/utils/landing_page/travelForm/functions/toggleDropdown";

export const mainFunction = () => {
	const root = document.querySelector(".root");
	root.append(navbar, main);
	toggleMenu();
};
