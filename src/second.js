import "./index.scss";
import { authLogout } from "./config/firebase";

const logoutBtn = document.querySelector(".navbarLogout");

export const mainFunctionSecond = () => {
	logoutBtn.addEventListener("click", authLogout);
};

mainFunctionSecond()