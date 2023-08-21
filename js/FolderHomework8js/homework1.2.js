const arr12 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositive = 0;
let countPositive = 0;
let minElementss = arr12[0];
let minIndexxx = 0;
let maxElementtt = arr12[0];
let maxIndexxx = 0;
let countNegative = 0;
let countOddPositive = 0;
let countEvenPositive = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productPositive = 1;
let largestElement = arr12[0];

for (let i = 0; i < arr12.length; i++) {
  const num = arr12[i];
  
  if (num > 0) {
    sumPositive += num;
    countPositive++;
    productPositive *= num;

    if (num % 2 === 0) {
      countEvenPositive++;
      sumEvenPositive += num;
    } else {
      countOddPositive++;
      sumOddPositive += num;
    }
  } else if (num < 0) {
    countNegative++;
  }

  if (num < minElementss) {
    minElementss = num;
    minIndexxx = i;
  }

  if (num > maxElement) {
    maxElementtt = num;
    maxIndexxx = i;
  }

  if (num > largestElement) {
    largestElement = num;
  }
}

arr12.forEach((num, i) => {
  if (num !== largestElement) {
    arr12[i] = 0;
  }
});

console.log("Сума позитивних елементів:", sumPositive);
console.log("Кількість позитивних елементів:", countPositive);
console.log("Мінімальний елемент:", minElementss, "Порядковий номер:", minIndexxx);
console.log("Максимальний елемент:", maxElementtt, "Порядковий номер:", maxIndexxx);
console.log("Кількість негативних елементів:", countNegative);
console.log("Кількість непарних позитивних елементів:", countOddPositive);
console.log("Кількість парних позитивних елементів:", countEvenPositive);
console.log("Сума парних позитивних елементів:", sumEvenPositive);
console.log("Сума непарних позитивних елементів:", sumOddPositive);
console.log("Добуток позитивних елементів:", productPositive);
console.log("Масив після занулення решти елементів:", arr12);