/**
 * @file page-steps.js
 * @description Функції для керування переходами між кроками форми.
 *
 * @module PageSteps
 */

/**
 * Показує певний крок форми, ховаючи всі інші.
 *
 * @param {HTMLElement} stepToShow - Крок який потрібно показати
 * @param {HTMLElement} stepToHide - Крок який потрібно сховати
 */
export function switchStep(stepToShow, stepToHide) {
  stepToHide.classList.remove('active');
  stepToShow.classList.add('active');
}

/**
 * Переходить на другий крок форми.
 *
 * @param {HTMLElement} stepOne - Перший крок
 * @param {HTMLElement} stepTwo - Другий крок
 */
export function goToStepTwo(stepOne, stepTwo) {
  switchStep(stepTwo, stepOne);
}

/**
 * Повертається на перший крок форми.
 *
 * @param {HTMLElement} stepOne - Перший крок
 * @param {HTMLElement} stepTwo - Другий крок
 */
export function goToStepOne(stepOne, stepTwo) {
  switchStep(stepOne, stepTwo);
}
