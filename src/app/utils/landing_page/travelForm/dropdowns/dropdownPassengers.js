import { countPassengers } from "../functions/countPassengers";
import "../../../../../styles/dropdownPassengers.scss";

const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints/endpoints.json";

const optionPassengers = document.createElement("div");
const optionPassengersIcon = document.createElement("i");
const optionPassengersTitle = document.createElement("p");
const dropdownPassengers = document.createElement("div");

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
		divLeft.classList.add("passengerLeft");
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
	addBelowPassenger();
});

const addBelowPassenger = () => {
	const belowContainer = document.createElement("div");
	const confirmBtn = document.createElement("button");
	confirmBtn.classList.add("confirmBtn");
	confirmBtn.textContent = "Accept";
	belowContainer.classList.add("belowContainer");

	belowContainer.appendChild(confirmBtn);

	const passengerNote = document.createElement("div");
	const infoIcon = document.createElement("i");
	const infoText = document.createElement("p");

	passengerNote.classList.add("passengerNote");
	infoIcon.classList.add("fa-circle-info");
	infoIcon.classList.add("fa-solid");
	infoText.classList.add("infoText");
	infoText.textContent = "Note";

	const countContainer = document.createElement("div");
	countContainer.classList.add("countContainer");
	const passengerCount = document.createElement("p");
	passengerCount.classList.add("passengerCount");

	passengerCount.textContent = "You can choose 9 more passengers";

	const babyInfo = document.createElement("p");
	babyInfo.classList.add("babyInfo");
	babyInfo.textContent = "Babies travel free of charge";

	countContainer.append(passengerCount, babyInfo);
	passengerNote.append(infoIcon, infoText);
	belowContainer.append(passengerNote, countContainer);
	dropdownPassengers.append(belowContainer);

	confirmBtn.addEventListener("click", (e) => {
		const dropdown = e.target.parentElement.parentElement;
		dropdown.classList.toggle("show");
	});
};

optionPassengers.append(
	optionPassengersIcon,
	optionPassengersTitle,
	dropdownPassengers
);

export { optionPassengers };
