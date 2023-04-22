export const countPassengers = () => {
	const selectedOptions = [];

	const selects = document.querySelectorAll(".passengerSelect");
	selects.forEach((select) => {
		selectedOptions.push(select.value);
	});

	if (
		selectedOptions[0] === 0 &&
		selectedOptions[1] === 0 &&
		selectedOptions[2] !== 0
	) {
		alert("Babies cannot fly on their own");
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
	} else {
		quantity = 9 - sumWithInitial;
	}

	countToChange.textContent = `You can choose ${quantity} more passengers`;

	// dropdownPassengers.previousElementSibling.innerHTML = sumWithInitial;
};
