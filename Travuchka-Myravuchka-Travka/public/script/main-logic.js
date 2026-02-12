/**
 * @file main-logic.js
 * @description Головна логіка мульти-крокової форми.
 *
 * @module MainLogic
 */

import { domElements } from './dom-elements.js';
import { goToStepOne, goToStepTwo } from './page-steps.js';
import { validateStepOne, validateStepTwo } from './validation.js';

domElements.formStepOne.addEventListener('submit', event => {
  event.preventDefault();

  const firstName = domElements.firstName.value.trim();
  const lastName = domElements.lastName.value.trim();
  const middleName = domElements.middleName.value.trim();

  const isValid = validateStepOne(firstName, lastName, middleName);

  if (isValid) {
    goToStepTwo(domElements.stepOne, domElements.stepTwo);
    console.log('Крок 1 завершено:', { firstName, lastName, middleName });
  } else {
    alert(
      'Будь ласка, заповніть всі поля правильно. Кожне поле має містити мінімум 2 символи, а загальна довжина ПІБ — мінімум 5 символів.'
    );
  }
});

domElements.formStepTwo.addEventListener('submit', event => {
  event.preventDefault();

  const street = domElements.street.value.trim();
  const houseNumber = domElements.houseNumber.value.trim();
  const phone = domElements.phone.value.trim();

  const isValid = validateStepTwo(street, houseNumber, phone);

  if (isValid) {
    console.log('Форма успішно відправлена!');
    console.log('Адреса:', { street, houseNumber, phone });
    alert('Дякуємо! Ваші дані успішно відправлено.');
  } else {
    alert('Будь ласка, заповніть всі поля.');
  }
});

domElements.buttonBack.addEventListener('click', () => {
  goToStepOne(domElements.stepOne, domElements.stepTwo);
});
