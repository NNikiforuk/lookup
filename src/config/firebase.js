import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from "firebase/database";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

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
const database = getDatabase(app);
const auth = getAuth();

export const authRegister = () => {
	const email = document.querySelector(".registerEmail").value;
	const password = document.querySelector(".registerPassword").value;

	const origin = document.querySelector(".optionOriginTitle").textContent;
	const date = document.querySelector(".inputDate").value;
	const destination = document.querySelector(
		".optionDestinationTitle"
	).textContent;
	const passengers = document.querySelector(
		".optionPassengersTitle"
	).textContent;

	createUserWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			// Signed in
			const user = userCredential.user;

			await set(ref(database, "users/" + user.uid), {
				email: email,
				
			});
		})
		.then(function () {
			window.location.replace("second.html");
		})
		.catch((error) => {
			const errorMessage = error.message;

			alert(errorMessage);
		});
};

export const authLogin = () => {
	const email = document.querySelector(".loginEmail").value;
	const password = document.querySelector(".loginPassword").value;

	signInWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			// Signed in
			const user = userCredential.user;
			const dt = new Date();

			update(ref(database, "users/" + user.uid), {
				last_login: dt,
			});
		})
		.then(function () {
			window.location.replace("second.html");
		})
		.catch((error) => {
			const errorMessage = error.message;
			alert(errorMessage);
		});
};

export const authLogout = () => {
	signOut(auth)
		.then(function () {
			window.location.replace("index.html");
		})
		.catch((error) => {
			const errorMessage = error.message;
			alert(errorMessage);
		});
};
