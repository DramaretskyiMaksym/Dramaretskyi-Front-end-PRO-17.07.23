  //ДЗ №17 - 2/4

/*
На сторінці є дві кнопки.
При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням).
Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо/
*/

document.getElementById('getLinkUser').addEventListener('click', function(){
  const userLink = prompt("Please! input your link")

  if(userLink){
    clickLinkUser.style.display = 'block'
    
    if(!userLink.startsWith('http://') && !userLink.startsWith('https://')){
      docu = 'https://' + userLink;
      userLinkSaved = docu;
    }else {
      userLinkSaved = userLink;
    }
  }

});

document.getElementById('clickLinkUser').addEventListener('click', function(){
  if (userLinkSaved) {
      window.location.href = userLinkSaved;
  }
  clickLinkUser.style.display = 'none'
})
