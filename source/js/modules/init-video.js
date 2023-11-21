const videoWrapper = document.querySelector('.about__video-wrapper');
const frame = videoWrapper.querySelector('iframe');


const initVideo = () => {
  if (videoWrapper) {
    videoWrapper.addEventListener('click', () => {
      if (frame) {
        frame.style.zIndex = '3';
        frame.src = frame.getAttribute('data-src');
        frame.play();
      }
    });
  }
};

export {initVideo};
