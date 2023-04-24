const wrapperAuth = document.createElement("div");

const login = document.createElement("div");
const loginTitle = document.createElement("div");
const loginTitleIcon = document.createElement("div");
const loginTitleName = document.createElement("div");
const loginForm = document.createElement("div");
const loginFormEmail = document.createElement("input");
const loginFormPassword = document.createElement("input");
const loginBtn = document.createElement("button");

const registration = document.createElement("div");
const registrationTitle = document.createElement("div");
const registrationForm = document.createElement("div");
const registrationFormEmail = document.createElement("input");
const registrationFormPassword = document.createElement("input");
const registrationFormPasswordConfirm = document.createElement("input");
const registrationBtn = document.createElement("button");

login.classList.add("login")

loginForm.append(loginFormEmail, loginFormPassword);
loginTitle.append(loginTitleIcon, loginTitleName);
login.append(loginTitle, loginForm, loginBtn);

registrationForm.append(
	registrationFormEmail,
	registrationFormPassword,
	registrationFormPasswordConfirm
);
registration.append(registrationTitle, registrationForm, registrationBtn);

wrapperAuth.append(login, registration);

export { wrapperAuth };
