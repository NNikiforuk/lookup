import { countPassengers } from "../functions/countPassengers";

const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints.json";

const optionPassengers = document.createElement("div");
const optionPassengersIcon = document.createElement("i");
const optionPassengersTitle = document.createElement("p");
const dropdownPassengers = document.createElement("ul");

optionPassengers.classList.add("optionPassengers");
optionPassengers.classList.add("optionToDrop");
optionPassengersIcon.classList.add("fa-solid");
optionPassengersIcon.classList.add("fa-user");
optionPassengersTitle.classList.add("optionPassengersTitle");
optionPassengersTitle.textContent = "Passengers";
dropdownPassengers.classList.add("dropdownPassengers");
dropdownPassengers.classList.add("dropdown");

axios.get(URL).then((response) => {
	response.data.passengers.forEach((element) => {
		const passengerContainer = document.createElement("div");
		const divLeft = document.createElement("div");
		const divLeftTitle = document.createElement("div");
		const divLeftDesc = document.createElement("div");
		const selectRight = document.createElement("select");

		for (let i = 0; i < 10; i++) {
			const passengerOption = document.createElement("option");
			passengerOption.value = i;
			passengerOption.textContent = i;
			passengerOption.classList.add("option");
			selectRight.append(passengerOption);
		}
		passengerContainer.classList.add("passengerContainer");
		divLeftTitle.textContent = element.description;
		divLeftTitle.classList.add("passenger");
		divLeftDesc.textContent = element.details;
		divLeftDesc.classList.add("passengerDesc");
		selectRight.classList.add("passengerSelect");

		divLeft.append(divLeftTitle, divLeftDesc);
		passengerContainer.append(divLeft, selectRight);
		dropdownPassengers.append(passengerContainer);
		selectRight.addEventListener("change", countPassengers);
	});
});

optionPassengers.append(
	optionPassengersIcon,
	optionPassengersTitle,
	dropdownPassengers
);


export { optionPassengers };
