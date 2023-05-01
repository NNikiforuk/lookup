const registerLogin = document.querySelector(".registerLogin");
const register = document.querySelector(".register");

export const showLoginForm = () => {
	registerLogin.classList.toggle("show");
};

export const showRegisterForm = () => {
	register.classList.add("show");
};


