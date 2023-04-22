import "../../../../../styles/form.scss";

export const toggleMenu = () => {
	const optionsToDrop = document.querySelectorAll(".optionToDrop");

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
