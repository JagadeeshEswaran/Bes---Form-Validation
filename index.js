const formElement = document.querySelector("form");
const messageElement = document.getElementById("message");

const processInput = () => {
	validateForm();
};

const validateForm = () => {
	// let isValid = formElement.checkValidity();
	let isValid = true;

	if (isValid) {
		messageElement.textContent = "Success!";
	}
};

formElement.addEventListener("submit", (e) => {
	e.preventDefault();
	processInput();
});
