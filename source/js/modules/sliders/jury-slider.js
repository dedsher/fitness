const initJurySlider = () => {
  const swiperWrapper = document.querySelector('.slider');
  const buttonPrev = document.querySelector('.swiper-button-prev');
  const buttonNext = document.querySelector('.swiper-button-next');

  const swiper = new window.Swiper(swiperWrapper, {
    slideClass: 'jury__card',
    // loop: true,
    // navigation: {
    //   nextEl: buttonNext,
    //   prevEl: buttonPrev,
    // },
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
  initJurySlider();
};
