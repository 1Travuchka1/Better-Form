/**
 * @file dom-elements.js
 * @description Централізоване керування DOM-елементами форми ПІБ користувача.
 *
 * @module DOMElements
 */

export const domElements = {
  // - - - -------> .1. Секції:
  stepOne: document.getElementById('step-1'),
  stepTwo: document.getElementById('step-2'),

  // - - - -------> .2. Форми:
  formStepOne: document.getElementById('form-step-1'),
  formStepTwo: document.getElementById('form-step-2'),

  // - - - -------> .3. Поля першої форми:
  firstName: document.getElementById('first-name'),
  lastName: document.getElementById('last-name'),
  middleName: document.getElementById('middle-name'),

  // - - - -------> .4. Поля другої форми:
  street: document.getElementById('street'),
  houseNumber: document.getElementById('house-number'),
  phone: document.getElementById('phone'),

  // - - - -------> .5. Кнопки форм:
  buttonBack: document.querySelector('.btn-back'),
};
