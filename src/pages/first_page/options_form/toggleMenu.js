const optionsToDrop = document.querySelectorAll(".optionToDrop");

export const toggleMenu = () => {

	optionsToDrop.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (isDescendantOfPreventClose(e.target)) return;

			const dropdown = item.lastElementChild;
			dropdown.classList.toggle("show");
		});
	});
};

function isDescendantOfPreventClose(element) {
	let currentElement = element;

	while (currentElement) {
		if (currentElement.classList.contains("preventClose")) {
			return true;
		}

		currentElement = currentElement.parentElement;
	}

	return false;
}
