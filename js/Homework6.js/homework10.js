//Визначити кількість його парних дільників
let inputNumber = (parseFloat(prompt("Ведите число"))); // Ваше натуральне число
let countOfEvenDivisors = 0;

for (let i = 1; i <= inputNumber; i++) {
  if (inputNumber % i === 0 && i % 2 === 0) {
    countOfEvenDivisors++;
  }
}
console.log(`Кількість парних дільників числа ${inputNumber} ${countOfEvenDivisors}`);
