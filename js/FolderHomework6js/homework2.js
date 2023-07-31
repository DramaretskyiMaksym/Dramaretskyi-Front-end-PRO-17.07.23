//Вивести квадрати чисел від 10 до 20
let squares = "";
let twentyFor = 20;
for( let i = 10; i <= twentyFor; i++){
  squares += i * i;
  if(i < twentyFor){
    squares += ", ";
  }
}
console.log(squares);