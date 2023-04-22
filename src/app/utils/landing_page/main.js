import wrapper  from "./form";
import image from "../../../assets/airplane_wing.jpg";
import "../../../styles/main.scss";

const main = document.createElement("main");

const header = document.createElement("header");
const headerImg = document.createElement("img");
const headerText = document.createElement("div");

main.classList.add("main");

header.classList.add("header");
headerImg.classList.add("headerImg");
headerText.classList.add("headerText");

headerImg.src = image;
headerImg.alt = "plane photo";
headerText.textContent = "Conveniently plan your flights";

header.append(headerImg, headerText);
main.append(header, wrapper);

export default main;
