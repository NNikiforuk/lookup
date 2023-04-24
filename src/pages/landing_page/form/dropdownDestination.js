const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints/endpoints.json";
const dropdownDestination = document.querySelector(".dropdownDestination");
const optionDestinationTitle = document.querySelector(
	".optionDestinationTitle"
);

export const showDestinationDropdown = () => {
	axios.get(URL).then((response) => {
		response.data.destination.forEach((element) => {
			const li = document.createElement("li");
			li.textContent = element.description;
			li.classList.add("liItem");
			dropdownDestination.appendChild(li);
			li.addEventListener("click", () => {
				optionDestinationTitle.textContent = li.textContent;
			});
		});
	});
};
