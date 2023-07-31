//Знайти суму його парних дільників

const numberinput = (parseFloat(prompt("Введите натуральное число"))); // Ваше натуральне число
let sumOfEvenDivisors = 0;

for (let i = 1; i <= numberinput; i++) {
  if (numberinput % i === 0 && i % 2 === 0) {
    sumOfEvenDivisors += i;
  }
}
console.log(`Сума парних дільників числа ${numberinput}: ${sumOfEvenDivisors}`);
