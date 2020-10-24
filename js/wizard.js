'use strict';

(() => {
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

  const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

  let wizard = {
    onEyesChange: () => {},
    onCoatChange: () => {},
  };

  const setupBlock = document.querySelector(`.setup-wizard`);
  const wizardCoatElement = setupBlock.querySelector(`.wizard-coat`);
  const wizardEyesElement = setupBlock.querySelector(`.wizard-eyes`);
  const hidenInputCoatColor = document.querySelector(`[name="coat-color"]`);
  const hidenInputEyesColor = document.querySelector(`[name="eyes-color"]`);

  wizardCoatElement.addEventListener(`click`, () => {
    let newColor = window.utils.randomValue(COAT_COLORS);
    hidenInputCoatColor.value = newColor;
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener(`click`, () => {
    let newColor = window.utils.randomValue(EYE_COLORS);
    hidenInputEyesColor.value = newColor;
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = {
    setCoatChangeHandler: (cb) => {
      wizard.onCoatChange = cb;
    },
    setEyesChangeHandler: (cb) => {
      wizard.onEyesChange = cb;
    },
  };
})();
