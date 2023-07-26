//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
let userAnswerFirst = parseInt(prompt("input first number?"));
let userAnswerSecondary = parseInt(prompt("input secondary number?"));

if (userAnswerSecondary % userAnswerFirst === 0) {
  console.log(`${userAnswerFirst} є дільником ${userAnswerSecondary }.`);
} else {
  console.log(`${userAnswerFirst } не є дільником ${userAnswerSecondary }.`);
}

if (userAnswerFirst % userAnswerSecondary === 0) {
  console.log(`${userAnswerSecondary } є дільником ${userAnswerFirst }.`);
} else {
  console.log(`${userAnswerSecondary } не є дільником ${userAnswerFirst }.`);
}
