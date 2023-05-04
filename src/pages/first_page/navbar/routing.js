import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";

const registerLogin = document.querySelector(".registerLogin");
const navbarLogin = document.querySelector(".navbarLogin");
const navbarLogout = document.querySelector(".navbarLogout");
const header = document.querySelector(".header");
const wrapper = document.querySelector(".wrapper");
const secondPage = document.querySelector(".secondPage");

const firstOrigin = document.querySelector("#firstOrigin");
const firstDate = document.querySelector("#firstDate");
const firstDestination = document.querySelector("#firstDestination");
const firstPassengers = document.querySelector("#firstPassengers");
const weatherInfo = document.querySelector(".weatherInfo");

export const handleUserLoggedIn = () => {
	registerLogin.classList.remove("show");
	navbarLogin.classList.add("hide");
	navbarLogout.classList.add("show");
};

export const homePage = () => {
	signOut(auth).then(function () {
		registerLogin.classList.toggle("show");
		navbarLogin.classList.remove("hide");
		navbarLogout.classList.remove("show");
		header.classList.remove("hide");
		wrapper.classList.remove("hide");
		secondPage.classList.remove("show");

		firstOrigin.textContent = "Origin";
		firstDate.value = "";
		firstDestination.textContent = "Destination";
		firstPassengers.textContent = "Passengers";
		weatherInfo.textContent = "";
	});
};
