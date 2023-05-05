import axios from "axios";
import { selectedDate } from "../first_page/options_form/isFormFilled";

const summary = document.querySelector(".summary");
const warning = document.querySelector(".warning");

export const fetchFlightData = async () => {
	const dateData = extractDateFromString(selectedDate);

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
						originPlaceId: { iata: "WRO" },
						destinationPlaceId: { iata: "KRK" },
						date: dateData,
					},
				],
				cabinClass: "CABIN_CLASS_ECONOMY",
				adults: 2,
				childrenAges: [3, 9],
			},
		},
	};

	const response = await axios.request(options);
	return response.data;
};

export const planeAPI = async () => {
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

			agentId.textContent = `Agent: ${flight.agentId}`;
			agentId.classList.add("agentId");
			agentId.href = flight.deepLink;
			agentId.setAttribute("target", "_blank");
			price.textContent = `Price: ${flight.price} PLN`;
			price.classList.add("price");
			flightCard.append(agentId, price);

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
