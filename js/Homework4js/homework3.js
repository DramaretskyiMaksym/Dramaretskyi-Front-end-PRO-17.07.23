//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
let userAnswerFirst = parseInt(prompt("input first number?"));
let userAnswerSecondary = parseInt(prompt("input secondary number?"));

if (userAnswerFirst % userAnswerSecondary === 0) {
  console.log(`${userAnswerSecondary} є дільником ${userAnswerFirst}.`);
} else {
  console.log(`${userAnswerSecondary} не є дільником ${userAnswerFirst}.`);
}
