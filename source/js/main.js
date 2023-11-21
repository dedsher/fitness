import {iosVhFix} from './utils/ios-vh-fix';
import {initSliders} from './modules/sliders/init-sliders';
import {initPrice} from './modules/price';
import {initVideo} from './modules/init-video';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import {Form} from './vendor/form/form';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initTabs();
    initAccordions();
    initSliders();
    initPrice();
    initVideo();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
