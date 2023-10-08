/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
Ступінь передається як другий аргумент у функцію
pow(num, degree)
*/

function pow(num, degree) {
  // Базовий випадок: якщо ступінь дорівнює 0, то будь-яке число в ступені 0 дорівнює 1
  if (degree === 0) {
      return 1;
  }
  if (degree === 1) {
      return num;
  }

  let halfPow = pow(num, Math.floor(degree / 2));
  return degree % 2 === 0 ? halfPow * halfPow : halfPow * halfPow * num;
}

// Приклад використання:
const result = pow(2, 3); // 2^3 = 8
console.log(result);
