import "./index.scss";
import { authLogout } from "./config/firebase";
import { getUserData } from "./pages/user_page/planeAPI";

const logoutBtn = document.querySelector(".navbarLogout");

export const mainFunctionSecond = () => {
	logoutBtn.addEventListener("click", authLogout);
	getUserData()
};

mainFunctionSecond();
