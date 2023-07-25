//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

const number = parseInt(prompt("input number:"));

let lastDigit = number % 10;

if(lastDigit % 2 === 0 ){
  alert(`Остання цифра${lastDigit} є парною.`)
}else {
  alert(`Остання цифра ${lastDigit} є непарною.`)
}