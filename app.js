"use strict";
(() => {
  // The destination is fixed; URL parameters cannot change its origin.
  const destination = new URL("https://www.andresrubiop.com/");
  const language = new URLSearchParams(window.location.search).get("lang");
  if (["es", "en", "fr", "ca", "ja"].includes(language)) {
    destination.searchParams.set("lang", language);
  }
  const sections = {
    "#home": "#home", "#work": "#portfolio", "#portfolio": "#portfolio",
    "#about": "#expertise", "#expertise": "#expertise",
    "#teaching": "#portfolio", "#experience": "#experience",
    "#research": "#research", "#education": "#education", "#contact": "#contact"
  };
  destination.hash = sections[window.location.hash] || "";
  window.location.replace(destination.href);
})();
