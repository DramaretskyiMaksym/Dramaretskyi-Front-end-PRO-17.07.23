/*
Написати функцію generateList(array), 
яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів:

Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3])
то робити вкладений список. Для перевірки масиву використовуйте Array.isArray()
*/

function generateList(array, container) {

  const ul = document.createElement('ul');
  container.appendChild(ul);

  array.forEach(function(value) {
      const li = document.createElement('li');
      ul.appendChild(li);

      if (Array.isArray(value)) {
          generateList(value, li);
      } else {
          li.textContent = value;
      }
  });
}



const showList = document.getElementById('showList');
const wrapperList = document.getElementById('wrapperList');
let isOpen = false;


showList.addEventListener('click', function() {
  if (isOpen) {
    wrapperList.innerHTML = '';
  } else {
      const data = [1, 2, 3, [1.1, 1.2, 1.3], 3];
      generateList(data, wrapperList);
  }

  isOpen = !isOpen;
});











