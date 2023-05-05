const optionPassengersTitles = document.querySelectorAll(
	".optionPassengersTitle"
);
const warning = document.querySelector(".warning");

let countAdults = 0;
let countChildren = 0;
let countBabies = 0;

export const handlePassengerCountChange = (e) => {
	if (e.target.classList.contains("passengerSelect_adults")) {
		countAdults = parseInt(e.target.value);
	}
	if (e.target.classList.contains("passengerSelect_children")) {
		countChildren = parseInt(e.target.value);
	}
	if (e.target.classList.contains("passengerSelect_babies")) {
		countBabies = parseInt(e.target.value);
	}

	updateAllCounts();
	countPassengers();
};

export const updateAllCounts = () => {
	const adults = document.querySelectorAll(".passengerSelect_adults");
	const children = document.querySelectorAll(".passengerSelect_children");
	const babies = document.querySelectorAll(".passengerSelect_babies");

	for (let adultSelect of adults) {
		adultSelect.value = countAdults;
	}

	for (let childSelect of children) {
		childSelect.value = countChildren;
	}

	for (let babySelect of babies) {
		babySelect.value = countBabies;
	}
};

export const countPassengers = () => {
	const selectedOptions = [];

	const selects = document.querySelectorAll(".passengerSelect");
	selects.forEach((select) => {
		selectedOptions.push(select.value);
	});

	if (
		selectedOptions[0] === "0" &&
		selectedOptions[1] === "0" &&
		selectedOptions[2] !== "0"
	) {
		warning.textContent = "Babies cannot fly on their own";
		warning.classList.toggle("showWarning");
	}

	const sumWithInitial = countAdults + countChildren + countBabies;

	const countsToChange = document.querySelectorAll(".passengerCount");

	let quantity;

	if (sumWithInitial === 0) {
		quantity = 9;
		countsToChange.forEach((countToChange) => {
			countToChange.textContent = `You can choose ${quantity} more passengers`;
		});
	} else if (sumWithInitial >= 10) {
		countsToChange.forEach((countToChange) => {
			countToChange.textContent = `Too many passengers`;
		});
	} else {
		quantity = 9 - sumWithInitial;
		countsToChange.forEach((countToChange) => {
			countToChange.textContent = `You can choose ${quantity} more passengers`;
		});
	}

	optionPassengersTitles.forEach((optionPassengersTitle) => {
		optionPassengersTitle.textContent = sumWithInitial;
	});
};
