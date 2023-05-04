const registerLogin = document.querySelector(".registerLogin");
const navbarLogin = document.querySelector(".navbarLogin");
const navbarLogout = document.querySelector(".navbarLogout");
const header = document.querySelector(".header");
const wrapper = document.querySelector(".wrapper");
const secondPage = document.querySelector(".secondPage");

// const originText = document.querySelector(".originText");
// const dateText= document.querySelector(".dateText");
// const destinationText = document.querySelector(".destinationText");
// const passengersText = document.querySelector(".passengersText");


export const userPage = () => {
    registerLogin.classList.remove("show");
    navbarLogin.classList.add("hide");
    navbarLogout.classList.add("show");
    header.classList.add("hide");
    wrapper.classList.add("hide");
    secondPage.classList.add("show");


};
