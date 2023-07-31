/*
Напишіть скрипт, який рахує кількість секунд за годину.

  Запросити у користувача кількість годин
  Порахувати скільки секунд у цій кількості годин
  Записати обчислене значення у змінну
  Вивести цю змінну користувачу в alert
*/

// Запросимо у користувача кількість годин
const hours = prompt('Enter the number of hours:');

// Перевіримо, чи користувач ввів число, перетворимо введене значення на ціле число
const parsedHours = parseInt(hours);


// Перевіримо, чи введене значення є числом і не NaN
if (!iNaNs(parsedHours)) {
  // Порахуємо кількість секунд у цій кількості годин
  const secondsInHour = parsedHours * 3600; // 1 година = 3600 секунд

  // Виведемо результат користувачу в alert
  alert(`Кількість секунд за ${parsedHours} годин(и): ${secondsInHour} секунд.`);
} else {
  // Якщо введено некоректне значення або відмінено введення
  alert('Будь ласка, введіть коректне число годин.');
}