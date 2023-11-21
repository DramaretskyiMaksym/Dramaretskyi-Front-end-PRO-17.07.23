/*
Livecoding и Домашнее задание
  Реализовать подобие интернет-магазина.
  В левой части страницы - перечень категорий.
  При клике на категорию выводится список товаров этой категории.
  Клик на товар - информацию о товаре.
  В информации товара - кнопка “купить”
  При клике на “купить”, под списком товаров появляется уведомление, что товар успешно куплен
*/

function showCategories(){
  const parentElement = document.getElementById('left')

  for( let categoryKey in categories){
    const category = categories[categoryKey];
    let element = document.createElement('div');

    element.textContent = category.name;
    element.setAttribute('data-category', categoryKey);
    parentElement.appendChild(element);
  }
}
showCategories();

function showProducts(products, category){
  const parentElement = document.getElementById('center');
  parentElement.innerHTML = '';

  for(let product of products){
    let element = document.createElement('div');
    element.textContent = `${product.name} $ ${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category);

    parentElement.appendChild(element);
  }
}


let isRightBlockOpen = false;

function showRBlock(products){
  const parentElement = document.getElementById('right');
  parentElement.innerHTML = '';

  let element = document.createElement('div');
  let button = document.createElement('button');
  button.textContent = 'Buy';

  element.innerText = `Name: ${products.name}\n Price: $${products.price}\n Description: \n${products.description}`;
  element.setAttribute('data-right-id', products.id);
  parentElement.appendChild(element);
  element.append(button);
  isRightBlockOpen = true;

  const spanElement = document.getElementById('spanAllBuy');
  spanElement.innerHTML = '';

  let boughtAll = document.createElement('span');

  boughtAll.textContent = 'Congratulations! All bought';
  spanElement.style.display = 'block';
  boughtAll.style.backgroundColor = 'green';
  boughtAll.style.color = 'white';
  spanElement.style.marginLeft = '800px';
  spanElement.style.marginTop = '30px';

  spanElement.appendChild(boughtAll);
  spanElement.style.display = 'none';
  boughtAll.style.padding = '25px';

  button.addEventListener('click', function(){
    button.style.display = 'none';
    spanElement.style.display = 'block';
  });
}

document.getElementById('left').addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'){
    const categoryKey = event.target.getAttribute('data-category');
    if(isRightBlockOpen){
      const rightBlock = document.getElementById('right');
      rightBlock.style.display = 'none';
      isRightBlockOpen = false;
    }
    const categoryProducts = categories[categoryKey].products
    showProducts(categoryProducts, categoryKey);
  }
});

document.getElementById('center').addEventListener('click', event => {
  const productId = event.target.getAttribute('data-product');
  const categoryKey = event.target.getAttribute('data-category');
  const products = categories[categoryKey].products.find(products => products.id == productId);
  
  showRBlock(products);
});

document.getElementById('center').addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'){
    const rightBlock = document.getElementById('right');
    rightBlock.style.display = 'block';
  }
});

document.getElementById('left').addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'){
    const rightBlock = document.getElementById('right');
    rightBlock.style.display = 'none';
    isRightBlockOpen = false;
    const leftNoneAllBuy = document.getElementById('spanAllBuy');
    leftNoneAllBuy.style.display = 'none';
  }
});

