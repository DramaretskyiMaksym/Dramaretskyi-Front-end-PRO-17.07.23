//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.
let arra = [];

let number = parseInt(prompt(" input length arr"));

for (let i = 0; i < number; i++){
  let digit = parseInt(prompt("input number #" + (i+1)));
  arra.push(digit);
}
const sortedNumbers = [].concat(arra).sort((a, b) => a - b);

document.write("<p>"+ "arr big" + sortedNumbers + "</p>");
document.write("<p>" + "arr то что ввел пользователь"+ arra  + "</p>");

sortedNumbers.splice(1, 3);

document.write("<p>"+ " Удаленные элементы в массиве с 2 по 4 "+ "-"+ sortedNumbers + "</p>");