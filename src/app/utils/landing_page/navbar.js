import image from "../../../assets/logo.png";
import "../../../styles/navbar.scss";

const navbar = document.createElement("navbar");
const container = document.createElement("div");

const navbarLogo = document.createElement("div");
const logo = document.createElement("img");
const logoText = document.createElement("div");

const navbarLogin = document.createElement("div");
const loginBtnText = document.createElement("div");
const loginBtnImg = document.createElement("i");

navbar.classList.add("navbar");
container.classList.add("container");

navbarLogo.classList.add("navbarLogo");
logo.classList.add("logo");
logoText.classList.add("logoText");

navbarLogin.classList.add("navbarLogin");
loginBtnText.classList.add("loginBtnText");
loginBtnImg.classList.add("fa-solid");
loginBtnImg.classList.add("fa-plane");

logo.src = image;
logo.alt = "logo";
logoText.textContent = "LookUp";

loginBtnText.textContent = "Login";

navbarLogin.append(loginBtnText, loginBtnImg);
navbarLogo.append(logo, logoText);
container.append(navbarLogo, navbarLogin);
navbar.appendChild(container);

export default navbar;
