import { optionOrigin } from "../landing_page/travelForm/dropdowns/dropdownOrigin";
import { optionDestination } from "../landing_page/travelForm/dropdowns/dropdownDestination";
import { optionPassengers } from "../landing_page/travelForm/dropdowns/dropdownPassengers";
import "../../../styles/form.scss";

const wrapper = document.createElement("div");
const form = document.createElement("div");

export const weatherInfo = document.createElement("div");

const optionDate = document.createElement("div");
const input = document.createElement("input");

const confirmBtn = document.createElement("button");

wrapper.classList.add("wrapper");
form.classList.add("form");

weatherInfo.classList.add("weatherInfo");

optionDate.classList.add("optionDate");
input.type = "date";
input.classList.add("inputDate");

confirmBtn.classList.add("confirmBtn");
confirmBtn.textContent = "Accept";

optionDate.appendChild(input);

form.append(optionOrigin, optionDate, optionDestination, optionPassengers);
wrapper.append(weatherInfo, form, confirmBtn);

export default wrapper;
