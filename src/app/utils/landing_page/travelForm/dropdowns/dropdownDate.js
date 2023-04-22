const optionDate = document.createElement("div");
const input = document.createElement("input");

optionDate.classList.add("optionDate");
input.type = "date";
input.classList.add("inputDate");

optionDate.appendChild(input);

export default optionDate