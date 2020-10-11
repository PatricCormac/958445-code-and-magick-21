'use strict';

(() => {
  const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`,
    `Юлия`, `Люпита`, `Вашингтон`];

  const LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`,
    `Топольницкая`, `Нионго`, `Ирвинг`];

  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

  const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const setupBlock = document.querySelector(`.setup`);
  const templateBlock = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const similarList = document.querySelector(`.setup-similar-list`);
  const openSetupButton = document.querySelector(`.setup-open`);
  const openSetupIcon = document.querySelector(`.setup-open-icon`);
  const fieldName = setupBlock.querySelector(`.setup-user-name`);
  const wizardCoatElement = setupBlock.querySelector(`.setup-wizard .wizard-coat`);
  const wizardEyesElement = setupBlock.querySelector(`.setup-wizard .wizard-eyes`);
  const wizardFireballElement = setupBlock.querySelector(`.setup-fireball-wrap`);
  const hidenInputCoatColor = document.querySelector(`[name="coat-color"]`);
  const hidenInputEyesColor = document.querySelector(`[name="eyes-color"]`);
  const hidenInputFireballColor = document.querySelector(`[name="fireball-color"]`);

  const wizards = [
    {
      name: `${window.utils.randomValue(FIRST_NAMES)} ${window.utils.randomValue(LAST_NAMES)}`,
      coatColor: `${window.utils.randomValue(COAT_COLORS)}`,
      eyesColor: `${window.utils.randomValue(EYE_COLORS)}`
    },
    {
      name: `${window.utils.randomValue(FIRST_NAMES)} ${window.utils.randomValue(LAST_NAMES)}`,
      coatColor: `${window.utils.randomValue(COAT_COLORS)}`,
      eyesColor: `${window.utils.randomValue(EYE_COLORS)}`
    },
    {
      name: `${window.utils.randomValue(FIRST_NAMES)} ${window.utils.randomValue(LAST_NAMES)}`,
      coatColor: `${window.utils.randomValue(COAT_COLORS)}`,
      eyesColor: `${window.utils.randomValue(EYE_COLORS)}`
    },
    {
      name: `${window.utils.randomValue(FIRST_NAMES)} ${window.utils.randomValue(LAST_NAMES)}`,
      coatColor: `${window.utils.randomValue(COAT_COLORS)}`,
      eyesColor: `${window.utils.randomValue(EYE_COLORS)}`
    },
  ];

  const renderWizard = (wizard) => {
    const wizardElement = templateBlock.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const fragment = document.createDocumentFragment();

  wizards.forEach((wizard) => {
    fragment.appendChild(renderWizard(wizard));
  });

  similarList.appendChild(fragment);

  openSetupButton.addEventListener(`click`, window.utils.openSetup);

  openSetupIcon.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      window.utils.openSetup();
    }
  });

  wizardCoatElement.addEventListener(`click`, () => {
    hidenInputCoatColor.value = `${window.utils.randomValue(COAT_COLORS)}`;
    wizardCoatElement.style.fill = hidenInputCoatColor.value;
  });

  wizardEyesElement.addEventListener(`click`, () => {
    hidenInputEyesColor.value = `${window.utils.randomValue(EYE_COLORS)}`;
    wizardEyesElement.style.fill = hidenInputEyesColor.value;
  });

  wizardFireballElement.addEventListener(`click`, () => {
    hidenInputFireballColor.value = `${window.utils.randomValue(FIREBALL_COLORS)}`;
    wizardFireballElement.style.background = hidenInputFireballColor.value;
  });

  window.addEventListener(`click`, (evt) => {
    if (evt.path.includes(fieldName)) {
      window.utils.fieldNameFocus = true;
    } else {
      window.utils.fieldNameFocus = false;
    }
  });
})();
