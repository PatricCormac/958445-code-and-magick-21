'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`,
  `Юлия`, `Люпита`, `Вашингтон`];

const LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`,
  `Топольницкая`, `Нионго`, `Ирвинг`];

const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const setupBlock = document.querySelector(`.setup`);
const similarBlock = document.querySelector(`.setup-similar`);
const templateBlock = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);
const similarList = document.querySelector(`.setup-similar-list`);
const openSetupButton = document.querySelector(`.setup-open`);
const closeSetupButton = setupBlock.querySelector(`.setup-close`);
const openSetupIcon = document.querySelector(`.setup-open-icon`);
const fieldName = setupBlock.querySelector(`.setup-user-name`);
let fieldNameFocus = false;
const wizardCoatElement = setupBlock.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyesElement = setupBlock.querySelector(`.setup-wizard .wizard-eyes`);
const wizardFireballElement = setupBlock.querySelector(`.setup-fireball-wrap`);
const hidenInputCoatColor = document.querySelector(`[name="coat-color"]`);
const hidenInputEyesColor = document.querySelector(`[name="eyes-color"]`);
const hidenInputFireballColor = document.querySelector(`[name="fireball-color"]`);

const randomValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const wizards = [
  {
    name: `${randomValue(FIRST_NAMES)} ${randomValue(LAST_NAMES)}`,
    coatColor: `${randomValue(COAT_COLORS)}`,
    eyesColor: `${randomValue(EYE_COLORS)}`
  },
  {
    name: `${randomValue(FIRST_NAMES)} ${randomValue(LAST_NAMES)}`,
    coatColor: `${randomValue(COAT_COLORS)}`,
    eyesColor: `${randomValue(EYE_COLORS)}`
  },
  {
    name: `${randomValue(FIRST_NAMES)} ${randomValue(LAST_NAMES)}`,
    coatColor: `${randomValue(COAT_COLORS)}`,
    eyesColor: `${randomValue(EYE_COLORS)}`
  },
  {
    name: `${randomValue(FIRST_NAMES)} ${randomValue(LAST_NAMES)}`,
    coatColor: `${randomValue(COAT_COLORS)}`,
    eyesColor: `${randomValue(EYE_COLORS)}`
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

const pressEscHandler = (evt) => {
  if (evt.key === `Escape` && !fieldNameFocus) {
    closeSetup();
  }
};

const pressEnterHandler = (evt) => {
  if (evt.key === `Enter`) {
    closeSetup();
  }
};

const openSetup = () => {
  setupBlock.classList.remove(`hidden`);
  similarBlock.classList.remove(`hidden`);
  document.addEventListener(`keydown`, pressEscHandler);
  closeSetupButton.addEventListener(`click`, closeSetup);
  closeSetupButton.addEventListener(`keydown`, pressEnterHandler);
};

const closeSetup = () => {
  setupBlock.classList.add(`hidden`);
  similarBlock.classList.add(`hidden`);
  document.removeEventListener(`keydown`, pressEscHandler);
  closeSetupButton.removeEventListener(`click`, closeSetup);
  closeSetupButton.removeEventListener(`keydown`, pressEnterHandler);
};

openSetupButton.addEventListener(`click`, openSetup);

openSetupIcon.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openSetup();
  }
});

fieldName.addEventListener(`click`, () => {
  fieldNameFocus = true;
});

wizardCoatElement.addEventListener(`click`, () => {
  hidenInputCoatColor.value = `${randomValue(COAT_COLORS)}`;
  wizardCoatElement.style.fill = hidenInputCoatColor.value;
});

wizardEyesElement.addEventListener(`click`, () => {
  hidenInputEyesColor.value = `${randomValue(EYE_COLORS)}`;
  wizardEyesElement.style.fill = hidenInputEyesColor.value;
});

wizardFireballElement.addEventListener(`click`, () => {
  hidenInputFireballColor.value = `${randomValue(FIREBALL_COLORS)}`;
  wizardFireballElement.style.background = hidenInputFireballColor.value;
});
