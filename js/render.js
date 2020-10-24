'use strict';

(() => {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const templateBlock = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const similarList = document.querySelector(`.setup-similar-list`);

  window.renderWizards = (wizards) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      const wizardElement = templateBlock.cloneNode(true);
      wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
      wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].colorCoat;
      wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].colorEyes;
      fragment.appendChild(wizardElement);
    }

    similarList.innerHTML = ``;
    similarList.appendChild(fragment);
  };
})();
