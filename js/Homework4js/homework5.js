//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let userAnswerFirst = parseInt(prompt("input first number?"));
let userAnswerSecondary = parseInt(prompt("input secondary number?"));

if (userAnswerFirst > userAnswerSecondary) {
  console.log(`MORE FIRST:${userAnswerFirst}`);
} else if( userAnswerFirst < userAnswerSecondary) {
  console.log(`MORE SECONDARY: ${userAnswerSecondary}`);
}else{
  console.log(`they are equal`);
}