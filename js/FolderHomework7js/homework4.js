//Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const inputNumber = parseInt(prompt("Введите число")); // Ваше число для перевірки
const result = isPrime(Math.abs(inputNumber));

if (result) {
  console.log(`${inputNumber} є простим числом.`);
} else {
  console.log(`${inputNumber} не є простим числом.`);
}
