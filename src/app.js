import { toggleMenu } from "./pages/landing_page/form/toggleMenu";
import { displayOptions } from "./pages/landing_page/form/displayDropdowns";
import { isFormFilled } from "./pages/landing_page/form/isFormFilled";
import {
	showLoginForm,
	showRegisterForm,
} from "./pages/landing_page/navbar/login";
import { authRegister, authLogin, authLogout } from "./config/firebase";

const confirmBtn = document.querySelector(".confirmBtn");
const navbarLogin = document.querySelector(".navbarLogin");
const openRegister = document.querySelector(".openRegister");
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");
const logoutBtn = document.querySelector(".navbarLogout");

export const mainFunction = () => {
	displayOptions();
	toggleMenu();
	confirmBtn.addEventListener("click", isFormFilled);
	navbarLogin.addEventListener("click", showLoginForm);
	openRegister.addEventListener("click", showRegisterForm);
	registerBtn.addEventListener("click", authRegister);
	loginBtn.addEventListener("click", authLogin);
	logoutBtn.addEventListener("click", authLogout);
};
