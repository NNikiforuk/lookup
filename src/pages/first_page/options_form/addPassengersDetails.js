export const addPassengersDetails = () => {
	const dropdownsPassengers = document.querySelectorAll(".dropdownPassengers");

	dropdownsPassengers.forEach((dropdownPassengers) => {
		dropdownPassengers.append(addDetails());
	});
};

const addDetails = () => {
	const belowContainer = document.createElement("div");
	const confirmBtn = document.createElement("button");
	confirmBtn.classList.add("confirmSmallerBtn");
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

	confirmBtn.addEventListener("click", (e) => {
		const dropdown = e.target.parentElement.parentElement;
		dropdown.classList.toggle("show");
	});

	return belowContainer;
};
