let ClinicMaster = (() => {
  function t() {
    let e = document.querySelectorAll(".value");
    if (!e.length) return;
    if ("IntersectionObserver" in window) {
      let o = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            let el = entry.target;
            if (el.classList.contains("counted")) return;
            el.classList.add("counted");
            o.unobserve(el);
            ((e) => {
              let t = +e.getAttribute("data-value"),
                n = 0,
                l = t / 200,
                a = () => {
                  (n += l) < t
                    ? ((e.innerText = Math.ceil(n)), requestAnimationFrame(a))
                    : (e.innerText = t);
                };
              a();
            })(el);
          });
        },
        { threshold: 0.5 }
      );
      e.forEach((el) => o.observe(el));
      return;
    }
    let r = 200;
    var t = () => {
      e.forEach((e) => {
        !e.classList.contains("counted") &&
          ((e) => {
            e = e.getBoundingClientRect();
            return (
              0 <= e.top &&
              e.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)
            );
          })(e) &&
          (e.classList.add("counted"),
          ((e) => {
            let t = +e.getAttribute("data-value"),
              n = 0,
              l = t / r,
              a = () => {
                (n += l) < t
                  ? ((e.innerText = Math.ceil(n)), requestAnimationFrame(a))
                  : (e.innerText = t);
              };
            a();
          })(e));
      });
    };
    (window.addEventListener("scroll", t, { passive: true }), t());
  }
  function n() {
    let a = document.getElementById("videoDialog"),
      r = document.getElementById("videoContainer"),
      n = document.getElementById("closeBtn"),
      l = document.body;
    if (a && r && n) {
      let e = (e) => {
          var t,
            e = e.target.closest("button[data-type]");
          e &&
            ((t = e.getAttribute("data-type")),
            (e = e.getAttribute("data-src")),
            t) &&
            e &&
            ((e, t) => {
              let n = "";
              if (e === "youtube" || e === "vimeo") {
                const l = encodeURI(t);
                n = `<iframe src="${l}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
              } else if (e === "mp4")
                n = `<video controls autoplay><source src="${t}" type="video/mp4">Your browser does not support the video tag.</video>`;
              ((r.innerHTML = n), (a.style.display = "flex"));
            })(t, e);
        },
        t = () => {
          ((r.innerHTML = ""), (a.style.display = "none"));
        };
      (l.addEventListener("click", e), n.addEventListener("click", t));
    }
  }
  let l = () => {
      document.querySelectorAll(".input-group").forEach((e) => {
        e.addEventListener("click", function (e) {
          var t,
            n,
            l = e.target.closest(".button-plus, .button-minus");
          l &&
            (l.classList.contains("button-plus")
              ? ((t = e).preventDefault(),
                (n = (t = t.target.closest("[data-field]")).getAttribute(
                  "data-field",
                )),
                (t = (t.closest("div") || t.closest("td")).querySelector(
                  `input[name="${n}"]`,
                )),
                (n = parseInt(t.value, 10)),
                (t.value = isNaN(n) ? 0 : n + 1))
              : l.classList.contains("button-minus") &&
                ((t = e).preventDefault(),
                (n = (t = t.target.closest("[data-field]")).getAttribute(
                  "data-field",
                )),
                (t = (t.closest("div") || t.closest("td")).querySelector(
                  `input[name="${n}"]`,
                )),
                (n = parseInt(t.value, 10)),
                (t.value = !isNaN(n) && 0 < n ? n - 1 : 0)));
        });
      });
    },
    r = () => {
      var e = (t, n = "vertical") => {
        let v = document.querySelector(t);
        if (v) {
          new Wizard({
            wz_class: t,
            wz_nav_style: "dots",
            wz_button_style: ".btn .btn-sm .mx-3",
            wz_ori: n,
            buttons: !0,
            navigation: "all",
            finish: "Submit",
            bubble: !0,
          }).init();
          let o = v.querySelector(".month"),
            c = v.querySelector(".year"),
            s = v.querySelector(".calendar-days"),
            i = v.querySelector(".selected-date"),
            d = v.querySelector(".slots-container"),
            l = new Date(),
            u = null,
            e = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            m = [
              "9:00 AM - 10:30 AM",
              "10:30 AM - 12:00 PM",
              "11:00 AM - 12:30 PM",
              "11:30 AM - 1:00 PM",
              "12:00 PM - 1:30 PM",
              "12:30 PM - 2:00 PM",
              "1:00 PM - 2:30 PM",
              "1:30 PM - 3:00 PM",
              "2:00 PM - 3:30 PM",
              "2:30 PM - 4:00 PM",
              "3:00 PM - 4:30 PM",
              "3:30 PM - 5:00 PM",
            ];
          ((v.querySelector(".prev-month").onclick = (e) => {
            (e.preventDefault(),
              0 < o.selectedIndex
                ? o.selectedIndex--
                : 0 < c.selectedIndex &&
                  (c.selectedIndex--, (o.selectedIndex = 11)),
              r());
          }),
            (v.querySelector(".next-month").onclick = (e) => {
              (e.preventDefault(),
                o.selectedIndex < 11
                  ? o.selectedIndex++
                  : ((o.selectedIndex = 0), c.selectedIndex++),
                r());
            }),
            (o.onchange = r),
            (c.onchange = r),
            (o.innerHTML = ""),
            e.forEach((e, t) => {
              var n = document.createElement("option");
              ((n.value = t),
                (n.textContent = e),
                t === l.getMonth() && (n.selected = !0),
                o.appendChild(n));
            }),
            (c.innerHTML = ""));
          for (let e = l.getFullYear(); e <= l.getFullYear() + 2; e++) {
            var a = document.createElement("option");
            ((a.value = e),
              (a.textContent = e) === l.getFullYear() && (a.selected = !0),
              c.appendChild(a));
          }
          function r() {
            s.innerHTML = "";
            var l = parseInt(o.value),
              a = parseInt(c.value),
              e = new Date(a, l, 1).getDay(),
              t = new Date(a, l + 1, 0).getDate(),
              n = 0 === e ? 6 : e - 1;
            for (let e = 0; e < n; e++) {
              var r = document.createElement("div");
              s.appendChild(r);
            }
            for (let n = 1; n <= t; n++) {
              let e = new Date(a, l, n),
                t = document.createElement("div");
              ((t.className = "day"),
                (t.textContent = n),
                e.toDateString() === u?.toDateString() &&
                  t.classList.add("selected"),
                (t.onclick = () => {
                  ((u = e),
                    v
                      .querySelectorAll(".day")
                      .forEach((e) => e.classList.remove("selected")),
                    t.classList.add("selected"),
                    (i.textContent = e.toDateString()),
                    (d.innerHTML = ""),
                    m.forEach((e) => {
                      let t = document.createElement("div");
                      ((t.className = "slot"),
                        (t.textContent = e),
                        (t.onclick = () => {
                          (v
                            .querySelectorAll(".slot")
                            .forEach((e) => e.classList.remove("selected")),
                            t.classList.add("selected"));
                        }),
                        d.appendChild(t));
                    }));
                }),
                s.appendChild(t));
            }
          }
          r();
        }
      };
      (e(".wizard-vertical", "vertical"),
        e(".wizard-horizontal", "horizontal"));
    },
    o = () => {
      document.querySelectorAll(".dynamic-select").forEach((e) => {
        ((n) => {
          const e = n.id || `select-${Math.random().toString(36).substr(2, 9)}`,
            t = document.createElement("div"),
            l =
              ((t.id = `custom-${e}`),
              (t.className = "custom-select"),
              document.createElement("div")),
            a =
              ((l.className = "select-selected"),
              (l.textContent = (
                n.querySelector("option[selected]") || n.options[0]
              ).textContent),
              n.parentElement?.dataset?.label || "");
          if (a) {
            const o = document.createElement("span");
            o.textContent = a;
            l.appendChild(o);
          }
          t.appendChild(l);
          const r = document.createElement("div");
          ((r.className = "select-items select-hide"),
            t.appendChild(r),
            Array.from(n.options).forEach((e) => {
              const t = document.createElement("div");
              t.className = "select-item";
              t.setAttribute("data-value", e.value);
              t.textContent = e.textContent;
              if (e.selected) t.classList.add("active");
              t.addEventListener("click", function () {
                l.childNodes[0].textContent = this.textContent;
                n.value = this.getAttribute("data-value");
                n.dispatchEvent(new Event("change"));
                n.dispatchEvent(new Event("click"));
                r.classList.add("select-hide");
                l.classList.remove("select-active");
                r.querySelectorAll(".select-item").forEach((e) =>
                  e.classList.remove("active"),
                );
                this.classList.add("active");
              });
              r.appendChild(t);
            }),
            (n.style.display = "none"),
            n.parentNode.insertBefore(t, n.nextSibling),
            l.addEventListener("click", function (e) {
              e.stopPropagation();
              r.classList.toggle("select-hide");
              l.classList.toggle("select-active");
            }),
            document.addEventListener("click", function (e) {
              if (!t.contains(e.target)) {
                r.classList.add("select-hide");
                l.classList.remove("select-active");
              }
            }));
        })(e);
      });
    },
    c = (e = document) => {
      (e.querySelectorAll(".myAccordion").forEach((a) => {
        "true" !== a.dataset.bound &&
          ((a.dataset.bound = "true"),
          a.addEventListener("click", function (ev) {
            let header = ev.target.closest(".accordion-header");
            var arrow, isOpen, content;
            header &&
              a.contains(header) &&
              ((content = header.parentElement.querySelector(".accordion-content")),
              (arrow = header.querySelector(".arrow")),
              (isOpen = header.classList.contains("open")),
              a.querySelectorAll(".accordion-header").forEach((h) => {
                h !== header &&
                  (h.classList.remove("open"),
                  h.querySelector(".arrow")?.classList.remove("active"),
                  (h = h.parentElement.querySelector(".accordion-content")) &&
                    h.style.removeProperty("max-height"));
              }),
              isOpen
                ? (header.classList.remove("open"),
                  content?.style.removeProperty("max-height"),
                  arrow?.classList.remove("active"))
                : (header.classList.add("open"),
                  content?.style.removeProperty("max-height"),
                  arrow?.classList.add("active")));
          }));
      }));
    },
    s = () => {
      if (document.querySelector("#countdown")) {
        var e = 20,
          t = "days",
          c = document;
        let n = c.querySelector("#countdown .days"),
          l = c.querySelector("#countdown .hours"),
          a = c.querySelector("#countdown .minutes"),
          r = c.querySelector("#countdown .seconds"),
          o;
        function s(e) {
          let t = Date.now() + 1e3 * e;
          o = setInterval(() => {
            var e = Math.round((t - Date.now()) / 1e3);
            e <= 0
              ? clearInterval(o)
              : ((e = e),
                (n.textContent = Math.floor(e / 86400)),
                (l.textContent = Math.floor((e % 86400) / 3600)),
                (a.textContent = Math.floor(((e % 86400) % 3600) / 60)),
                (r.textContent = e % 60 < 10 ? "0" + (e % 60) : e % 60));
          }, 1e3);
        }
        switch (t) {
          case "seconds":
            return void s(e);
          case "minutes":
            return void s(60 * e);
          case "hours":
            return void s(60 * e * 60);
          case "days":
            s(60 * e * 60 * 24);
        }
      }
    };
  return {
    init() {
      var e;
      ((() => {
        let n = document.querySelector(".toggle-tabs");
        if (n) {
          let e = document.querySelectorAll(".pricingtable-price.year"),
            t = document.querySelectorAll(".pricingtable-price.month");
          e.forEach((e) => (e.style.display = "none"));
          var l = n.querySelector(".monthly"),
            a = n.querySelector(".yearly");
          (l &&
            l.addEventListener("click", () => {
              (n.classList.add("monthly"),
                n.classList.remove("yearly"),
                t.forEach((e) => (e.style.display = "block")),
                e.forEach((e) => (e.style.display = "none")));
            }),
            a &&
              a.addEventListener("click", () => {
                (n.classList.add("yearly"),
                  n.classList.remove("monthly"),
                  t.forEach((e) => (e.style.display = "none")),
                  e.forEach((e) => (e.style.display = "block")));
              }));
        }
      })(),
        l(),
        0 < document.querySelectorAll(".star-rating-old").length &&
          new StarRating(".star-rating-old"),
        (() => {
          var e,
            t = new Date().getFullYear();
          for (e of document.getElementsByClassName("current-year"))
            e.innerHTML = t;
        })(),
        (e = document.querySelectorAll(".dz-number")) &&
          e.forEach(function (t) {
            t.addEventListener("input", function () {
              var e = t.value.replace(/\D/g, "");
              10 < e.length ? (t.value = e.slice(0, 10)) : (t.value = e);
            });
          }),
        r(),
        (e = document.getElementById("lightgallery")) &&
          lightGallery(e, {
            plugins: [lgThumbnail, lgZoom],
            selector: ".lg-item",
            thumbnail: !0,
            exThumbImage: "data-src",
          }),
        (e = document.querySelectorAll(".box-hover-wrapper")).length &&
          e.forEach((t) => {
            t.addEventListener("mouseover", (e) => {
              e = e.target.closest(".box-hover");
              e &&
                t.contains(e) &&
                (t
                  .querySelectorAll(".box-hover.active")
                  .forEach((e) => e.classList.remove("active")),
                e.classList.add("active"));
            });
          }),
        t(),
        (() => {
          const extraNav = document.querySelector(".extra-nav");
          if (!extraNav || !/-bottom-20/.test(extraNav.className)) return;

          const mobileMq = window.matchMedia("(max-width: 768px)");
          let isMobileView = mobileMq.matches;
          let lastScrollY = window.scrollY || 0;
          let scrollTicking = false;

          mobileMq.addEventListener("change", (ev) => {
            isMobileView = ev.matches;
          });

          const updateExtraNav = () => {
            scrollTicking = false;
            if (!isMobileView) return;

            const scrollY = window.scrollY || document.documentElement.scrollTop;
            extraNav.classList.toggle("active", scrollY > lastScrollY);
            lastScrollY = scrollY;
          };

          window.addEventListener(
            "scroll",
            () => {
              if (!scrollTicking) {
                scrollTicking = true;
                requestAnimationFrame(updateExtraNav);
              }
            },
            { passive: true }
          );

          if ("IntersectionObserver" in window) {
            const sentinel = document.createElement("div");
            sentinel.setAttribute("aria-hidden", "true");
            sentinel.style.cssText =
              "position:absolute;left:0;bottom:0;width:1px;height:1px;pointer-events:none;visibility:hidden";
            document.body.appendChild(sentinel);
            new IntersectionObserver(
              ([entry]) => {
                if (!isMobileView) return;
                extraNav.classList.toggle("bottom-end", entry.isIntersecting);
              },
              { root: null, threshold: 0, rootMargin: "0px" }
            ).observe(sentinel);
          }
        })(),
        o(),
        c(),
        n(),
        document.querySelectorAll(".custom-tab").forEach((t) => {
          let n = t.querySelectorAll(".tab-title"),
            a = t.querySelectorAll(".tab-content");
          (n[0]?.classList.add("active"),
            a[0]?.classList.add("active"),
            t.addEventListener("click", (e) => {
              let l = e.target.closest(".tab-title");
              l &&
                t.contains(l) &&
                n.forEach((e, t) => {
                  var n = e === l;
                  (e.classList.toggle("active", n),
                    a[t] && a[t].classList.toggle("active", n));
                });
            }));
        }),
        (() => {
          let a = document.querySelector("#masonry, .masonry"),
            r = document.querySelector(".filters");
          if (a && typeof imagesLoaded === "function" && typeof Isotope === "function") {
            let t = parseInt(a.dataset.gutter || 0, 10),
              l = a.dataset.columnWidth
                ? parseInt(a.dataset.columnWidth, 10)
                : ".card-container";
            imagesLoaded(a, () => {
              let n = new Isotope(a, {
                itemSelector: ".card-container",
                layoutMode: "masonry",
                masonry: { gutter: t, columnWidth: l },
                transitionDuration: "0.4s",
              });
              var e;
              r &&
                ((e = r.querySelector("li:first-child")) &&
                  e.classList.add("active"),
                r.addEventListener("click", (t) => {
                  t = t.target.closest("li");
                  if (t) {
                    (r
                      .querySelectorAll("li")
                      .forEach((e) => e.classList.remove("active")),
                      t.classList.add("active"));
                    let e = t.dataset.filter || "*";
                    ("all" === e && (e = "*"), n.arrange({ filter: e }));
                  }
                }));
            });
          }
        })(),
        s(),
        document.querySelectorAll(".before-after-slider").forEach((t) => {
          var e = t.querySelector(".slider");
          e &&
            e.addEventListener("input", (e) => {
              t.style.setProperty("--position", e.target.value + "%");
            });
        }),
        document.querySelectorAll(".word-rotate").forEach((e) => {
          var t = e.textContent.split("");
          let l = 360 / t.length,
            a = e.closest(".word-rotate-box, .word-rotate-box2");
          a &&
            (t.forEach((e, t) => {
              var n = document.createElement("span");
              ((n.className = "text-char"),
                n.style.setProperty("--char-rotate", t * l + "deg"),
                (n.textContent = e),
                a.appendChild(n));
            }),
            e.remove());
        }));
      {
        let t = document.querySelectorAll(".dz-flex-wrapper .dz-flex-item");
        t &&
          t.forEach(function (e) {
            e.addEventListener("click", function () {
              (t.forEach(function (e) {
                e.classList.remove("active");
              }),
                e.classList.add("active"));
            });
          });
      }
      {
        let n = document.querySelector("#BmiCalculatorMetric"),
          l =
            (n &&
              n.addEventListener("submit", (e) => {
                e.preventDefault();
                var e = document.querySelector("#heightMetric")?.value.trim(),
                  t = document.querySelector("#weightMetric")?.value.trim();
                e && t
                  ? ((t = Number(t) / (Number(e) / 100) ** 2),
                    n.reset(),
                    a(t, ".dzFormBmiMetric"))
                  : alert("Please enter both height and weight!");
              }),
            document.querySelector("#BmiCalculatorImperial"));
        function a(e, t) {
          let n = "";
          n =
            e < 18.5
              ? "Underweight"
              : e <= 24.9
                ? "Healthy"
                : e <= 29.9
                  ? "Overweight"
                  : e <= 34.9
                    ? "Obese"
                    : "Extremely Obese";
          t = document.querySelector(t);
          t &&
            (t.innerHTML = `
          <div class="dzFormInner flex gap-5 mt-4">
            <h4 class="title text-white !mb-0">${n}</h4>
            <h5 class="bmi-result text-primary mb-0">BMI: ${e.toFixed(2)}</h5>
          </div>
        `);
        }
        l &&
          l.addEventListener("submit", (e) => {
            e.preventDefault();
            var e = document.querySelector("#heightFeet")?.value.trim(),
              t = document.querySelector("#heightInches")?.value.trim() || 0,
              n = document.querySelector("#weightPounds")?.value.trim();
            e && n
              ? ((e = 0.0254 * (12 * Number(e) + Number(t))),
                (t = (0.453592 * Number(n)) / e ** 2),
                l.reset(),
                a(t, ".dzFormBmiImperial"))
              : alert("Please enter height and weight!");
          });
      }
    },
    load() {},
    resize() {},
  };
})();
(document.addEventListener("DOMContentLoaded", function () {
  const runInit = () => ClinicMaster.init();
  if ("requestIdleCallback" in window) {
    requestIdleCallback(runInit, { timeout: 1500 });
  } else {
    requestAnimationFrame(() => requestAnimationFrame(runInit));
  }
}),
  window.addEventListener("load", function () {
    ClinicMaster.load();
    let e = document.getElementById("dzPreloader");
    (setTimeout(function () {
      e && e.remove();
    }, 1e3),
      document.body.addEventListener("keydown", function () {
        document.body.classList.add("show-focus-outline");
      }),
      document.body.addEventListener("mousedown", function () {
        document.body.classList.remove("show-focus-outline");
      }));
  }),
  window.addEventListener("resize", function () {
    ClinicMaster.resize();
  }));
