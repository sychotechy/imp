const modules = [
  {
    id: "m1",
    label: "Module 1",
    title: "Introduction to Client/Server Computing",
    badge: "badge-m1",
    color: "#c4b5fd",
    score: "72%",
    meta: ["8 quests", "2 high-repeat"],
    topics: [
      ["Part B", "Key factors/driving forces behind C/S development", "Perspectives: technical, organizational, economic - 10-mark question.", 3],
      ["Part B", "Security threats to C/S networks and mitigation", "Threats plus measures - Papers 1, 2, 4.", 3],
      ["Part B", "Organizational expectations on C/S technology", "Papers 2, 3 - Part B 10-mark.", 2],
      ["Part B", "System Integration Life-Cycle and development phases", "Papers 1, 4 - Part B 10-mark.", 2],
      ["Part B", "C/S system development tools", "Papers 2, 3 - Part B 4-mark.", 2],
      ["Part A", "Advantages of C/S computing", "Papers 1, 4.", 2],
      ["Part A", "C/S computing vs mainframe computing", "Papers 3, 4.", 2],
      ["Part A", "Stateful vs stateless servers", "Papers 2, 3.", 2]
    ]
  },
  {
    id: "m2",
    label: "Module 2",
    title: "C/S Architecture and Topologies",
    badge: "badge-m2",
    color: "#93c5fd",
    score: "78%",
    meta: ["7 quests", "5 high-repeat"],
    topics: [
      ["Part B", "Business Information System architecture and distribution patterns", "Papers 1, 3, 4 - 10-mark with diagram.", 3],
      ["Part B", "Two-tier vs three-tier C/S architecture", "Papers 2, 3, 4 - advantages, disadvantages, comparison.", 3],
      ["Part B", "Types of C/S architecture-based environments", "Papers 1, 2, 3 - three environment types.", 3],
      ["Part B", "Role of Middleware in C/S architecture", "Papers 1, 3 Part B plus Paper 4 Part A.", 3],
      ["Part B", "Basic/foundational principles of C/S systems", "Papers 2, 4 - Part B 4-mark.", 2],
      ["Part A", "MVC (Model View Controller) architecture", "Part A: Papers 1, 2. Part B: Paper 4.", 3],
      ["Part A", "C/S topologies", "Part A: Paper 3. Part B: Paper 2 with sketch.", 2]
    ]
  },
  {
    id: "m3",
    label: "Module 3",
    title: "Services, CORBA and Network OS",
    badge: "badge-m3",
    color: "#86efac",
    score: "96%",
    meta: ["7 quests", "3 boss-level"],
    topics: [
      ["Part B", "CORBA - cross-network platform and architecture", "Part B of all 4 papers - 8 to 10 marks.", 4],
      ["Part B", "Network Operating System - features and types", "Part B of all 4 papers - 4 to 6 marks.", 4],
      ["Part B", "Services provided by clients", "Papers 2, 3 Part B plus Papers 1, 3 Part A.", 4],
      ["Part B", "Server OS - features and types", "Papers 2, 3 Part B plus Paper 4 Part A.", 3],
      ["Part B", "DDE, OLE, Remote Procedure Call", "Papers 1, 4 Part B - 10-mark with examples.", 2],
      ["Part B", "Server functionality and services provided by server", "Papers 1, 4 - Part B 4-mark.", 2],
      ["Part A", "Services in a C/S system (server-side)", "Papers 1, 3.", 2]
    ]
  },
  {
    id: "m4",
    label: "Module 4",
    title: "Network Management and IPC",
    badge: "badge-m4",
    color: "#fcd34d",
    score: "82%",
    meta: ["7 quests", "3 boss-level"],
    topics: [
      ["Part B", "Availability, Reliability, Scalability, Serviceability, Agility", "All 4 papers - Part A (Papers 3, 4) plus Part B (Papers 1, 2).", 4],
      ["Part B", "X-terminals / X-Server - functions and services", "Part A: Papers 1, 2, 3. Part B: Paper 3.", 4],
      ["Part B", "Basic Inter-Process Communication (IPC) mechanism", "Papers 1, 2 Part B plus Paper 4 Part A.", 3],
      ["Part B", "Communication Interface Technology in C/S", "Papers 3, 4 Part B - 10-mark.", 2],
      ["Part B", "RPC vs ordinary procedure call", "Paper 1 Part B - 6-mark.", 1],
      ["Part A", "Telnet, RDP, SSH", "Paper 3 Part B - 10-mark.", 1],
      ["Part A", "Token ring, FDDI, SNMP", "Paper 2 Part B - 9-mark.", 1]
    ]
  },
  {
    id: "m5",
    label: "Module 5",
    title: "Web, Emerging Technologies and Future",
    badge: "badge-m5",
    color: "#f9a8d4",
    score: "68%",
    meta: ["9 quests", "7 important"],
    topics: [
      ["Part B", "Enabling technologies - Expert System, Imaging, EDM", "Papers 1, 3 - Part B 8 to 10-mark.", 2],
      ["Part B", "Database access on the Web", "Papers 2, 4 - Part B 4 to 8-mark.", 2],
      ["Part B", "First and second generation web applications", "Papers 2, 3 Part B plus Paper 3 Part A.", 3],
      ["Part B", "Java for client/server on the web", "Paper 1 Part B plus Paper 4 Part A.", 2],
      ["Part B", "API gateway", "Paper 1 Part B (6-mark) plus Paper 4 Part A.", 2],
      ["Part B", "Service mesh and advantages", "Paper 2 Part B plus Paper 3 Part A.", 2],
      ["Part B", "Electronic Data Interchange (EDI)", "Paper 2 Part A plus Paper 4 Part B.", 2],
      ["Part B", "Microservices and benefits", "Paper 2 - 6-mark.", 1],
      ["Part B", "Future of C/S - POS, Full Text Retrieval, GIS", "Paper 4 - 10-mark.", 1]
    ]
  }
];

