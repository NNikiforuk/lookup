import { toggleMenu } from "./pages/first_page/options_form/toggleMenu";
import { displayOptions } from "./pages/first_page/options_form/displayDropdowns";
import { isFormFilled } from "./pages/first_page/options_form/isFormFilled";
import {
	showLoginForm,
	showRegisterForm,
} from "./pages/first_page/navbar/login";
import { authRegister, authLogin } from "./config/firebase";
import { homePage } from "./pages/first_page/navbar/routing";
import { closeWarning } from "./pages/first_page/options_form/isFormFilled";
import { planeAPI } from "./pages/summary/planeAPI";
import { currencies } from "./pages/summary/currencies";

const confirmBtn = document.querySelector(".confirmBtn");
const navbarLogin = document.querySelector(".navbarLogin");
const openRegister = document.querySelector(".openRegister");
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");
const logoutBtn = document.querySelector(".navbarLogout");
const warning = document.querySelector(".warning");
const secondConfirmBtn = document.querySelector(".secondConfirmBtn");
const summaryBtns = document.querySelectorAll(".summaryBtn");

export const mainFunction = () => {
	displayOptions();
	toggleMenu();
	confirmBtn.addEventListener("click", isFormFilled);
	navbarLogin.addEventListener("click", showLoginForm);
	openRegister.addEventListener("click", showRegisterForm);
	registerBtn.addEventListener("click", authRegister);
	loginBtn.addEventListener("click", authLogin);
	logoutBtn.addEventListener("click", homePage);
	warning.addEventListener("click", closeWarning);
	secondConfirmBtn.addEventListener("click", planeAPI)
	summaryBtns.forEach(summaryBtn => {
		summaryBtn.addEventListener("click", currencies)
	})
};
