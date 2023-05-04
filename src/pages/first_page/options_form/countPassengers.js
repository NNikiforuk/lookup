const optionPassengersTitles = document.querySelectorAll(
	".optionPassengersTitle"
);
const warning = document.querySelector(".warning");

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
	console.log("warning");

	const initialValue = 0;
	const sumWithInitial = selectedOptions.reduce(
		(accumulator, currentValue) => Number(accumulator) + Number(currentValue),
		initialValue
	);

	const countToChange = document.querySelector(".passengerCount");

	let quantity;

	if (sumWithInitial === 0) {
		quantity = 9;
		countToChange.textContent = `You can choose ${quantity} more passengers`;
		console.log("1 opcja");
	} else if (sumWithInitial >= 10) {
		countToChange.textContent = `Too many passengers`;
		console.log("2 opcja");
	} else {
		quantity = 9 - sumWithInitial;
		countToChange.textContent = `You can choose ${quantity} more passengers`;
		console.log("3 opcja");
	}

	optionPassengersTitles.forEach((optionPassengersTitle) => {
		optionPassengersTitle.textContent = sumWithInitial;
	});
};
