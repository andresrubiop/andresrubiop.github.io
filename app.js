"use strict";
(() => {
  const supported = ["en", "es"];
  let language = "en";
  let activeFilter = "all";
  const cards = [...document.querySelectorAll(".project")];
  const languageButtons = [...document.querySelectorAll("[data-lang]")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const count = document.getElementById("project-count");

  function updateCount() {
    const n = cards.filter(card => !card.hidden).length;
    count.textContent = language === "es" ? `${n} proyectos` : `${n} projects`;
  }

  function setLanguage(next) {
    language = supported.includes(next) ? next : "en";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-en][data-es]").forEach(el => {
      el.textContent = el.dataset[language];
    });
    document.querySelectorAll("[data-en-label]").forEach(el => {
      el.setAttribute("aria-label", el.getAttribute(`data-${language}-label`));
    });
    document.querySelectorAll("[data-en-alt]").forEach(el => {
      el.alt = el.getAttribute(`data-${language}-alt`);
    });
    languageButtons.forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === language));
    });
    document.title = language === "es"
      ? "Andrés Rubio Proaño — Ingeniería HPC e IA"
      : "Andrés Rubio Proaño — HPC & AI Engineer";
    document.querySelector('meta[name="description"]').content = language === "es"
      ? "Ingeniería de rendimiento HPC e IA por Andrés Rubio Proaño. Proyectos abiertos de inferencia GPU, agentes locales, reconocimiento de señas y optimización."
      : "HPC and AI performance engineering by Andrés Rubio Proaño. Explore open-source work in GPU inference, local AI agents, sign recognition and constraint optimization.";
    updateCount();
  }

  filterButtons.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    cards.forEach(card => {
      card.hidden = activeFilter !== "all" && !card.dataset.category.split(" ").includes(activeFilter);
    });
    filterButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    updateCount();
  }));

  languageButtons.forEach(button => button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    try { localStorage.setItem("ar-portfolio-language", language); } catch { /* Optional preference. */ }
  }));

  let saved = "";
  try { saved = localStorage.getItem("ar-portfolio-language") || ""; } catch { /* Storage can be disabled. */ }
  const requested = new URLSearchParams(location.search).get("lang");
  setLanguage(supported.includes(requested) ? requested : supported.includes(saved) ? saved : navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
