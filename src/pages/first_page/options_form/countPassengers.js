const optionPassengersTitle = document.querySelector(".optionPassengersTitle");
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
		warning.classList.toggle("showWarning")
	}

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
	} else if (sumWithInitial >= 10) {
		countToChange.textContent = `Too many passengers`;
	} else {
		quantity = 9 - sumWithInitial;
		countToChange.textContent = `You can choose ${quantity} more passengers`;
	}

	optionPassengersTitle.textContent = sumWithInitial;
};
