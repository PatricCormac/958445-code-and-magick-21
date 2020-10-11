'use strict';

window.utils = (() => {
  const setupDialogElement = document.querySelector(`.setup`);
  const similarBlock = document.querySelector(`.setup-similar`);
  const closeSetupButton = setupDialogElement.querySelector(`.setup-close`);

  return {
    fieldNameFocus: false,

    randomValue: (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    pressEscHandler: (evt) => {
      if (evt.key === `Escape` && !window.utils.fieldNameFocus) {
        window.utils.closeSetup();
      }
    },

    pressEnterHandler: (evt) => {
      if (evt.key === `Enter`) {
        window.utils.closeSetup();
      }
    },

    getMaxElement: (arr) => {
      let maxElement = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },

    openSetup: () => {
      setupDialogElement.classList.remove(`hidden`);
      similarBlock.classList.remove(`hidden`);
      document.addEventListener(`keydown`, window.utils.pressEscHandler);
      closeSetupButton.addEventListener(`click`, window.utils.closeSetup);
      closeSetupButton.addEventListener(`keydown`, window.utils.pressEnterHandler);
    },

    closeSetup: () => {
      setupDialogElement.classList.add(`hidden`);
      similarBlock.classList.add(`hidden`);
      document.removeEventListener(`keydown`, window.utils.pressEscHandler);
      closeSetupButton.removeEventListener(`click`, window.utils.closeSetup);
      closeSetupButton.removeEventListener(`keydown`, window.utils.pressEnterHandler);
    },
  };
})();