const bossTopics = [
  ["m3", "CORBA", "Asked in Part B of every single paper.", 4],
  ["m3", "Network Operating System", "Asked in Part B of every single paper.", 4],
  ["m1", "Key factors behind C/S development", "Papers 1, 3, 4 - Part B 10-mark question.", 3],
  ["m1", "Security threats and measures", "Papers 1, 2, 4 - Part B question.", 3],
  ["m2", "Business Information System architecture", "Papers 1, 3, 4 - Part B 10-mark question.", 3],
  ["m2", "Two-tier and Three-tier architecture", "Papers 2, 3, 4 - Part B question.", 3],
  ["m2", "MVC architecture", "Part A: Papers 1, 2. Part B: Paper 4.", 3],
  ["m4", "Availability, Reliability, Scalability, Agility", "All 4 papers - Part A and Part B.", 3]
];

const bossGrid = document.querySelector("#bossGrid");
const moduleList = document.querySelector("#moduleList");
const filterButtons = document.querySelectorAll(".filter-button");
const searchInput = document.querySelector("#topicSearch");
const bossOnlyButton = document.querySelector("#bossOnly");
const expandAllButton = document.querySelector("#expandAll");
const collapseAllButton = document.querySelector("#collapseAll");
const emptyState = document.querySelector("#emptyState");
const mobileQuery = window.matchMedia("(max-width: 720px)");

let activeFilter = "all";
let bossOnly = false;

function level(count) {
  if (count === 4) return { key: "must", label: "Boss", width: "100%" };
  if (count === 3) return { key: "likely", label: "Elite", width: "75%" };
  if (count === 2) return { key: "important", label: "Core", width: "50%" };
  return { key: "possible", label: "Bonus", width: "25%" };
}

function byModule(id) {
  return modules.find((module) => module.id === id);
}

function renderBossCards() {
  bossGrid.innerHTML = bossTopics.map(([moduleId, title, detail, count]) => {
    const module = byModule(moduleId);
    const rank = level(count);

    return `
      <article class="boss-card ${rank.key}">
        <div>
          <span class="module-badge ${module.badge}">${module.label}</span>
          <h3>${title}</h3>
          <p>${detail}</p>
        </div>
        <div class="boss-rank">${count}&times;</div>
      </article>
    `;
  }).join("");
}

