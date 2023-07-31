//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let a = 0;
let b = 0;

for(i = 1; i <= 500; i++){
  a += i;
  b++;
}
let resultat = a / b;
console.log("середнє арифметичне " + Number.parseInt(resultat));