import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { userPage } from "../pages/landing_page/navbar/routing";

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



export const authRegister = () => {
	const email = document.querySelector(".registerEmail").value;
	const password = document.querySelector(".registerPassword").value;

	createUserWithEmailAndPassword(
		auth,
		email,
		password,
	).then(() => {
		userPage()
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
		.then(() => {
			userPage()
		})
		.catch((error) => {
			const errorMessage = error.message;
			alert(errorMessage);
		});
};


