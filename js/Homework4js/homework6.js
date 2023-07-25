/*Дано тризначне число.
    Визначити чи є парною сума його цифр.
    Визначити, чи кратна сума цифр п'яти.
    Визначити чи є добуток його цифр більше 100.
*/


// Запитати тризначне число від користувача
const number = parseInt(prompt("Введіть тризначне число:"));

// Розділити число на цифри (сотні, десятки та одиниці)
const hundreds = Math.floor(number / 100);
const tens = Math.floor((number % 100) / 10);
const units = number % 10;

// Перевірка: чи є парною сума його цифр
const sumOfDigits = hundreds + tens + units;
const isSumOfDigitsEven = sumOfDigits % 2 === 0;

// Перевірка: чи кратна сума цифр п'яти
const isSumOfDigitsMultipleOfFive = sumOfDigits % 5 === 0;


// Проверка  добуток его цифры  большое 100
const productOfDigits = hundreds * tens * units;
const isProductOfDigitsGreaterThan100 = productOfDigits > 100;

// Виведення результатів
console.log(`Чи є парною сума його цифр: ${isSumOfDigitsEven}`);
console.log(`Чи кратна сума цифр п'яти: ${isSumOfDigitsMultipleOfFive}`);
console.log(`Чи є добуток його цифр більше 100: ${isProductOfDigitsGreaterThan100}`);

