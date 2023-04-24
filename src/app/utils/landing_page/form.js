import { optionOrigin } from "../landing_page/travelForm/dropdowns/dropdownOrigin";
import { optionDestination } from "../landing_page/travelForm/dropdowns/dropdownDestination";
import { optionPassengers } from "../landing_page/travelForm/dropdowns/dropdownPassengers";
import { optionDate } from "./travelForm/dropdowns/dropdownDate";
import { isFormFilled } from "./travelForm/functions/isFormFilled";
import "../../../styles/form.scss";

const wrapper = document.createElement("div");
const form = document.createElement("div");

export const weatherInfo = document.createElement("div");

const confirmBtn = document.createElement("button");

wrapper.classList.add("wrapper");
form.classList.add("form");

weatherInfo.classList.add("weatherInfo");

confirmBtn.classList.add("confirmBtn");
confirmBtn.textContent = "Accept";

form.append(optionOrigin, optionDate, optionDestination, optionPassengers);
wrapper.append(weatherInfo, form, confirmBtn);

confirmBtn.addEventListener("click", isFormFilled);

export default wrapper;
