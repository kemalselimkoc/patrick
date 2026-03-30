// ===== AUTH =====
function requireAuth() {
  if (sessionStorage.getItem("mt_auth") !== "1") {
    window.location.href = "index.html";
  }
}

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  sessionStorage.removeItem("mt_auth");
  window.location.href = "index.html";
});

// ===== HAMBURGER =====
document.getElementById("hamburger")?.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// ===== LANGUAGE =====
function getLang() { return localStorage.getItem("mt_lang") || "tr"; }
function setLang(l) { localStorage.setItem("mt_lang", l); location.reload(); }

function initLang() {
  const lang = getLang();
  const btn = document.getElementById("langToggle");
  if (btn) { btn.textContent = lang === "tr" ? "EN" : "TR"; btn.onclick = () => setLang(lang === "tr" ? "en" : "tr"); }
  document.querySelectorAll("[data-tr]").forEach(el => {
    if (el.dataset[lang]) el.textContent = el.dataset[lang];
  });
}

// ===== STREAK =====
function initStreak() {
  const badge = document.getElementById("streakBadge");
  const countEl = document.getElementById("streakCount");
  if (!badge || !countEl) return;
  const streak = parseInt(localStorage.getItem("mt_streak") || "0");
  countEl.textContent = streak;
}

function updateStreak() {
  const lastDate = localStorage.getItem("mt_streak_date");
  const today = new Date().toDateString();
  if (lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  let streak = parseInt(localStorage.getItem("mt_streak") || "0");
  streak = (lastDate === yesterday) ? streak + 1 : 1;
  localStorage.setItem("mt_streak", streak);
  localStorage.setItem("mt_streak_date", today);
  const el = document.getElementById("streakCount");
  if (el) el.textContent = streak;
}

// ===== PROGRESS =====
function getProgress() { return JSON.parse(localStorage.getItem("mt_progress") || "{}"); }
function saveProgress(p) { localStorage.setItem("mt_progress", JSON.stringify(p)); }

function isLessonDone(id) { return localStorage.getItem("mt_lesson_" + id) === "1"; }
function markLessonDone(id) { localStorage.setItem("mt_lesson_" + id, "1"); }

function updateCategoryProgress(category) {
  if (!category) return;
  const total = (typeof MODULES !== 'undefined') ? MODULES.filter(m => m.category === category).length : 0;
  if (total === 0) return;
  const done = (typeof MODULES !== 'undefined') ? MODULES.filter(m => m.category === category && isLessonDone(m.id)).length : 0;
  const pct = Math.round((done / total) * 100);
  const p = getProgress();
  p[category] = pct;
  saveProgress(p);
}
