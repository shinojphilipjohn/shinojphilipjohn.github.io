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

(function () {
  const tabs = document.querySelectorAll(".dashboard-tab");
  const panels = document.querySelectorAll(".dashboard-panel");

  if (!tabs.length) return;

  function activateTab(target) {
    tabs.forEach((tab) => {
      const isActive = tab.getAttribute("data-tab") === target;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      const isActive = panel.id === "panel-" + target;
      panel.classList.toggle("active", isActive);

      if (isActive) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "hidden");
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      activateTab(this.getAttribute("data-tab"));
    });
  });

  function injectTableauViz(containerId, height) {
    const divElement = document.getElementById(containerId);
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName("object")[0];
    if (!vizElement) return;

    vizElement.style.width = "100%";
    vizElement.style.height = height;

    if (!divElement.dataset.loaded) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
      divElement.dataset.loaded = "true";
    }
  }

  injectTableauViz("viz_tour_de_france", "950px");
  injectTableauViz("viz_vic_crash", "950px");
  injectTableauViz("viz_grad_employability", "850px");

  activateTab("tour");
})();
