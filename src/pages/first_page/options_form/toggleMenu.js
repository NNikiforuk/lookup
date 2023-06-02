// Origin, destination, passengers, luggage
const optionsToDrop = document.querySelectorAll(".optionToDrop");

export const toggleMenu = () => {

	optionsToDrop.forEach((item) => {
		// When I click any option
		item.addEventListener("click", (e) => {
			if (isDescendantOfPreventClose(e.target)) return;

			const dropdown = item.lastElementChild;
			dropdown.classList.toggle("show");
		});
	});
};

//We check if currentElement or any of its parent has class 'preventClose' => passengers
function isDescendantOfPreventClose(element) {
	let currentElement = element;

	while (currentElement) {
		//The loop continues as long as currentElement returns true
		if (currentElement.classList.contains("preventClose")) {
			return true;
		}

		//If false we move up to the parent
		currentElement = currentElement.parentElement;
	}

	return false;
}
