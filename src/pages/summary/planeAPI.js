import axios from "axios";
import { selectedDate } from "../first_page/options_form/isFormFilled";
import {
	countAdults,
	countChildren,
	countBabies,
} from "../first_page/options_form/countPassengers";
import { cityInfoDestination } from "./cityInfoDestination";
import { currency } from "./currencies";

const summary = document.querySelector(".summary");
const warning = document.querySelector(".warning");
const secondOrigin = document.querySelector("#secondOrigin");
const secondDestination = document.querySelector("#secondDestination");
const loader = document.querySelector(".loader");

export const fetchFlightData = async () => {
	const dateData = extractDateFromString(selectedDate);
	const airportOrigin = secondOrigin.textContent.slice(-4, -1);
	const airportDestination = secondDestination.textContent.slice(-4, -1);
	let childrenAges = [];

	for (let i = 0; i < countChildren; i++) {
		const child = 8;
		childrenAges.push(child);
	}
	for (let i = 0; i < countBabies; i++) {
		const baby = 1;
		childrenAges.push(baby);
	}

	const options = {
		method: "POST",
		url: "https://skyscanner65.p.rapidapi.com/api/v1/flights/live/search/create",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "1208df8556msh38c37d80315f887p1e5b54jsn41a6284627a7",
			"X-RapidAPI-Host": "skyscanner65.p.rapidapi.com",
		},
		data: {
			query: {
				market: "PL",
				locale: "pl-PL",
				currency: currency,
				queryLegs: [
					{
						originPlaceId: { iata: airportOrigin },
						destinationPlaceId: { iata: airportDestination },
						date: dateData,
					},
				],
				cabinClass: "CABIN_CLASS_ECONOMY",
				adults: countAdults,
				childrenAges,
			},
		},
	};

	cityInfoDestination();
	const response = await axios.request(options);
	const sessionToken = response.data.sessionToken;

	while (true) {
		await sleep(1000);
		const response = await axios.request({
			method: "GET",
			url: "https://skyscanner65.p.rapidapi.com/api/v1/flights/live/search/poll",
			params: {
				sessionToken,
			},
			headers: {
				"X-RapidAPI-Key": "1208df8556msh38c37d80315f887p1e5b54jsn41a6284627a7",
				"X-RapidAPI-Host": "skyscanner65.p.rapidapi.com",
			},
		});

		let status = response.data.status;
		if (status === "RESULT_STATUS_COMPLETE") {
			return response.data;
		}
		if (status === "RESULT_STATUS_FAILED") {
			throw new Error("Fetching flights failed");
		}
	}
};

export const planeAPI = async () => {
	warning.classList.remove("showWarning");
	const flightCardsToRemove = document.querySelectorAll(".flightCard");
	const planeText = document.querySelector(".planeText");
	const planeIcon = document.querySelector(".planeIcon");

	flightCardsToRemove.forEach((flightCardToRemove) => {
		flightCardToRemove.remove();
	});

	let data;
	try {
		loader.classList.add("showLoader");
		data = await fetchFlightData();
		loader.classList.remove("showLoader");
	} catch (error) {
		warning.textContent = "Error while fetching flight data";
		warning.classList.toggle("showWarning");
		return;
	}
	const flights = sumFlights(data);
	const flight = flights[0];

	if (flights.length === 0) {
		planeText.textContent = "";
		planeIcon.innerHTML = "";
		warning.textContent = "No flight found";
		warning.classList.toggle("showWarning");
	}

	if (
		secondDestination.textContent === "Krakow (KRK)" ||
		secondDestination.textContent === "Warsaw (WAW)"
	) {
		planeText.textContent = "Embraer";
		planeIcon.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
	} else if (secondDestination.textContent === "Paris (PAR)") {
		planeText.textContent = "Boeing 737";
		planeIcon.innerHTML = '<i class="fa-solid fa-plane"></i>';
	} else if (secondDestination.textContent === "New York (NYC)") {
		planeText.textContent = "Dreamliner 787";
		planeIcon.innerHTML = '<i class="fa-solid fa-jet-fighter"></i>';
	}

	const createFlightCard = (flight) => {
		const flightCard = document.createElement("div");
		const agentId = document.createElement("a");
		const price = document.createElement("div");

		flightCard.classList.add("flightCard");
		price.textContent = `Price: ${flight.price} ${currency}`;
		price.classList.add("price");
		agentId.textContent = `Click to book`;
		agentId.classList.add("agentId");
		agentId.href = flight.deepLink;
		agentId.setAttribute("target", "_blank");
		flightCard.append(price, agentId);

		return flightCard;
	};

	summary.append(createFlightCard(flight));
};

const extractData = (flightData) => {
	let array = [];
	for (let pricingOption of flightData.pricingOptions) {
		for (let item of pricingOption.items) {
			array.push({
				agentId: item.agentId,
				deepLink: item.deepLink,
				price: Number(item.price.amount) /1000,
			});
		}
	}
	return array;
};

const extractCheapestFlight = (data) => {
	const results = data.content.sortingOptions.cheapest;

	return results.map((x) => x.itineraryId);
};

export const sumFlights = (data) => {
	const cheapestFlights = extractCheapestFlight(data);
	let array = [];
	for (let cheapestFlight of cheapestFlights) {
		const results = data.content.results.itineraries;
		const itenary = results[cheapestFlight];
		const x = extractData(itenary);
		for (let el of x) {
			array.push(el);
		}
	}
	return array;
};

export const extractDateFromString = (dateString) => {
	const dataSplitted = dateString.split("-");
	const year = Number(dataSplitted[0]);
	const month = Number(dataSplitted[1]);
	const day = Number(dataSplitted[2]);

	const dataInObject = {
		year: year,
		month: month,
		day: day,
	};

	return dataInObject;
};

const sleep = async (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
