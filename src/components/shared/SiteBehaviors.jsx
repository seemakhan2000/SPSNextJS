"use client";

import { useEffect } from "react";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true" || existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function maxSlidesPerView(options = {}) {
  const values = [options.slidesPerView];
  if (options.breakpoints) {
    Object.values(options.breakpoints).forEach((bp) => values.push(bp.slidesPerView));
  }
  let max = 1;
  for (const value of values) {
    if (typeof value === "number" && value > max) max = value;
  }
  return max;
}

function withSafeLoop(el, options = {}) {
  const next = { ...options };
  if (!next.loop || !el) return next;
  const count = el.querySelectorAll(".swiper-slide").length;
  const needed = Math.ceil(maxSlidesPerView(next)) * 2;
  if (count < needed) next.loop = false;
  return next;
}

let swiperLoopWarnPatched = false;

function silenceSwiperLoopWarning() {
  if (typeof console === "undefined" || swiperLoopWarnPatched) return;
  const original = console.warn.bind(console);
  console.warn = (...args) => {
    const first = args[0];
    if (typeof first === "string" && first.includes("Swiper Loop Warning")) return;
    original(...args);
  };
  swiperLoopWarnPatched = true;
}

function patchSwiperLoopSafety() {
  const Original = window.Swiper;
  if (!Original || Original.__spsLoopSafe) return;

  function SafeSwiper(el, options = {}) {
    const node = typeof el === "string" ? document.querySelector(el) : el;
    if (!node) return null;
    return new Original(node, withSafeLoop(node, options || {}));
  }

  SafeSwiper.prototype = Original.prototype;
  Object.setPrototypeOf(SafeSwiper, Original);
  SafeSwiper.__spsLoopSafe = true;
  window.Swiper = SafeSwiper;
}

function initSiteFilters() {
  function onClick(event) {
    const tab = event.target.closest(".site-filters [data-filter]");
    if (!tab) return;
    event.preventDefault();

    const filters = tab.closest(".site-filters");
    const section = filters?.closest("section") || filters?.parentElement;
    const grid =
      section?.querySelector("[data-product-filter-grid]") ||
      document.querySelector("[data-product-filter-grid]");
    if (!filters || !grid) return;

    filters.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    const filter = tab.getAttribute("data-filter") || "*";
    const className = filter.replace(/^\./, "");
    grid.querySelectorAll(".card-container").forEach((item) => {
      const show = filter === "*" || item.classList.contains(className);
      item.style.display = show ? "" : "none";
    });
  }

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}

function updateVisibleServiceSwipers() {
  document.querySelectorAll(".tab-content.active .service-swiper").forEach((el) => {
    if (el.swiper) {
      el.swiper.update();
      if (el.swiper.params.loop) el.swiper.slideToLoop?.(0, 0);
      else el.swiper.slideTo(0, 0);
    }
  });
}

function initBoxHover() {
  const wrappers = document.querySelectorAll(".box-hover-wrapper");
  if (!wrappers.length) return () => {};

  const onOver = (event) => {
    const wrapper = event.currentTarget;
    const card = event.target.closest(".box-hover");
    if (!card || !wrapper.contains(card)) return;
    wrapper.querySelectorAll(".box-hover.active").forEach((el) => el.classList.remove("active"));
    card.classList.add("active");
  };

  wrappers.forEach((wrapper) => wrapper.addEventListener("mouseover", onOver));
  return () => {
    wrappers.forEach((wrapper) => wrapper.removeEventListener("mouseover", onOver));
  };
}

function initTabs() {
  const tabs = document.querySelectorAll(".custom-tab");
  if (!tabs.length) return () => {};

  const listeners = [];
  tabs.forEach((tab) => {
    const titles = tab.querySelectorAll(".tab-title");
    const contents = tab.querySelectorAll(".tab-content");
    titles[0]?.classList.add("active");
    contents[0]?.classList.add("active");

    const onClick = (event) => {
      const title = event.target.closest(".tab-title");
      if (!title || !tab.contains(title)) return;
      titles.forEach((item, index) => {
        const on = item === title;
        item.classList.toggle("active", on);
        contents[index]?.classList.toggle("active", on);
      });
      requestAnimationFrame(() => {
        updateVisibleServiceSwipers();
        window.setTimeout(updateVisibleServiceSwipers, 60);
      });
    };

    tab.addEventListener("click", onClick);
    listeners.push(() => tab.removeEventListener("click", onClick));
  });

  return () => listeners.forEach((fn) => fn());
}

function initAppointmentModal() {
  const modal = document.getElementById("appointmentModal");

  function openModal(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (!modal) return;
    modal.classList.add("active");
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }

  window.toggleAppointmentModal = function (e) {
    if (modal?.classList.contains("active")) closeModal();
    else openModal(e);
  };
  window.closeModal = closeModal;

  function onClick(e) {
    const openBtn = e.target.closest("[data-open-appointment]");
    if (openBtn) {
      e.preventDefault();
      openModal(e);
      return;
    }

    const closeBtn = e.target.closest("[data-close-appointment]");
    if (closeBtn && !e.target.closest("[data-appointment-card]")) {
      closeModal();
      return;
    }
    if (closeBtn && e.target.closest("[data-appointment-card]")) {
      const isInnerClose =
        closeBtn.tagName === "BUTTON" || closeBtn.getAttribute("type") === "button";
      if (isInnerClose && closeBtn !== modal) {
        closeModal();
      }
    }
  }

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}

