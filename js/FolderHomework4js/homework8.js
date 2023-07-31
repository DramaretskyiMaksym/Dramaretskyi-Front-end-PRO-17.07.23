// //Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
// const number = parseInt(prompt("Введіть шестизначне число:"));

// // Розділити число на окремі цифри
// const digit1 = Math.floor(number / 100000);
// const digit2 = Math.floor((number % 100000) / 10000);
// const digit3 = Math.floor((number % 10000) / 1000);
// const digit4 = Math.floor((number % 1000) / 100);
// const digit5 = Math.floor((number % 100) / 10);
// const digit6 = number % 10;

// // Перевірка: чи є число дзеркальним
// const isPalindrome = digit1 === digit6 && digit2 === digit5 && digit3 === digit4;

// // Виведення результату
// if (isPalindrome) {
//   console.log(`${number} є дзеркальним числом.`);
// } else {
//   console.log(`${number} не є дзеркальним числом.`);
// }