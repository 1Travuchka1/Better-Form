/**
 * @file validation.js
 * @description Функції валідації для мульти-крокової форми.
 *
 * @module Validation
 */

/**
 * Перевіряє, чи всі поля ПІБ заповнені і мають мінімум 2 символи кожне.
 *
 * @param {string} firstName - Ім'я користувача
 * @param {string} lastName - Прізвище користувача
 * @param {string} middleName - По-батькові користувача
 * @returns {boolean} true якщо всі поля валідні, false якщо ні
 */
export function validateStepOne(firstName, lastName, middleName) {
  const fields = [firstName, lastName, middleName];
  const eachFieldValid = fields.every(field => field.length >= 2);

  const totalLength = firstName.length + lastName.length + middleName.length;
  const totalLengthValid = totalLength >= 5;

  return eachFieldValid && totalLengthValid;
}

/**
 * Перевіряє чи всі поля та адреси - заповнені
 *
 * @param {string} phone - номер телефону користувача.
 * @param {string} street - вулиця на якій проживає.
 * @param {string} houseNumber - номер його будинку.
 */
export function validateStepTwo(street, houseNumber, phone) {
  const fields = [street, houseNumber, phone];
  return fields.every(fields => fields.length > 0);
}
