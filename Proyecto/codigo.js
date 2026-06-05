// Código extraído de index.html
const openRegistration = document.querySelector("#openRegistration");
const form = document.querySelector("#registrationForm");
const message = document.querySelector("#formMessage");

openRegistration.addEventListener("click", () => {
	document.querySelector("#registro").scrollIntoView({ behavior: "smooth" });
	window.history.replaceState(null, "", "#registro");
	setTimeout(() => document.querySelector("#fullName").focus(), 650);
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	message.className = "message";

	const data = {
		fullName: form.fullName.value.trim(),
		country: form.country.value,
		email: form.email.value.trim(),
		registeredAt: new Date().toISOString(),
	};

	const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

	if (!data.fullName || !data.country || !data.email) {
		message.textContent = "Completa todos los campos obligatorios.";
		message.classList.add("error");
		return;
	}

	if (!emailIsValid) {
		message.textContent = "Ingresa un correo electrónico válido.";
		message.classList.add("error");
		return;
	}

	const registrations = JSON.parse(
		localStorage.getItem("campusTlamatiliztliRegistrations") || "[]",
	);
	registrations.push(data);
	localStorage.setItem(
		"campusTlamatiliztliRegistrations",
		JSON.stringify(registrations, null, 2),
	);

	form.reset();
	message.textContent = "Registro completado. Tus datos se guardaron temporalmente.";
	message.classList.add("success");
});

