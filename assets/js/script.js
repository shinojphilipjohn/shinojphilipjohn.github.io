(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
})();
