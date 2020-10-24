'use strict';

(() => {
  /* const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`,
    `Юлия`, `Люпита`, `Вашингтон`];

  const LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`,
    `Топольницкая`, `Нионго`, `Ирвинг`];*/

  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const openSetupButton = document.querySelector(`.setup-open`);
  const openSetupIcon = document.querySelector(`.setup-open-icon`);
  const fieldName = document.querySelector(`.setup-user-name`);
  const wizardFireballElement = document.querySelector(`.setup-fireball-wrap`);
  const hidenInputFireballColor = document.querySelector(`[name="fireball-color"]`);

  let wizards = [];
  let coatColor = 'rgb(101, 137, 164)';
  let eyesColor = 'black';

  /* const wizards = [
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
  ];*/

  const form = document.querySelector(`.setup-wizard-form`);
  form.addEventListener(`submit`, (evt) => {
    window.backend.save(new FormData(form), () => {
      window.utils.closeSetup();
    });
    evt.preventDefault();
  });

  openSetupButton.addEventListener(`click`, window.utils.openSetup);

  openSetupIcon.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      window.utils.openSetup();
    }
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

  window.backend.load((data) => {
    wizards = data;
    window.renderWizards(wizards);
  });

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  const updateWizards = function () {
    window.renderWizards(wizards.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.setEyesChangeHandler(window.debounce((color) => {
    eyesColor = color;
    updateWizards();
  }));

  window.wizard.setCoatChangeHandler(window.debounce((color) => {
    coatColor = color;
    updateWizards();
  }));
})();
