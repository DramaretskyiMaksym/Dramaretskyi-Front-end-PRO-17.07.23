//Вивести на сторінку в один рядок через кому числа від 10 до 20
let step = 10;
let step2 = 20;
let numberString = "";

for(step; step <= step2; step++){
  numberString += step;
  if(step < step2){
    numberString += ", "
}
}

console.log(numberString);