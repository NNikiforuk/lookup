import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCSAgcs76sBvOhtfUkAor-dHDoumhBbXdU",
	authDomain: "lookup-79827.firebaseapp.com",
	projectId: "lookup-79827",
	storageBucket: "lookup-79827.appspot.com",
	messagingSenderId: "279470129276",
	appId: "1:279470129276:web:8338035e197c10e8a589f9",
	measurementId: "G-2VSVR84FMW",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const email = document.querySelector(".registerEmail").value;
const password = document.querySelector(".registerPassword").value;

export const authRegister = (e) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;

			console.log("OK");
			alert("user created");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			console.log("nieeee");
            console.log(typeof email)
			alert(errorMessage);
		});
};
