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
    initImages();
    initLightbox();
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

  /* ---- Images (build plates from the manifest) -------------------------- */
  function imgPath(d, w) { return "assets/img/" + d.dir + "/" + d.dir + "-" + w + "." + d.ext; }
  function srcsetFor(d) {
    return d.widths.map((w) => imgPath(d, w) + " " + w + "w").join(", ");
  }

  function initImages() {
    const M = window.UnbrokenImages;
    if (!M) return;
    document.querySelectorAll("[data-image]").forEach(function (el) {
      const d = M[el.getAttribute("data-image")];
      if (!d) return;
      const srcset = srcsetFor(d);
      const smallest = imgPath(d, d.widths[0]);

      if (el.tagName === "IMG") {
        el.setAttribute("src", smallest);
        el.setAttribute("srcset", srcset);
        if (!el.getAttribute("sizes")) el.setAttribute("sizes", "(max-width:640px) 92vw, 420px");
        el.setAttribute("alt", d.alt);
        el.setAttribute("loading", "lazy");
        el.setAttribute("decoding", "async");
        return;
      }

      const media = document.createElement("button");
      media.type = "button";
      media.className = "plate-media";
      media.setAttribute("data-zoom", el.getAttribute("data-image"));
      media.setAttribute("aria-label", "Enlarge image: " + d.alt);
      const img = document.createElement("img");
      img.setAttribute("src", smallest);
      img.setAttribute("srcset", srcset);
      img.setAttribute("sizes", "(max-width:640px) 92vw, 560px");
      img.setAttribute("alt", d.alt);
      img.setAttribute("loading", "lazy");
      img.setAttribute("decoding", "async");
      media.appendChild(img);

      const cap = document.createElement("figcaption");
      cap.innerHTML =
        (d.title ? '<span class="plate-title">' + d.title + "</span>" : "") +
        '<span class="small dim">' + d.caption + "</span>" +
        '<span class="plate-credit">' + d.credit +
        (d.license ? ' <span class="license-chip">' + d.license + "</span>" : "") +
        (d.source ? ' <a href="' + d.source + '" target="_blank" rel="noopener">source</a>' : "") +
        "</span>";

      el.appendChild(media);
      el.appendChild(cap);
    });
  }

  /* ---- Lightbox for plate images ---------------------------------------- */
  function initLightbox() {
    if (!document.querySelector("[data-zoom]")) return;
    const M = window.UnbrokenImages || {};
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-hidden", "true");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Close image viewer">\u2715</button>' +
      '<img alt="" /><figcaption></figcaption>';
    document.body.appendChild(lb);
    const img = lb.querySelector("img");
    const cap = lb.querySelector("figcaption");

    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    function open(id) {
      const d = M[id];
      if (!d) return;
      img.setAttribute("src", imgPath(d, d.widths[d.widths.length - 1]));
      img.setAttribute("alt", d.alt);
      cap.innerHTML =
        "<strong>" + d.title + "</strong> \u2014 " + d.caption + "<br>" + d.credit +
        (d.license ? " \u00b7 " + d.license : "") +
        (d.source ? ' \u00b7 <a href="' + d.source + '" target="_blank" rel="noopener">Wikimedia Commons</a>' : "");
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    document.querySelectorAll("[data-zoom]").forEach(function (b) {
      b.addEventListener("click", function () { open(b.getAttribute("data-zoom")); });
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lightbox-close")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb.classList.contains("open")) close();
    });
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
