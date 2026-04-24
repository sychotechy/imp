const filterButtons = document.querySelectorAll(".filter-button");
const moduleSections = document.querySelectorAll(".module-section");
const moduleHeaders = document.querySelectorAll(".module-header");
const expandAllButton = document.querySelector("#expandAll");
const collapseAllButton = document.querySelector("#collapseAll");
const mobileQuery = window.matchMedia("(max-width: 720px)");

function setModuleOpen(header, isOpen) {
  const body = header.nextElementSibling;
  header.classList.toggle("open", isOpen);
  body.classList.toggle("open", isOpen);
  header.setAttribute("aria-expanded", String(isOpen));
}

function openVisibleModules() {
  moduleSections.forEach((section) => {
    if (!section.hidden) {
      setModuleOpen(section.querySelector(".module-header"), true);
    }
  });
}

function collapseVisibleModules() {
  moduleSections.forEach((section) => {
    if (!section.hidden) {
      setModuleOpen(section.querySelector(".module-header"), false);
    }
  });
}

function applyMobileStartState() {
  if (!mobileQuery.matches) {
    openVisibleModules();
    return;
  }

  moduleSections.forEach((section) => {
    const shouldOpen = section.dataset.mod === "m3";
    setModuleOpen(section.querySelector(".module-header"), shouldOpen);
  });
}

moduleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const isOpen = header.getAttribute("aria-expanded") === "true";
    setModuleOpen(header, !isOpen);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    moduleSections.forEach((section) => {
      section.hidden = filter !== "all" && section.dataset.mod !== filter;
    });

    if (filter === "all") {
      applyMobileStartState();
      return;
    }

    const selected = document.querySelector(`.module-section[data-mod="${filter}"]`);
    if (selected) {
      setModuleOpen(selected.querySelector(".module-header"), true);
      selected.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

expandAllButton.addEventListener("click", openVisibleModules);
collapseAllButton.addEventListener("click", collapseVisibleModules);
mobileQuery.addEventListener("change", applyMobileStartState);
applyMobileStartState();
