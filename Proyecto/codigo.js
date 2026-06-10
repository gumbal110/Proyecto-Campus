// Código extraído de index.html
const openRegistration = document.querySelector("#openRegistration");
const stickyOpenRegistration = document.querySelector("#stickyOpenRegistration");
const form = document.querySelector("#registrationForm");
const message = document.querySelector("#formMessage");

const handleRegistrationClick = () => {
	document.querySelector("#registro").scrollIntoView({ behavior: "smooth" });
	window.history.replaceState(null, "", "#registro");
	setTimeout(() => document.querySelector("#fullName").focus(), 650);
};

if (openRegistration) {
	openRegistration.addEventListener("click", handleRegistrationClick);
}

if (stickyOpenRegistration) {
	stickyOpenRegistration.addEventListener("click", handleRegistrationClick);
}

// Control de visibilidad del Sticky Header al hacer scroll
const stickyHeader = document.querySelector(".sticky-header");
const heroLogo = document.querySelector(".brand-mark");

if (stickyHeader && heroLogo) {
	window.addEventListener("scroll", () => {
		const logoRect = heroLogo.getBoundingClientRect();
		// Si el logo del hero se desplaza hacia arriba fuera de la pantalla
		if (logoRect.bottom < 0) {
			stickyHeader.classList.add("visible");
		} else {
			stickyHeader.classList.remove("visible");
		}
	});
}

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

// Pantalla de carga (Loader) por 2.5 segundos
window.addEventListener("DOMContentLoaded", () => {
	const loader = document.querySelector("#loader-wrapper");
	if (loader) {
		setTimeout(() => {
			loader.classList.add("fade-out");
			// Eliminamos el elemento del DOM al finalizar la animación para no obstaculizar interacciones
			loader.addEventListener("transitionend", () => {
				loader.remove();
			});
		}, 2500);
	}
});

// Interactividad del menú desplegable "Cursos" (Hover y Click)
const dropdown = document.querySelector(".nav-item.dropdown");
const dropdownTrigger = document.querySelector(".dropdown-trigger");

if (dropdown && dropdownTrigger) {
	dropdownTrigger.addEventListener("click", (event) => {
		event.stopPropagation();
		const isOpen = dropdown.classList.contains("open");
		dropdownTrigger.setAttribute("aria-expanded", !isOpen);
		dropdown.classList.toggle("open");
	});

	// Cerrar el menú si se hace clic en cualquier parte fuera de él
	document.addEventListener("click", (event) => {
		if (!dropdown.contains(event.target)) {
			dropdownTrigger.setAttribute("aria-expanded", "false");
			dropdown.classList.remove("open");
		}
	});
}

