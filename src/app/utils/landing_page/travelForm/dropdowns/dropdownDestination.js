const axios = require("axios");
const URL =
	"https://raw.githubusercontent.com/NNikiforuk/lookup/main/endpoints/endpoints.json";

const optionDestination = document.createElement("div");
const optionDestinationIcon = document.createElement("i");
const optionDestinationTitle = document.createElement("p");
const dropdownDestination = document.createElement("ul");

optionDestination.classList.add("optionDestination");
optionDestination.classList.add("optionToDrop");
optionDestination.classList.add("optionToClose");
optionDestinationIcon.classList.add("fa-solid");
optionDestinationIcon.classList.add("fa-plane");
optionDestinationTitle.classList.add("optionDestinationTitle");
optionDestinationTitle.textContent = "Destination";
dropdownDestination.classList.add("dropdownDestination");
dropdownDestination.classList.add("dropdown");

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

optionDestination.append(
	optionDestinationIcon,
	optionDestinationTitle,
	dropdownDestination
);

export { optionDestination };
