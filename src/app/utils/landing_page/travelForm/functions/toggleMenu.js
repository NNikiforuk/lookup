import "../../../../../styles/form.scss";

export const toggleMenu = () => {
	const optionsToDrop = document.querySelectorAll(".optionToDrop");

	optionsToDrop.forEach((item) => {
		item.addEventListener("click", () => {
			const dropdown = item.lastElementChild;
			dropdown.classList.toggle("show");
		});
	});
};
