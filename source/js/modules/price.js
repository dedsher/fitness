const priceCards = document.querySelectorAll('.price b');
const tabsWrapper = document.querySelector('.price__tabs');
const tabs = document.querySelectorAll('.price__tab');

const tabToPrice = {
  0: 1,
  1: 6,
  2: 12,
};

const prices = {
  1: ['500', '1700', '2700'],
  6: ['30 000', '10 200', '16 200'],
  12: ['60 000', '20 400', '32 400'],
};

let currentTab = 0;
let prevTabElement = tabs[0];
let currentPrice = prices[tabToPrice[currentTab]];

const setActiveTab = () => {
  prevTabElement.classList.remove('is-active');
  tabs[currentTab].classList.add('is-active');
  prevTabElement = tabs[currentTab];
  currentPrice = prices[tabToPrice[currentTab]];
};

const setPrices = () => {
  priceCards.forEach((card, index) => {
    card.children[0].firstChild.textContent = currentPrice[index] + ' ';
    card.children[1].textContent = currentPrice[index];
  });
};

const onTabClick = (evt) => {
  const currentTabElement = evt.target;
  if (!currentTabElement.classList.contains('price__tab')) {
    return;
  }

  currentTab = currentTabElement.dataset.tab;

  if (tabs[currentTab] !== prevTabElement) {
    setActiveTab();
    setPrices();
  }
};

const initPrice = () => {
  setActiveTab();
  setPrices();
  tabsWrapper.addEventListener('click', onTabClick);
};

export {initPrice};
