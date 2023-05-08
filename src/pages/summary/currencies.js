import { planeAPI } from "./planeAPI";

export let currency = "PLN";

export const currencies = (e) => {
	if (e.target.classList.contains("pln")) {
		currency = "PLN";
	} else if (e.target.classList.contains("euro")) {
		currency = "EUR";
	} else if (e.target.classList.contains("usd")) {
		currency = "USD";
	}
	planeAPI().catch(console.error);
};
