//ДЗ №17 - 3/4

//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const numberOfDigits = 10;

document.getElementById('table').addEventListener('click', function(){
  const createElement = document.getElementById('createElement');
  
  for (let i = 1; i <= numberOfDigits; i++) {
      const row = document.createElement('tr');
      for (let j = 1; j <= numberOfDigits; j++) {
          const cell = document.createElement('td');
          cell.textContent = (i - 1) * 10 + j;
          row.appendChild(cell);
      }
      createElement.appendChild(row);
  }

})
