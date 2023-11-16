const sliderJury = document.querySelector('[data-swiper="jury"]');
const sliderButtonPrev = document.querySelector('[data-swiper-button="jury-prev"]');
const sliderButtonNext = document.querySelector('[data-swiper-button="jury-next"]');

const initSliderJury = () => {
  const swiper = new Swiper(sliderJury, {
    slideClass: 'jury__card',
    loop: true,
    navigation: {
      nextEl: sliderButtonPrev,
      prevEl: sliderButtonNext,
    },
    grabCursor: true,
    breakPoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },

      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
};

export const initSliders = () => {
  initSliderJury();
};
