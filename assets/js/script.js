(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  // Default theme = light
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    root.setAttribute("data-theme", "light");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
})();
