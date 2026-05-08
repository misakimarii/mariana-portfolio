const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");

let currentLang = "pt";

function updateThemeButton() {
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = currentLang === "pt" ? "Modo claro" : "Light mode";
  } else {
    themeBtn.textContent = currentLang === "pt" ? "Modo escuro" : "Dark mode";
  }
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);

  updateThemeButton();
});

langBtn.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-pt]");

  if (currentLang === "pt") {
    elements.forEach((item) => {
      item.textContent = item.getAttribute("data-en");
    });

    currentLang = "en";
    langBtn.textContent = "Português";
  } else {
    elements.forEach((item) => {
      item.textContent = item.getAttribute("data-pt");
    });

    currentLang = "pt";
    langBtn.textContent = "English";
  }

  updateThemeButton();
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  updateThemeButton();
});

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    event.preventDefault();

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});