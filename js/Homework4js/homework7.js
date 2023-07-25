/*
Дано тризначне число.
  Чи правда, що всі цифри однакові?
  Чи є серед цифр цифри однакові?
*/

// Запитати тризначне число від користувача
const number = parseInt(prompt("Введіть тризначне число:"));

// Розділити число на цифри (сотні, десятки та одиниці)
const hundreds = Math.floor(number / 100);
const tens = Math.floor((number % 100) / 10);
const units = number % 10;

// Перевірка: чи всі цифри однакові
const isAllDigitsEqual = hundreds === tens && tens === units;

// Перевірка: чи є серед цифр хоча би дві однакові
const isAnyDigitEqual = hundreds === tens || tens === units || hundreds === units;

// Виведення результатів
console.log(`Чи всі цифри однакові: ${isAllDigitsEqual}`);
console.log(`Чи є серед цифр хоча би дві однакові: ${isAnyDigitEqual}`);
