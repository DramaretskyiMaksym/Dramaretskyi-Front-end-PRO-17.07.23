//Working categories
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
  button.textContent = 'Order product';
  button.className = 'button-order'
  element.className = 'dynamic-element'
  element.innerHTML = `<div> <string> <span>Name:</span> ${products.name}</string> <br> <string> <span>Price: </span> $${products.price}</string> <br> <string> <span>Description:</span> ${products.description}</string></div>`;
  element.setAttribute('data-right-id', products.id);

  parentElement.appendChild(element);
  element.append(button);
  isRightBlockOpen = true;

  button.addEventListener('click', function(){
    button.style.display = 'none';
    btn.style.display = 'flex';
    mainForm.style.display = 'flex';
    right.style.display = 'none'
    showInfoForForm = element.innerHTML = `<div> <string> <span>Name:</span> ${products.name}</string> <br> <string> <span>Price: </span> $${products.price}</string> <br> <string> <span>Description:</span> ${products.description}</string></div>`;
    titleForm.innerText = 'Information about your order';
  });
}



document.getElementById('left').addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'){
    const categoryKey = event.target.getAttribute('data-category');
    let centerBlockDiv = document.getElementById('center');
    centerBlockDiv.style.display = 'block';
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
    mainForm.style.display = 'none';
  }
});

document.getElementById('left').addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'){
    const rightBlock = document.getElementById('right');
    rightBlock.style.display = 'none';
    isRightBlockOpen = false;
    const leftNoneAllBuy = document.getElementById('spanAllBuy');
    leftNoneAllBuy.style.display = 'none';
    mainForm.style.display = 'none';
  }
});

validationMessageUserName.style.display = 'inline-block';
validationMessageUserName.style.marginRight = '136px';

validationMessageUserCity.style.display = 'inline-block';
validationMessageUserCity.style.marginRight = '300px';


validationMessageMail.style.display = 'inline-block';
validationMessageMail.style.marginRight = '220px';


//Валидность
function validateForm() {
  const formElements = document.forms.mainForm.elements;
  const fullName = formElements.nameUser.value.trim();
  if (fullName.length < 5) {
    validationMessageUserName.style.color = 'red';
    validationMessageUserName.style.marginRight = '88px';
    validationMessageUserName.innerText = `The name must contain more than 5 words`
    return false;
  }



  if (formElements.citys.value === '0') {
    validationMessageUserCity.innerText = `You haven’t chosen a city`;
    validationMessageUserCity.style.marginRight = '214px';
    validationMessageUserCity.style.color = 'red';
    return false;
  }

  if (!formElements.numberMail.checkValidity()) {
    alert('Please enter a valid number for MAIL*.');
    return false;
  }

  const quantityMailValue = parseInt(formElements.numberMail.value, 10);

  if (isNaN(quantityMailValue) || quantityMailValue <= 0) {
    validationMessageMail.style.color = 'red';
    validationMessageMail.style.marginRight = '118px';
    validationMessageMail.innerText = `Input is a positive number and not  "${formElements.numberMail.value}"`
    return false;
  }

  const paymentMethod = formElements.pay.value;
  if (!paymentMethod) {
    alert('Please choose a payment method.');
    return false;
  }

  if (!formElements.numberQuantity.checkValidity()) {
    alert('Please enter a valid quantity.');
    return false;
  }
  const quantityValue = parseInt(formElements.numberQuantity.value, 10);
  if (isNaN(quantityValue) || quantityValue <= 0) {
    alert(`Please enter a valid  "${formElements.numberQuantity.value}"  non-negative quantity of Goods*.`);
    return false;
  }

  return true;
}



//Форма
function getCity (citys) {
  const selectedCities = [];

  for (let i = 0; i < citys.length; i++) {
    if (citys[i].checked) {
      selectedCities.push(citys[i].value)
    }
  };

  return selectedCities;
}

document.getElementById('btn').addEventListener('click', () => {
  const formElements = document.forms.mainForm.elements;
  const parentElementDiv = document.getElementById('showResultatForm');

  function showAddAnswer(label, value,) {
    let spanElement = document.createElement('span');
    spanElement.innerHTML = `<h4>${label}:</h4><div>${value}</div>`;
    parentElementDiv.appendChild(spanElement);
  }

  if (validateForm()){
    showResultatForm.style.display = 'flex';
    mainForm.style.display = 'none';
    btn.style.display = 'none';
    showAddAnswer('Order information', showInfoForForm);
  
    showAddAnswer('Full Name User', formElements.nameUser.value);
  
    showAddAnswer('City Usera', formElements.citys.value);
  
    showAddAnswer('Number mail User', formElements.numberMail.value);
  
    showAddAnswer('Pay', formElements.pay.value);
  
    showAddAnswer('Quantity', formElements.numberQuantity.value);

    showAddAnswer('Comment', formElements.commet.value);
  }
});