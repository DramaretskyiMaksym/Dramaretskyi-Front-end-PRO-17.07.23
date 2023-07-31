//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const n = parseInt(prompt("Введите целое число")); // Ваше ціле число

for (let i = 1; i <= 100; i++) {
  const square = i * i;
  if (square <= n) {
    console.log(i);
  }
}
