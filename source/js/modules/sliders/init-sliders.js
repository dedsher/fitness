import Swiper from '../../vendor/swiper';

const slidersWrappers = document.querySelectorAll('[data-swiper]');

const slidersSettings = {
  jury: {
    slideClass: 'jury__card',
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        initialSlide: 2,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        initialSlide: 2,
        allowTouchMove: true,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 2,
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '[data-swiper-button="jury-next"]',
      prevEl: '[data-swiper-button="jury-prev"]',
    },
  },
  reviews: {
    slideClass: 'reviews__card',
    loop: false,
    slidesPerView: 1,
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1366: {
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '[data-swiper-button="reviews-next"]',
      prevEl: '[data-swiper-button="reviews-prev"]',
    },
  },
};


const initSliderJury = () => {
  const sliders = [];
  slidersWrappers.forEach((wrapper, index) => {
    const currentSliderName = wrapper.dataset.swiper;
    sliders[index] = new Swiper(wrapper, slidersSettings[currentSliderName]);
  });
};

export const initSliders = () => {
  initSliderJury();
};
