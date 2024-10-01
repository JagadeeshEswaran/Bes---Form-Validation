const formElement = document.querySelector("form");
const messageElement = document.getElementById("message");
const passwordElement = document.getElementById("password");
const cnfPassword = document.getElementById("cnf_password");

let isValid = false;

const processInput = () => {
	validateForm();
};

const validateForm = () => {
	isValid = formElement.checkValidity();

	if (passwordElement.value !== cnfPassword.value) {
		messageElement.textContent = "Passwords should match...";
		messageElement.style.color = "crimson";

		return;
	}

	if (isValid) {
		messageElement.textContent = "Success !!";
		messageElement.style.color = "green";
	}
};

/**
 * {
 * 	name: "",
 *  username: "",
 *  password: "",
 *  phone: "",
 *  email: "",
 *  linkedInProfile: ""
 * }
 */

formElement.addEventListener("submit", (e) => {
	e.preventDefault();

	processInput();
});
