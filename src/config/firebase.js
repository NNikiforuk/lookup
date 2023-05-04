import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { handleUserLoggedIn } from "../pages/first_page/navbar/routing";

const firebaseConfig = {
	apiKey: "AIzaSyCSAgcs76sBvOhtfUkAor-dHDoumhBbXdU",
	authDomain: "lookup-79827.firebaseapp.com",
	projectId: "lookup-79827",
	storageBucket: "lookup-79827.appspot.com",
	messagingSenderId: "279470129276",
	appId: "1:279470129276:web:8338035e197c10e8a589f9",
	measurementId: "G-2VSVR84FMW",
	databaseURL:
		"https://lookup-79827-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const warning = document.querySelector(".warning");

let isUserLoggedIn = false;

export const userData = () => {
	return {
		isUserLoggedIn,
	};
};

export const authRegister = async () => {
	const email = document.querySelector(".registerEmail").value;
	const password = document.querySelector(".registerPassword").value;

	try {
		const user = await createUserWithEmailAndPassword(auth, email, password);

		isUserLoggedIn = true;

		handleUserLoggedIn();
		warning.classList.remove("show");
	} catch (error) {
		const errorMessage = error.message;
		warning.textContent = errorMessage;
		warning.classList.toggle("show");
	}
};

export const authLogin = async () => {
	// const email = document.querySelector(".loginEmail").value;
	// const password = document.querySelector(".loginPassword").value;

	const email = "jakub@mail.com";
	const password = "iloveniki";

	try {
		await signInWithEmailAndPassword(auth, email, password);

		isUserLoggedIn = true;

		handleUserLoggedIn();
	} catch (error) {
		const errorMessage = error.message;
		warning.textContent = errorMessage;
		warning.classList.toggle("show");
	}
};
