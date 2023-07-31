//Дано два різні числа. Визначити, яке з них більше, а яке менше.
let userAnswerFirst = parseInt(prompt("input first number?"));
let userAnswerSecondary = parseInt(prompt("input secondary number?"));

if (userAnswerFirst > userAnswerSecondary){
  alert("First Answer More");
}else if(userAnswerFirst < userAnswerSecondary) {
  alert("Secondary Answer More ")
}else{
  alert("ОНИ РАВНЫ")
}
