//ДЗ №17 - 1/4

/*
Є текстове поле на сторінці.
При фокусі на цьому полі збоку з'являється <div> з інформацією.
При зникненні фокуса - так само пропадає
*/


document.getElementById('elem').addEventListener('focus', function(){
  const wrapper = document.getElementById('wrapper');
  let div = document.getElementById('wrapper');
  if (!div) {
    div = document.createElement('div');
    wrapper.appendChild(div);
  }
    div.classList.add('right')
    div.textContent = "Hello World";
    wrapper.style.display = 'block';
});
/* Сделал проверку по if/
ибо ранее у меня с каждой попыткой увеличевался на (один) элемент "Hello World"
возможно конечно был какой-то еще способ реализовать, но я домумал такой.
*/

document.getElementById('elem').addEventListener('blur', function(){
  wrapper.style.display = 'none';
});














