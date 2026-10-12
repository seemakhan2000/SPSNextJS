(function () {
  "use strict";

  var root = document.getElementById("navbarV2");
  if (!root) return;

  var nav = root.querySelector(".navbar-v2__nav");
  var toggle = root.querySelector(".navbar-v2__toggle");
  var overlay = document.getElementById("navbarV2Overlay");
  var items = Array.prototype.slice.call(root.querySelectorAll(".navbar-v2__item[data-nv2-dropdown]"));
  var submenus = Array.prototype.slice.call(root.querySelectorAll(".navbar-v2__submenu"));
  var drawer = document.getElementById("navbarV2Drawer");
  var drawerBtns = document.querySelectorAll("[data-nv2-drawer]");
  var drawerCloses = document.querySelectorAll("[data-nv2-drawer-close]");
  var hoverTimer = null;
  var DESKTOP_MQ = "(min-width: 1201px) and (hover: hover) and (pointer: fine)";

  function isDesktop() {
    return window.matchMedia(DESKTOP_MQ).matches;
  }

  function lockBody(lock) {
    document.documentElement.classList.toggle("navbar-v2-lock", !!lock);
  }

  function closeAllItems() {
    items.forEach(function (item) {
      item.classList.remove("is-open");
      var trigger = item.querySelector(".navbar-v2__link, .navbar-v2__caret-btn");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
    submenus.forEach(function (sub) {
      sub.classList.remove("is-open");
    });
    root.classList.remove("has-dropdown");
  }

  function openItem(item) {
    items.forEach(function (other) {
      if (other !== item) {
        other.classList.remove("is-open");
        var otherTrigger = other.querySelector(".navbar-v2__link, .navbar-v2__caret-btn");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      }
    });
    item.classList.add("is-open");
    var trigger = item.querySelector(".navbar-v2__link, .navbar-v2__caret-btn");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    root.classList.add("has-dropdown");
  }

  function setMenuOpen(open) {
    root.classList.toggle("is-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    }
    if (overlay) overlay.classList.toggle("is-active", open);
    if (!open) closeAllItems();
    lockBody(open || (drawer && drawer.classList.contains("is-open")));
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    drawerBtns.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
    if (overlay && !root.classList.contains("is-open")) overlay.classList.remove("is-active");
    lockBody(root.classList.contains("is-open"));
  }

  function openDrawer() {
    if (!drawer) return;
    setMenuOpen(false);
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    drawerBtns.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "true");
    });
    if (overlay) overlay.classList.add("is-active");
    lockBody(true);
  }

  if (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      setMenuOpen(!root.classList.contains("is-open"));
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function () {
      setMenuOpen(false);
      closeDrawer();
    });
  }

  items.forEach(function (item) {
    var link = item.querySelector(":scope > .navbar-v2__link, :scope > .navbar-v2__hit > .navbar-v2__link");
    var caretBtn = item.querySelector(":scope > .navbar-v2__hit > .navbar-v2__caret-btn");

    function onEnter() {
      if (!isDesktop()) return;
      clearTimeout(hoverTimer);
      openItem(item);
    }

    function onLeave() {
      if (!isDesktop()) return;
      hoverTimer = setTimeout(function () {
        item.classList.remove("is-open");
        if (link) link.setAttribute("aria-expanded", "false");
        if (!root.querySelector(".navbar-v2__item.is-open")) root.classList.remove("has-dropdown");
      }, 140);
    }

    item.addEventListener("mouseenter", onEnter);
    item.addEventListener("mouseleave", onLeave);

    function toggleMobile(e) {
      if (isDesktop()) return;
      e.preventDefault();
      e.stopPropagation();
      if (item.classList.contains("is-open")) {
        item.classList.remove("is-open");
        if (link) link.setAttribute("aria-expanded", "false");
      } else {
        openItem(item);
      }
    }

    if (caretBtn) {
      caretBtn.addEventListener("click", function (e) {
        if (isDesktop()) {
          e.preventDefault();
          if (item.classList.contains("is-open")) {
            item.classList.remove("is-open");
            caretBtn.setAttribute("aria-expanded", "false");
            root.classList.remove("has-dropdown");
          } else {
            openItem(item);
          }
          return;
        }
        toggleMobile(e);
      });
    } else if (link) {
      link.addEventListener("click", function (e) {
        if (isDesktop()) return;
        toggleMobile(e);
      });
    }
  });

  submenus.forEach(function (sub) {
    var trigger = sub.querySelector(":scope > .navbar-v2__sub-link");
    if (!trigger) return;

    sub.addEventListener("mouseenter", function () {
      if (!isDesktop()) return;
      submenus.forEach(function (other) {
        if (other !== sub && other.parentNode === sub.parentNode) other.classList.remove("is-open");
      });
      sub.classList.add("is-open");
    });

    sub.addEventListener("mouseleave", function () {
      if (!isDesktop()) return;
      sub.classList.remove("is-open");
    });

    trigger.addEventListener("click", function (e) {
      if (isDesktop()) return;
      e.preventDefault();
      e.stopPropagation();
      var open = sub.classList.contains("is-open");
      Array.prototype.forEach.call(sub.parentNode.querySelectorAll(":scope > .navbar-v2__submenu"), function (other) {
        if (other !== sub) other.classList.remove("is-open");
      });
      sub.classList.toggle("is-open", !open);
    });
  });

  drawerBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (drawer && drawer.classList.contains("is-open")) closeDrawer();
      else openDrawer();
    });
  });

  drawerCloses.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      closeDrawer();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    setMenuOpen(false);
    closeDrawer();
    closeAllItems();
  });

  document.addEventListener("click", function (e) {
    if (!isDesktop()) return;
    if (root.contains(e.target)) return;
    closeAllItems();
  });

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        root.classList.toggle("is-scrolled", window.scrollY > 24);
        ticking = false;
      });
    },
    { passive: true }
  );

  var resizeTick = false;
  window.addEventListener("resize", function () {
    if (resizeTick) return;
    resizeTick = true;
    window.requestAnimationFrame(function () {
      resizeTick = false;
      if (isDesktop()) {
        setMenuOpen(false);
        if (overlay && !(drawer && drawer.classList.contains("is-open"))) {
          overlay.classList.remove("is-active");
        }
      }
    });
  });
})();
