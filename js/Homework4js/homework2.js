//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

// Запросимо відстань у футах від користувача
let distanceInFeet = parseFloat(prompt("Введіть відстань у футах:"));

// Переведемо відстань з футів в кілометри
let distanceInKilometers = distanceInFeet * 0.305 / 1000;

// Запросимо задану відстань у кілометрах від користувача
let distanceInKilometersGiven = parseFloat(prompt("Введіть задану відстань у кілометрах:"));


// Порівняємо відстані та виведемо результат
if (distanceInKilometers < distanceInKilometersGiven) {
  console.log("Відстань у футах менша.");
  alert("Відстань у футах менша.");
} else if (distanceInKilometers > distanceInKilometersGiven) {
  console.log("Відстань у кілометрах менша.");
  alert("Відстань у кілометрах менша.");
} else {
  console.log("Відстані однакові.");
  alert("Відстані однакові.");
}
