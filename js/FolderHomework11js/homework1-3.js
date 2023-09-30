/*
Написать функцию заполнения пользовательскими данными двумерного массива.
Длину основного массива и внутренних массивов задаёт пользователь.
Значения всех элементов всех массивов задаёт пользователь.
*/

function two_DimensionalArray(){
  //Спрашиваем у пользователя какая длина основного массива и внутренних массивов
  const rowsArray = parseInt(prompt("Enter the number of rows in a two-dimensional array:"));
  const columnsArray = parseInt(prompt("enter the number of columns in a two-dimensional array:")); 
  
  // Создаю двумерный массив с указанными размерами
  const twoDArray = new Array(rowsArray);

  // Заполнение внутренних массивов значениями, введенными пользователем
  for (let i = 0; i < rowsArray; i++) {
    twoDArray[i] = new Array(columnsArray);

    for (let j = 0; j < columnsArray; j++) {
      twoDArray[i][j] = prompt(`Введите значение для элемента [${i}][${j}]:`);
    }
  }

  return twoDArray;
}

const my2DArray = two_DimensionalArray();
console.log('Заполненный двумерный массив:', my2DArray);