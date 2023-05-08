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
	return response.data;
};

export const planeAPI = async () => {
	warning.classList.remove("showWarning");
	const flightCardsToRemove = document.querySelectorAll(".flightCard");

	flightCardsToRemove.forEach((flightCardToRemove) => {
		flightCardToRemove.remove();
	});

	const data = await fetchFlightData();
	const flights = sumFlights(data);
	const flight = flights[0];

	if (flights.length === 0) {
		warning.textContent = "No flight found";
		warning.classList.toggle("showWarning");
	} else {
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
	}
};

const extractData = (flightData) => {
	let array = [];
	for (let pricingOption of flightData.pricingOptions) {
		for (let item of pricingOption.items) {
			array.push({
				agentId: item.agentId,
				deepLink: item.deepLink,
				price: item.price.amount,
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
