'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`,
  `Юлия`, `Люпита`, `Вашингтон`];

const LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`,
  `Топольницкая`, `Нионго`, `Ирвинг`];

const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const setupBlock = document.querySelector(`.setup`);
const similarBlock = document.querySelector(`.setup-similar`);
const templateBlock = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);
const similarList = document.querySelector(`.setup-similar-list`);

setupBlock.classList.remove(`hidden`);

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

wizards.forEach((wizard)=> {
  fragment.appendChild(renderWizard(wizard));
});

similarList.appendChild(fragment);

similarBlock.classList.remove(`hidden`);
