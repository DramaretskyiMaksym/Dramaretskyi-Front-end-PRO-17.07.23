//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const iNumber=(parseFloat(prompt("Введите число"))) // Ваше натуральне число
const divisors = [];

for (let i = 1; i <= iNumber; i++) {
  if (iNumber % i === 0) {
    divisors.push(i);
  }
}
console.log(`Дільники числа ${iNumber}: ${divisors.join(', ')}`);
