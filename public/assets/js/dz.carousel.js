let ClinicMasterCarousel = (function () {
  function whenVisible(selector, callback) {
    const nodes = document.querySelectorAll(selector);
    if (!nodes.length) return;

    nodes.forEach((el) => {
      if (el.dataset.swiperBound) return;

      const run = () => {
        if (el.dataset.swiperBound) return;
        el.dataset.swiperBound = "1";
        requestAnimationFrame(() => callback(el));
      };

      if (!("IntersectionObserver" in window)) {
        run();
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            run();
          });
        },
        { rootMargin: "200px 0px", threshold: 0 }
      );
      observer.observe(el);
    });
  }

  function initGallery() {
    if (
      !document.querySelector(".galley-thumb-swiper") ||
      !document.querySelector(".galley-swiper")
    ) {
      return;
    }
    const thumbs = new Swiper(".galley-thumb-swiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".galley-swiper", {
      loop: true,
      spaceBetween: 10,
      thumbs: { swiper: thumbs },
    });
  }

  return {
    load() {
      let thumbSwiper;
      let i;
      let r;

      whenVisible(".testimonial-swiper-wrapper", () => {
        thumbSwiper = new Swiper(".testimonial-thumbs", {
          speed: 1500,
          parallax: true,
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: { delay: 3000 },
        });
        new Swiper(".testimonial-swiper", {
          speed: 1500,
          parallax: true,
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: { delay: 3000 },
          navigation: {
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev",
          },
          pagination: { el: ".swiper-pagination", clickable: true },
          thumbs: { swiper: thumbSwiper },
        });
      });

      whenVisible(".testimonial-swiper1", (el) => {
        new Swiper(el, {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 1,
          navigation: {
            nextEl: ".swiper1-button-next",
            prevEl: ".swiper1-button-prev",
          },
        });
      });

      whenVisible(".testimonial-swiper4", () => {
        thumbSwiper = new Swiper(".testimonial-thumb-swiper4", {
          slidesPerView: 1,
          effect: "fade",
          centeredSlides: true,
        });
        new Swiper(".testimonial-swiper4", {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 1,
          centeredSlides: true,
          autoplay: { delay: 3000 },
          thumbs: { swiper: thumbSwiper },
          navigation: {
            nextEl: ".swiper4-button-next",
            prevEl: ".swiper4-button-prev",
          },
        });
      });

      whenVisible(".awards-swiper", (el) => {
        new Swiper(el, {
          loop: true,
          slidesPerView: 5,
          autoplay: { delay: 3000 },
          breakpoints: {
            1200: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            767: { slidesPerView: 3 },
            575: { slidesPerView: 2.5 },
            320: { slidesPerView: 1.5 },
          },
        });
      });

      whenVisible(".client-swiper", (el) => {
        new Swiper(el, {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 30,
          autoplay: { delay: 3000 },
          breakpoints: {
            1200: { slidesPerView: 6 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            320: { slidesPerView: 2 },
          },
        });
      });

      whenVisible(".client-swiper2", (el) => {
        new Swiper(el, {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 30,
          autoplay: { delay: 3000 },
          breakpoints: {
            767: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            320: { slidesPerView: 2 },
          },
        });
      });

      whenVisible(".blog-slideshow", (el) => {
        new Swiper(el, {
          loop: true,
          spaceBetween: 0,
          slidesPerView: "auto",
          speed: 1500,
          autoplay: { delay: 2000 },
          pagination: { el: ".swiper-pagination-two", clickable: true },
        });
      });

      whenVisible(".service-swiper", (el) => {
        new Swiper(el, {
          speed: 1500,
          parallax: true,
          slidesPerView: 1,
          spaceBetween: 35,
          loop: true,
          autoplay: { delay: 3000 },
          breakpoints: {
            567: { slidesPerView: 1, spaceBetween: 15 },
            767: { slidesPerView: 2, spaceBetween: 20 },
            1025: { slidesPerView: 4, spaceBetween: 35 },
          },
        });
      });

      whenVisible(".service-swiper-2", (el) => {
        new Swiper(el, {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 3,
          autoplay: { delay: 3000 },
          breakpoints: {
            1481: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            991: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          },
          navigation: {
            nextEl: ".service-button-next",
            prevEl: ".service-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}">0${index + 1}</span>`;
            },
          },
        });
      });

      whenVisible(".blog-vertical-swiper", () => {
        i = new Swiper(".blog-vertical-swiper-thumb", {
          direction: "vertical",
          slidesPerView: 3,
          mousewheel: false,
          spaceBetween: 10,
          autoplay: { delay: 3000 },
          breakpoints: {
            320: { slidesPerView: 1, direction: "horizontal" },
            767: { slidesPerView: 2, direction: "vertical" },
            1191: { slidesPerView: 3 },
          },
        });
        new Swiper(".blog-vertical-swiper", {
          slidesPerView: 1,
          effect: "fade",
          grabCursor: true,
          thumbs: { swiper: i },
          navigation: {
            nextEl: ".blog-swiper-next",
            prevEl: ".blog-swiper-prev",
          },
        });
      });

      whenVisible(".testimonial-swiper3", (el) => {
        new Swiper(el, {
          loop: true,
          spaceBetween: 0,
          slidesPerView: 1,
          autoplay: { delay: 3000 },
          pagination: {
            el: ".testimonial-pagination-swiper3",
            clickable: true,
          },
        });
      });

      whenVisible(".compare-swiper", (root) => {
        const swiper = new Swiper(root, {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: true,
          autoplay: { delay: 3000 },
          navigation: {
            nextEl: ".compare-swiper-next",
            prevEl: ".compare-swiper-prev",
          },
          pagination: {
            el: ".compare-pagination-swiper",
            type: "progressbar",
          },
          breakpoints: {
            1481: { slidesPerView: 4.4 },
            1280: { slidesPerView: 4 },
            991: { slidesPerView: 3.5 },
            320: { slidesPerView: 2 },
          },
        });

        if (document.querySelector(".compare-slider__pagination")) {
          const current = document.querySelector(".compare-slider__current");
          const total = document.querySelector(".compare-slider__total");
          const update = () => {
            const slideCount = root.querySelectorAll(".swiper-slide").length;
            let index = swiper.realIndex + 1;
            const displayIndex = (index = index > slideCount ? 1 : index) < 10
              ? "0" + index
              : String(index);
            const displayTotal =
              slideCount < 10 ? "0" + slideCount : String(slideCount);
            if (current) current.textContent = displayIndex;
            if (total) total.textContent = displayTotal;
          };
          update();
          swiper.on("slideChange", update);
        }
      });

      whenVisible(".compare-swiper-2", () => {
        const swiper = new Swiper(".compare-swiper-2", {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
          autoplay: { delay: 3000 },
          navigation: {
            nextEl: ".compare-swiper-2-next",
            prevEl: ".compare-swiper-2-prev",
          },
          pagination: {
            el: ".compare-pagination-swiper",
            type: "progressbar",
          },
          breakpoints: {
            1481: { slidesPerView: 2.6 },
            1280: { slidesPerView: 3 },
            991: { slidesPerView: 3 },
            320: { slidesPerView: 2 },
          },
        });
        const current = document.querySelector(".compare-slider__current");
        const total = document.querySelector(".compare-slider__total");
        if (current && total) {
          const update = () => {
            const slideCount = swiper.slides.length - 2 * swiper.loopedSlides;
            let index = swiper.realIndex + 1;
            const displayIndex = (index = index > slideCount ? 1 : index) < 10
              ? "0" + index
              : String(index);
            const displayTotal =
              slideCount < 10 ? "0" + slideCount : String(slideCount);
            current.innerHTML = displayIndex;
            total.innerHTML = displayTotal;
          };
          update();
          swiper.on("slideChange", update);
        }
      });

      whenVisible(".dz-team-swiper1", () => {
        thumbSwiper = new Swiper(".dz-team-swiper1-thumb", {
          slidesPerView: 2,
          grid: { rows: 2 },
          autoplay: { delay: 3000 },
          breakpoints: {
            320: { slidesPerView: 1.2, grid: { rows: 1 } },
            591: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 2 },
          },
        });
        const swiper = new Swiper(".dz-team-swiper1", {
          slidesPerView: 1,
          effect: "fade",
          thumbs: { swiper: thumbSwiper },
          pagination: {
            el: ".team-progressbar-swiper",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".team-swiper-next",
            prevEl: ".team-swiper-prev",
          },
        });
        if (document.querySelector(".team-pagination-swiper")) {
          const current = document.querySelector(".team-slider__current");
          const total = document.querySelector(".team-slider__total");
          const update = () => {
            const slideCount = document.querySelectorAll(
              ".dz-team-swiper1 .swiper-slide"
            ).length;
            let index = swiper.realIndex + 1;
            const displayIndex = (index = index > slideCount ? 1 : index) < 10
              ? "0" + index
              : String(index);
            const displayTotal =
              slideCount < 10 ? "0" + slideCount : String(slideCount);
            if (total) total.textContent = displayTotal;
            if (current) current.textContent = displayIndex;
          };
          update();
          swiper.on("slideChange", update);
        }
      });

      whenVisible(".testimonial-swiper2", () => {
        const swiper = new Swiper(".testimonial-swiper2", {
          loop: true,
          spaceBetween: 0,
          slidesPerView: 2,
          pagination: {
            el: ".testimonial-pagination-swiper2",
            type: "progressbar",
          },
          breakpoints: {
            1481: { slidesPerView: 2 },
            1280: { slidesPerView: 1.6 },
            991: { slidesPerView: 1.2 },
            320: { slidesPerView: 1 },
          },
        });
        if (document.querySelector(".testimonial-slider__pagination2")) {
          const current = document.querySelector(
            ".testimonial-slider__current"
          );
          const total = document.querySelector(".testimonial-slider__total");
          const update = () => {
            const slideCount = document.querySelectorAll(
              ".testimonial-swiper2 .swiper-slide"
            ).length;
            let index = swiper.realIndex + 1;
            const displayIndex = (index = index > slideCount ? 1 : index) < 10
              ? "0" + index
              : String(index);
            const displayTotal =
              slideCount < 10 ? "0" + slideCount : String(slideCount);
            if (total) total.textContent = displayTotal;
            if (current) current.textContent = displayIndex;
          };
          update();
          swiper.on("slideChange", update);
        }
      });

      whenVisible(".blog-vertical-swiper2", () => {
        r = new Swiper(".blog-vertical-swiper-thumb2", {
          direction: "vertical",
          slidesPerView: 3,
          mousewheel: false,
          spaceBetween: 10,
          breakpoints: {
            320: { slidesPerView: 1, direction: "horizontal" },
            767: { slidesPerView: 2, direction: "vertical" },
            1191: { slidesPerView: 3 },
          },
        });
        new Swiper(".blog-vertical-swiper2", {
          slidesPerView: 1,
          effect: "fade",
          grabCursor: true,
          thumbs: { swiper: r },
          navigation: {
            nextEl: ".blog-swiper-next",
            prevEl: ".blog-swiper-prev",
          },
        });
      });

      whenVisible(".testimonial-swiper6", (el) => {
        new Swiper(el, {
          loop: true,
          spaceBetween: 20,
          speed: 1500,
          slidesPerView: 1,
          simulateTouch: false,
          allowTouchMove: false,
          autoplay: { delay: 2000 },
        });
      });

      whenVisible(".testimonial-swiper7", (el) => {
        new Swiper(el, {
          loop: true,
          spaceBetween: 0,
          slidesPerView: 1,
          autoplay: { delay: 3000 },
          pagination: {
            el: ".testimonial-pagination-swiper7",
            clickable: true,
          },
        });
      });

      whenVisible(".dummy-swiper", (el) => {
        new Swiper(el, {
          loop: false,
          spaceBetween: 0,
          slidesPerView: 9,
          autoplay: { delay: 3000 },
          breakpoints: {
            1481: { slidesPerView: 9 },
            1400: { slidesPerView: 8 },
            1280: { slidesPerView: 7 },
            1199: { slidesPerView: 7 },
            991: { slidesPerView: 6 },
            768: { slidesPerView: 5 },
            320: { slidesPerView: 3 },
          },
        });
      });

      initGallery();
    },
  };
})();

function scheduleCarouselInit() {
  const run = () => ClinicMasterCarousel.load();
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 2000 });
  } else {
    requestAnimationFrame(() => requestAnimationFrame(run));
  }
}

window.addEventListener("load", scheduleCarouselInit);