function renderModules() {
  moduleList.innerHTML = modules.map((module) => {
    const groups = module.topics.reduce((result, topic) => {
      const part = topic[0];
      result[part] = result[part] || [];
      result[part].push(topic);
      return result;
    }, {});

    const groupMarkup = Object.entries(groups).map(([part, topics]) => `
      <div class="quest-group">
        <p class="quest-label">${part}</p>
        ${topics.map((topic) => renderTopic(topic)).join("")}
      </div>
    `).join("");

    return `
      <article class="module-card ${module.id === "m3" ? "open" : ""}" data-module="${module.id}" style="--module-color:${module.color};--module-score:${module.score};">
        <button class="module-header" type="button" aria-expanded="${module.id === "m3"}">
          <div>
            <div class="module-title-row">
              <span class="module-badge ${module.badge}">${module.label}</span>
              <h3>${module.title}</h3>
            </div>
            <div class="module-meta">
              ${module.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div class="module-score" aria-label="${module.score} priority score"><span>${module.score}</span></div>
        </button>
        <div class="module-body">
          ${groupMarkup}
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".module-header").forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".module-card");
      const isOpen = card.classList.toggle("open");
      header.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderTopic([part, title, detail, count]) {
  const rank = level(count);

  return `
    <article class="topic-card ${rank.key}" data-search="${`${part} ${title} ${detail}`.toLowerCase()}">
      <div class="topic-copy">
        <h4>${title}</h4>
        <p>${detail}</p>
      </div>
      <strong class="topic-count">${count}&times;</strong>
      <div class="topic-meter" style="--value:${rank.width};"><span></span></div>
      <div class="topic-meta">
        <span class="level-badge">${rank.label}</span>
        <span class="part-badge">${part}</span>
      </div>
    </article>
  `;
}

function setModuleOpen(card, isOpen) {
  card.classList.toggle("open", isOpen);
  card.querySelector(".module-header").setAttribute("aria-expanded", String(isOpen));
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleModules = 0;

  document.body.classList.toggle("searching", query.length > 0);
  document.body.classList.toggle("boss-mode", bossOnly);

  document.querySelectorAll(".module-card").forEach((card) => {
    const moduleMatches = activeFilter === "all" || card.dataset.module === activeFilter;
    let hasTopicMatch = false;

    card.querySelectorAll(".topic-card").forEach((topic) => {
      const textMatches = query === "" || topic.dataset.search.includes(query);
      const levelMatches = !bossOnly || topic.classList.contains("must") || topic.classList.contains("likely");
      const isVisible = moduleMatches && textMatches && levelMatches;

      topic.hidden = !isVisible;
      hasTopicMatch = hasTopicMatch || isVisible;
    });

    card.querySelectorAll(".quest-group").forEach((group) => {
      group.hidden = !group.querySelector(".topic-card:not([hidden])");
    });

    card.hidden = !moduleMatches || !hasTopicMatch;
    card.classList.toggle("has-match", hasTopicMatch);

    if (!card.hidden) {
      visibleModules += 1;
      if (query || bossOnly || activeFilter !== "all") {
        setModuleOpen(card, true);
      }
    }
  });

  emptyState.hidden = visibleModules > 0;
}

function setDefaultOpenState() {
  document.querySelectorAll(".module-card").forEach((card) => {
    setModuleOpen(card, !mobileQuery.matches || card.dataset.module === "m3");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

bossOnlyButton.addEventListener("click", () => {
  bossOnly = !bossOnly;
  bossOnlyButton.setAttribute("aria-pressed", String(bossOnly));
  applyFilters();
});

expandAllButton.addEventListener("click", () => {
  document.querySelectorAll(".module-card:not([hidden])").forEach((card) => setModuleOpen(card, true));
});

collapseAllButton.addEventListener("click", () => {
  document.querySelectorAll(".module-card:not([hidden])").forEach((card) => setModuleOpen(card, false));
});

mobileQuery.addEventListener("change", () => {
  if (!searchInput.value && activeFilter === "all" && !bossOnly) {
    setDefaultOpenState();
  }
  updateMobileNav();
});

function updateMobileNav() {
  document.body.classList.toggle("show-mobile-nav", mobileQuery.matches && window.scrollY > 340);
}

window.addEventListener("scroll", updateMobileNav, { passive: true });

renderBossCards();
renderModules();
setDefaultOpenState();
applyFilters();
updateMobileNav();
