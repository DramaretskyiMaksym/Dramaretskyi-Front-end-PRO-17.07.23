//Вивести суму лише парних чисел у діапазоні від 30 до 80
let sumOfEvens = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumOfEvens += i;
  }
}

console.log(`Сума парних чисел у діапазоні від 30 до 80 дорівнює ${sumOfEvens}`);
