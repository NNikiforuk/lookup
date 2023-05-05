import axios from "axios";

import * as data from "./data.json";

const summary = document.querySelector(".summary");

export const planeAPI = async () => {
	const flights = sumFlights(data);
	const flight = flights[0];

	const createFlightCard = (flight) => {
		const flightCard = document.createElement("div");
		const agentId = document.createElement("a");
		const price = document.createElement("div");

		agentId.textContent = `Agent: ${flight.agentId}`;
        agentId.classList.add("agentId")
        agentId.href = flight.deepLink;
        agentId.setAttribute("target", "_blank");
		price.textContent = `Price: ${flight.price} PLN`;
        price.classList.add("price");
		flightCard.append(agentId, price);

		return flightCard;
	};

	summary.append(createFlightCard(flight));

	// const options = {
	// 	method: "POST",
	// 	url: "https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create",
	// 	headers: {
	// 		"content-type": "application/json",
	// 		"X-RapidAPI-Key": "1208df8556msh38c37d80315f887p1e5b54jsn41a6284627a7",
	// 		"X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
	// 	},
	// 	data: {
	// 		query: {
	// 			market: "PL",
	// 			locale: "pl-PL",
	// 			currency: "PLN",
	// 			queryLegs: [
	// 				{
	// 					originPlaceId: { iata: "WRO" },
	// 					destinationPlaceId: { iata: "KRK" },
	// 					date: {
	// 						year: 2023,
	// 						month: 5,
	// 						day: 5,
	// 					},
	// 				},
	// 			],
	// 			cabinClass: "CABIN_CLASS_ECONOMY",
	// 			adults: 2,
	// 			childrenAges: [3, 9],
	// 		},
	// 	},
	// };

	// try {
	// 	// const response = await axios.request(options);
	// 	const results = response.data;
	// 	// const results = response.data.content.results.itineraries[0].pricingOptions[0].items[0]
	// 	// summary.textContent = `Link: ${results.deepLink}, price: ${results.price.amount} PLN`
	// } catch (error) {
	// 	console.error(error);
	// }
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

planeAPI();
