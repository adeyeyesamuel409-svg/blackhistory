/* ==========================================================================
   UNBROKEN — Shared site behaviour
   - icon init, mobile nav, active link, scroll progress, reveal-on-scroll
   - analytics loader (no-op until a token is set), share helper
   ========================================================================== */
(function () {
  "use strict";

  const onReady = (fn) =>
    document.readyState !== "loading"
      ? fn()
      : document.addEventListener("DOMContentLoaded", fn);

  onReady(function () {
    initIcons();
    initNav();
    initActiveLink();
    initScrollProgress();
    initReveal();
    initShare();
    initYear();
    initAnalytics();
  });

  /* ---- Icons (Lucide) ---------------------------------------------------- */
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* ---- Mobile navigation ------------------------------------------------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Highlight the current page in the nav ----------------------------- */
  function initActiveLink() {
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a").forEach((a) => {
      const target = (a.getAttribute("href") || "").split("#")[0].split("/").pop().toLowerCase();
      if (target && target === here) a.setAttribute("aria-current", "page");
    });
  }

  /* ---- Scroll progress bar ---------------------------------------------- */
  function initScrollProgress() {
    const bar = document.querySelector(".scroll-progress");
    if (!bar) return;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---- Reveal on scroll -------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---- Share helper (Web Share API with clipboard fallback) -------------- */
  function initShare() {
    document.querySelectorAll("[data-share]").forEach((btn) => {
      btn.addEventListener("click", async function (e) {
        if (btn.tagName === "A") e.preventDefault();
        const title = btn.getAttribute("data-share-title") || document.title;
        const text = btn.getAttribute("data-share-text") || "";
        const url = btn.getAttribute("data-share-url") || location.href;
        try {
          if (navigator.share) {
            await navigator.share({ title, text, url });
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(url);
            flash(btn, "Link copied");
          } else {
            flash(btn, url);
          }
        } catch (_) {
          /* user cancelled — no-op */
        }
      });
    });
  }

  function flash(el, msg) {
    const original = el.getAttribute("data-label") || el.textContent;
    el.setAttribute("data-label", original);
    el.textContent = msg;
    setTimeout(() => (el.textContent = original), 1600);
  }

  /* ---- Footer year ------------------------------------------------------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---- Analytics (Cloudflare Web Analytics) ------------------------------ */
  /* Set the token in <meta name="cf-beacon-token" content="...">   */
  /* Leave it empty until the site is deployed; script is skipped.  */
  function initAnalytics() {
    const meta = document.querySelector('meta[name="cf-beacon-token"]');
    const token = meta && meta.getAttribute("content");
    if (!token) return;
    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: token }));
    document.body.appendChild(s);
  }

  /* Expose a tiny helper for other scripts */
  window.UNBROKEN = window.UNBROKEN || {};
  window.UNBROKEN.share = (detail) => {
    if (navigator.share) return navigator.share(detail);
    if (navigator.clipboard) return navigator.clipboard.writeText(detail.url || location.href);
  };
})();