function initReadMore() {
  function onClick(e) {
    const btn = e.target.closest(".read-more-btn");
    if (!btn) return;
    const p = btn.previousElementSibling;
    if (!p) return;
    p.classList.toggle("expanded");
    btn.textContent = p.classList.contains("expanded") ? "Read Less" : "Read More";
  }
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}

function initOffcanvas() {
  const drawer = document.getElementById("offcanvas-right");
  let backdrop = document.getElementById("offcanvas-backdrop");
  if (!drawer) return () => {};

  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "offcanvas-backdrop";
    document.body.appendChild(backdrop);
  }

  function isOpen() {
    return drawer.classList.contains("is-open");
  }

  function setExpanded(open) {
    document
      .querySelectorAll(
        '#infoDrawerBtn, [data-drawer="#offcanvas-right"], [data-drawer-target="offcanvas-right"]',
      )
      .forEach((el) => {
        const btn = el.matches("button") ? el : el.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.classList.remove("translate-x-full");
    drawer.style.setProperty("translate", "0", "important");
    backdrop.classList.add("is-open");
    backdrop.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    setExpanded(true);
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.classList.add("translate-x-full");
    drawer.style.removeProperty("translate");
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("hidden", "");
    document.body.style.overflow = "";
    setExpanded(false);
  }

  function isInfoDrawerTrigger(el) {
    if (!el) return false;
    if (el.id === "infoDrawerBtn") return true;
    const target =
      el.getAttribute("data-drawer") ||
      (el.getAttribute("data-drawer-target")
        ? "#" + el.getAttribute("data-drawer-target")
        : "");
    return target === "#offcanvas-right";
  }

  function onClick(e) {
    const trigger = e.target.closest(
      "#infoDrawerBtn, [data-drawer], [data-drawer-target]",
    );
    if (isInfoDrawerTrigger(trigger)) {
      e.preventDefault();
      e.stopPropagation();
      if (isOpen()) closeDrawer();
      else openDrawer();
      return;
    }
    if (e.target.closest('[data-drawer-hide="offcanvas-right"]')) {
      e.preventDefault();
      closeDrawer();
    }
  }

  function onKey(e) {
    if (e.key === "Escape" && isOpen()) closeDrawer();
  }

  document.addEventListener("click", onClick);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", onKey);

  return () => {
    document.removeEventListener("click", onClick);
    backdrop.removeEventListener("click", closeDrawer);
    document.removeEventListener("keydown", onKey);
  };
}

function whenIdle(fn, timeout = 2500) {
  if (typeof window === "undefined") return;
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(fn, { timeout });
    return;
  }
  window.setTimeout(fn, 1);
}

function afterFirstPaint(fn) {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn);
  });
}

export default function SiteBehaviors() {
  useEffect(() => {
    const cleanups = [
      initAppointmentModal(),
      initReadMore(),
      initOffcanvas(),
      initBoxHover(),
      initTabs(),
      initSiteFilters(),
    ];

    let cancelled = false;

    const loadLegacy = async () => {
      if (cancelled) return;
      await loadScript("/assets/js/custom.min.js");
      if (document.querySelector(".dzForm, form.dzForm")) {
        await loadScript("/assets/js/dz.ajax.js");
      }
      if (cancelled) return;
      if (window.ClinicMaster?.init && !window.__spsClinicMasterBooted) {
        window.__spsClinicMasterBooted = true;
        window.ClinicMaster.init();
      }
    };

    const loadSwiper = async () => {
      if (cancelled || !document.querySelector(".swiper")) return;
      await loadScript("/assets/vendor/swiper/swiper-bundle.min.js");
      if (cancelled) return;
      silenceSwiperLoopWarning();
      patchSwiperLoopSafety();
      updateVisibleServiceSwipers();
      requestAnimationFrame(() => {
        updateVisibleServiceSwipers();
        window.setTimeout(updateVisibleServiceSwipers, 80);
      });
    };

    afterFirstPaint(() => {
      if (cancelled) return;
      loadScript("/assets/js/navbar-v2.js").catch((error) => {
        console.error("Failed to initialize navbar script", error);
      });

      const startDeferredWork = () => {
        if (cancelled) return;
        whenIdle(() => {
          loadSwiper().catch((error) => {
            console.error("Failed to initialize carousel scripts", error);
          });
        }, 4000);
        whenIdle(() => {
          loadLegacy().catch((error) => {
            console.error("Failed to initialize homepage scripts", error);
          });
        }, 8000);
      };

      if (document.readyState === "complete") startDeferredWork();
      else window.addEventListener("load", startDeferredWork, { once: true });
    });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  return null;
}
