import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { planeAPI } from "../../summary/planeAPI";

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

export const handleGoToSummary = () => {
	header.classList.toggle("hide");
	wrapper.classList.toggle("hide");
	secondPage.classList.toggle("show");
	planeAPI();
};

export const homePage = () => {
	signOut(auth).then(function () {
		const passengersSelects_adults = document.querySelectorAll(
			".passengerSelect_adults"
		);
		const passengersSelects_children = document.querySelectorAll(
			".passengerSelect_children"
		);
		const passengersSelects_babies = document.querySelectorAll(
			".passengerSelect_babies"
		);
		const passengerCounts = document.querySelectorAll(".passengerCount");

		registerLogin.classList.remove("show");
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

		for (let passengersSelect_adults of passengersSelects_adults) {
			passengersSelect_adults.value = "0";
		}
		for (let passengersSelect_children of passengersSelects_children) {
			passengersSelect_children.value = "0";
		}
		for (let passengersSelect_babies of passengersSelects_babies) {
			passengersSelect_babies.value = "0";
		}
		for (let passengerCount of passengerCounts) {
			passengerCount.textContent = `You can choose 9 more passengers`;
		}
	});
};
