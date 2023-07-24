//За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
let  answerUserName = prompt("What's your name?");
alert(`Hello, ${answerUserName}! How are you?`);

let firstNumber = prompt('Write the first number');
let secondNumber = prompt('Write the second number');

let firstToNumber = Number(firstNumber);
let secondToNumber = Number(secondNumber);

let sum = firstToNumber +  secondToNumber;
let diff = firstToNumber - secondToNumber;
let mult = firstToNumber * secondToNumber;
let div = firstToNumber / secondToNumber;

alert ('Calculations are finished!\n'
+ ' ' + firstToNumber + ' ' + '+' + ' ' + secondToNumber + ' ' + '=' + ' ' + sum + '\n'
+ ' ' + firstToNumber + ' ' + '-' + ' ' + secondToNumber + ' ' + '=' + ' ' + diff + '\n'
+ ' ' + firstToNumber + ' ' + '*' + ' ' + secondToNumber + ' ' + '=' + ' ' + mult + '\n'
+ ' ' + firstToNumber + ' ' + '/' + ' ' + secondToNumber + ' ' + '=' + ' ' + div
);


//Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
let NumberOne = prompt("Write the first number, please");
let NumberTwo = prompt("Write the second number, please");

let stringToNumberOne = Number(NumberOne);
let stringToNumberTwo = Number(NumberTwo);
alert(stringToNumberOne === stringToNumberTwo);

//Визначити середнє арифметичне трьох чисел
let firstNumberArithmetically = prompt("first number");
let secondNumberArithmetically = prompt("second number");
let tertiaryNumberArithmetically = prompt("tertiary number");

let one = Number(firstNumberArithmetically);
let two = Number(secondNumberArithmetically);
let three = Number(tertiaryNumberArithmetically);

let sumArithmetically = one + two +  three;
sumArithmetically = sumArithmetically / 3;
alert(sumArithmetically);

//Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
let number = prompt("input five digit number, please");
const digit1 = number % 10;

number = parseInt(number / 10);
const digit2 = number % 10;

number = parseInt(number / 10);
const digit3 = number % 10;

number = parseInt(number / 10);
const digit4 = number % 10;

number = parseInt(number / 10);
const digit5 = number % 10;

console.log(digit5, digit4, digit3, digit2, digit1);