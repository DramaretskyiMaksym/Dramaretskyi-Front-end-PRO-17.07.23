document.getElementById('data-b').textContent = moment('1999-02-13').format('MMMM Do YYYY, h:mm:ss a'); // February 8th 2024, 11:09:46 pm
let dataBElem = document.getElementById('data-b');


dataBElem.style.display = 'flex'
dataBElem.style.alignItems = 'center';
dataBElem.style.justifyContent = 'center';

dataBElem.style.maxWidth = '400px';
dataBElem.style.color = 'blue';
dataBElem.style.backgroundColor = 'rgb(211, 183, 214);';
dataBElem.style.border = '2px solid blue';
dataBElem.style.borderRadius = '10px';
dataBElem.style.padding = '10px 20px';
dataBElem.style.marginTop = '60px';
dataBElem.style.marginLeft = '100px'

function submitForm() {
  const birthdayInput = document.getElementById('birthdayInput').value;
  const errorText = document.getElementById('errorText');
  const outputText = document.getElementById('output');

  // Проверка формата ввода с использованием регулярного выражения
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(birthdayInput)) {
    errorText.textContent = 'Invalid date format. Please use YYYY-MM-DD.';
    return;
  }

  // Преобразование введенной даты с использованием moment.js
  const formattedBirthday = moment(birthdayInput).format('MMMM Do YYYY');
  
  // Очистка ошибки и вывод результата
  errorText.textContent = '';
  outputText.textContent = `Formatted birthday: ${formattedBirthday}`;
}