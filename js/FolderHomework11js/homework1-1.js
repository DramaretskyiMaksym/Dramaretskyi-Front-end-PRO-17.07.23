/*
Написать функцию, которая принимает 1 параметр.
При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем,
что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
*/

function functionTakesOneArgument (){
  let totalOneArgument = parseInt(prompt("Inpunt NUMBER? please"));

  function oneArgument(value) {
    totalOneArgument += value
    return totalOneArgument;
  
  }

  return oneArgument;
}

const mySum = functionTakesOneArgument();

alert(mySum(3));
alert(mySum(5));
alert(mySum(20));

