const registerLogin = document.querySelector(".registerLogin");
const register = document.querySelector(".register");
const warning = document.querySelector(".warning");

export const showLoginForm = () => {
	registerLogin.classList.toggle("show");
	warning.classList.remove("show");
};

export const showRegisterForm = () => {
	register.classList.add("showRegister");
};
