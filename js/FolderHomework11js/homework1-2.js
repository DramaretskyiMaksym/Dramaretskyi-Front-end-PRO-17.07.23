/*
Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
В переменной znak может быть: +, -, *, /, %, ^ (степень).
Вывести результат математического действия, указанного в переменной znak.
Оба числа и знак получаются от пользователя.
*/

function doMath(x, znak, y){
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y !== 0){
        return x / y;
      }else {
        return "You can't divide by zero"
      }
    case "%":
      return x / y;
    case "^":
      return Math.pow(x,y);
    default:
      return "Error! incorrect";
  }
}

const x = parseFloat(prompt("PLEASE! Input first value x:"));
const znak = (prompt("PLEASE! Input mathematical operator (+, -, *, /, %, ^):"));
const y = parseFloat(prompt("PLEASE! Input secondary value y:"));

const mathematicalResultat = doMath(x, znak, y);

console.log("mathematical resultat " + "= " + mathematicalResultat);
