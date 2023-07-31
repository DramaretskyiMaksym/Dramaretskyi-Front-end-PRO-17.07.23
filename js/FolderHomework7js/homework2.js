//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const rate = 40;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const InUAH = dollars * rate;
  console.log(`${dollars} доларів коштують ${InUAH} гривень`);
}
