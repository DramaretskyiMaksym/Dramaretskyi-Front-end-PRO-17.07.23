/*
Создать функцию, которая убирает из строки все символы,
которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])'
вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь
*/
function removeCharacters(inputString, charactersToRemove) {
  // Преобразуем массив символов в регулярное выражение
  const regex = new RegExp(`[${charactersToRemove.join('')}]`, 'g');//g означает "глобальный поиск".все совпадения в строке, а не только первое.

  // Удаляем символы из строки с помощью replace
  const resultString = inputString.replace(regex, '');

  return resultString;
}

// Запрос данных у пользователя
const inputString = prompt('Введите строку:');
const charactersToRemove = prompt('Введите символы для удаления (без разделителей):').split('');

// Вызов функции и вывод результата
const charactersResult = removeCharacters(inputString, charactersToRemove);
console.log(`Результат: ${charactersResult}`);
