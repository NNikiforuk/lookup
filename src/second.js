import "./index.scss";
import { authLogout } from "./config/firebase";
import { ref, getDatabase, child, get } from "firebase/database";
import { planeAPI } from "./pages/user_page/planeAPI";

const logoutBtn = document.querySelector(".navbarLogout");
const originText = document.querySelector(".originText");
const dateText = document.querySelector(".dateText");
const destinationText = document.querySelector(".destinationText");
const passengersText = document.querySelector(".passengersText");

let origin;
let date;
let destination;
let passengers;

export const mainFunctionSecond = () => {
	logoutBtn.addEventListener("click", authLogout);

	const db = getDatabase();
	const dbRef = ref(db);

	get(child(dbRef, "users")).then((snapshot) => {
		let users = [];
		snapshot.forEach((childSnapshot) => {
			users.push(childSnapshot.val());
		});
		users = users[0];

		origin = users.origin;
		date = users.date;
		destination = users.destination;
		passengers = users.passengers;

		originText.textContent = origin;
		dateText.textContent = date;
		destinationText.textContent = destination;
		passengersText.textContent = passengers;
	});

	planeAPI();
};

mainFunctionSecond();
