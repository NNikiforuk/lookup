import axios from "axios";
import { ref, getDatabase, child, get } from "firebase/database";

let origin;
let date;
let destination;
let passengers;
const originText = document.querySelector(".originText");
const dateText = document.querySelector(".dateText");
const destinationText = document.querySelector(".destinationText");
const passengersText = document.querySelector(".passengersText");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints/endpoints.json";

export const getUserData = () => {
	const db = getDatabase();
	const dbRef = ref(db);

	get(child(dbRef, "users")).then((snapshot) => {
		// console.log(snapshot);

		let users = [];
		snapshot.forEach((childSnapshot) => {
			users.push(childSnapshot.val());
		});
		users = users[0];

		origin = users.origin;
		date = users.date;
		destination = users.destination;
		passengers = users.passengers;
		// console.log(origin);

		originText.textContent = origin;
		dateText.textContent = date;
		destinationText.textContent = destination;
		passengersText.textContent = passengers;

		// axios.get(URL).then((response) => {
		// 	response.data.destination.forEach((element) => {
		// 		console.log(element)
		// 		element.filter(el => el.description === origin);
		// 	});
		// });

		planeAPI();
	});
};

const options = {
	method: "POST",
	url: "https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create",
	headers: {
		"content-type": "application/json",
		"X-RapidAPI-Key": "1208df8556msh38c37d80315f887p1e5b54jsn41a6284627a7",
		"X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
	},
	data: {
		query: {
			market: "PL",
			locale: "pl-PL",
			currency: "PLN",
			queryLegs: [
				{
					originPlaceId: { iata: "LHR" },
					destinationPlaceId: { iata: "DXB" },
					date: {
						year: 2023,
						month: 9,
						day: 20,
					},
				},
			],
			cabinClass: "CABIN_CLASS_ECONOMY",
			adults: 2,
			childrenAges: [3, 9],
		},
	},
};

export const planeAPI = async () => {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};






