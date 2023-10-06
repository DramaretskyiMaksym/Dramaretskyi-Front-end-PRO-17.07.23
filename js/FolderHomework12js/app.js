//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];
let valueToRemove = 5;

/*
Ця функція використовує indexOf для знаходження індексу item в масиві.
Якщо індекс не -1 (тобто, якщо елемент знайдено), то використовується splice
для видалення одного елемента з масиву за вказаним індексом.
*/
function removeElement(array, item){
  const index = array.indexOf(item);
  
  if (index !== -1){
    array.splice(index, 1);//1 - це кількість елементів, які слід видалити починаючи з цього індексу.
  }
}

removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]