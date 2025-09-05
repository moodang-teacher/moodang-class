document.addEventListener("DOMContentLoaded", () => {
  // 비주얼 슬라이더
  const teamSlider = new Swiper(".team-slider", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
    },
  });
});
