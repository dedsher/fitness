/* eslint-disable no-new */
// const initJurySlider = () => {
//   const swiperWrapper = document.querySelector('.slider');
//   const buttonPrev = document.querySelector('.swiper-button-prev');
//   const buttonNext = document.querySelector('.swiper-button-next');

//   const swiper = new window.Swiper(swiperWrapper, {
//     slideClass: 'jury__card',
//     // loop: true,
//     // navigation: {
//     //   nextEl: buttonNext,
//     //   prevEl: buttonPrev,
//     // },
//     breakPoints: {
//       1366: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//         allowTouchMove: false,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 32,
//         allowTouchMove: true,
//       },
//       0: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         allowTouchMove: true,
//       },
//     },
//   });
// };

import Swiper from '../../vendor/swiper';

const swiperWrapper = document.querySelector('.swiper');

const initSliderJury = () => {
  new Swiper(swiperWrapper, {

    navigation: {
      nextEl: '[data-button="next"]',
      prevEl: '[data-button="prev"]',
    },

    loop: true,

    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
};

export const initSliders = () => {
  initSliderJury();
};
