import { toggleMenu } from "./pages/first_page/options_form/toggleMenu";
import { displayOptions } from "./pages/first_page/options_form/displayDropdowns";
import { isFormFilled } from "./pages/first_page/options_form/isFormFilled";
import {
	showLoginForm,
	showRegisterForm,
} from "./pages/first_page/navbar/login";
import { authRegister, authLogin, userData } from "./config/firebase";
import { handleGoToSummary, homePage } from "./pages/first_page/navbar/routing";
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
const loginPassword = document.querySelector(".loginPassword");
const registerPassword = document.querySelector(".registerPassword");

export const mainFunction = () => {
	displayOptions();
	toggleMenu();
	confirmBtn.addEventListener("click", isFormFilled);
	navbarLogin.addEventListener("click", showLoginForm);
	openRegister.addEventListener("click", showRegisterForm);
	registerPassword.addEventListener("keyup", enterKeyCheckRegister);
	registerBtn.addEventListener("click", authRegister);
	loginPassword.addEventListener("keyup", enterKeyCheckLogin);
	loginBtn.addEventListener("click", authLogin);
	logoutBtn.addEventListener("click", homePage);
	warning.addEventListener("click", closeWarning);
	secondConfirmBtn.addEventListener("click", planeAPI);
	summaryBtns.forEach((summaryBtn) => {
		summaryBtn.addEventListener("click", currencies);
	});
	if (userData().isUserLoggedIn === true) {
		handleGoToSummary();
	}
};

const enterKeyCheckLogin = (e) => {
	if (e.code === "Enter") {
		authLogin();
	}
};
const enterKeyCheckRegister = (e) => {
	if (e.code === "Enter") {
		authRegister();
	}
};
