//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.

let arra = [];

let number = parseInt(prompt(" input length arr"));

for (let i = 0; i < number; i++){
  let digit = parseInt(prompt("input number #" + (i+1)));
  arr.push(digit);
}
const sortedNumbers = [].concat(arra).sort((a, b) => a - b);

document.write("<p>"+ "arr big" + sortedNumbers + "</p>");
document.write("<p>" + "arr то что ввел пользователь"+ arra  + "</p>");

sortedNumbers.splice(1, 3);

document.write("<p>"+ " Удаленные элементы в массиве с 2 по 4 "+ "-"+ sortedNumbers + "</p>");


//Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

//Знайти суму та кількість позитивних елементів.
let sum = 0;
let positiveCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    positiveCount++;
  }
}
console.log("Сума позитивних елементів:", sum);
console.log("Кількість позитивних елементів:", positiveCount);


//Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minElement) {
    minElement = arr[i];
    minIndex = i;
  }
}

console.log("Мінімальний елемент:", minElement);
console.log("Порядковий номер:", minIndex);


//Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
    maxIndex = i;
  }
}

console.log("Максимальний елемент:", maxElement);
console.log("Порядковий номер:", maxIndex);


//Визначити кількість негативних елементів.
let negativeCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativeCount++;
  }
}

console.log("Кількість негативних елементів:", negativeCount);


//Знайти кількість непарних позитивних елементів.
let oddPositiveCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    oddPositiveCount++;
  }
}

console.log("Кількість непарних позитивних елементів:", oddPositiveCount);



//Визначити кількість парних позитивних елементів.
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let count = 0;

for (const num of array) {
    if (num > 0 && num % 2 === 0) {
        count++;
    }
}

console.log(`Кількість парних позитивних елементів: ${count}`);

//Знайти суму парних позитивних елементів.
let evenPositiveSum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    evenPositiveSum += arr[i];
  }
}

console.log("Сума парних позитивних елементів:", evenPositiveSum);




//Визначити кількість парних позитивних елементів.
const ar = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let coun = 0; // Лічильник парних позитивних елементів

for (const num of ar) {
    if (num > 0 && num % 2 === 0) {
        coun++;
    }
}

console.log(`Кількість парних позитивних елементів: ${coun}`);





//Знайти добуток позитивних елементів.
let positiveProduct = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveProduct *= arr[i];
  }
}

console.log("Добуток позитивних елементів:", positiveProduct);



//Знайти найбільший серед елементів масиву, решту занулити.
let maxElement1 = array[0];
let maxIndex1 = 0;

for (let i = 1; i < array.length; i++) {
  if (arr[i] > maxElement1) {
    maxElement1 = arr[i];
    maxIndex1 = i;
  }
}
    // Занулення решти елементів
for (let i = 0; i < array.length; i++) {
  if (i !== maxIndex1) {
    arr[i] = 0;
  }
}

console.log("Масив після занулення:", array);




