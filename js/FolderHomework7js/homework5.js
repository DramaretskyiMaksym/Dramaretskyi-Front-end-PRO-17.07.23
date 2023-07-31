//Дано кілька. Визначити, чи можна одержати це число шляхом зведення числа 3 деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
function isPowerOfThree(number) {
  if (number <= 0) {
    return false;
  }

  while (number % 3 === 0) {
    number = number / 3;
  }

  return number === 1;
}

const iNumber = parseInt(prompt("Введите число")); // Ваше число для перевірки
const results = isPowerOfThree(iNumber);

if (results) {
  console.log(`${iNumber} можна отримати шляхом зведення числа 3 у деякий ступінь.`);
} else {
  console.log(`${iNumber} не можна отримати шляхом зведення числа 3 у деякий ступінь.`);
}
