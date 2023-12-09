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




//Валидность
function validateForm() {
  const formElements = document.forms.mainForm.elements;

  const fullName = formElements.nameUser;

  if (fullName) {
    const fullNameValueValid = fullName.value.trim();

    if (fullNameValueValid.length < 5){
      validationMessageUserName.classList.add('userNameValueErrorMinFiveLetter');
      validationMessageUserName.innerText = 'Please, input  more 5 letter'
      username.classList.remove ('invalid-element')
      return;
    }
    if (fullNameValueValid.match(/^A-Za-z]5+/) || fullNameValueValid === '') {
      validationMessageUserName.innerText = 'Invalid input. Please enter only letters for name.';
      validationMessageUserName.classList.remove('userNameValueErrorMinFiveLetter');
      validationMessageUserName.classList.add('userNameValueErrorInvalidInput');
      username.classList.remove ('invalid-element')
      return;
    }
    if (/[0-9]+/.test(fullNameValueValid) || fullNameValueValid === '') {
      fullName.classList.add('invalid-element');
      validationMessageUserName.innerText = 'Invalid input. Please enter only letters for name.';
      validationMessageUserName.classList.remove('userNameValueErrorMinFiveLetter');
      validationMessageUserName.classList.add('userNameValueErrorInvalidInput');
      username.classList.remove('invalid-element')
      return;
    }

    validationMessageUserName.classList.remove('userNameValueErrorInvalidInput');
    validationMessageUserName.innerText = `Allowed`;

    validationMessageUserName.classList.remove('required-label');
    validationMessageUserName.classList.add('allowedActivetitle');
    username.classList.add('allowed');
  } else {
      validationMessageUserName.classList.add('userNameValueError');
      validationMessageUserName.innerText = 'Element with id "nameInput" not found.';
    }




  if (formElements.citys.value === '0') {
    validationMessageUserCity.innerText = `You haven’t chosen a city`;
    validationMessageUserCity.classList.remove('validationMessageUserCity');
    validationMessageUserCity.classList.add('validationMessageUserCityError')
    return;
  } else {
    formElements.citys.classList.add('allowed');
    validationMessageUserCity.innerText = 'Allowed';
    validationMessageUserCity.classList.remove('required-label-select');
    validationMessageUserCity.classList.add('validationMessageUserCityAllowed');
  }


  //FormaValidUserMailNumber
  const quantityMailValue = document.getElementById('validationMessageMail');
  if (quantityMailValue){
    const inputValueMail = quantityMailValue.value.trim();
    if(inputValueMail.match(/^-/) || isNaN(inputValueMail) || inputValueMail === '' || inputValueMail === '0' || inputValueMail.startsWith('0')){
      // alert('Invalid input. Please enter a positive number.');

      checkMailNumber.classList.add('invalid-element');
      checkMailNumber.innerText = `Invalid input. Please enter only digits`;
      return;
    }
    const numberRegex = /^\d+$/;

    if (numberRegex.test(inputValueMail)) {
      username.classList.add('allowed');
    } else {
      console.log('Invalid input. Please enter only digits.');
    }
    checkMailNumber.innerText = `Allowed`;
    checkMailNumber.classList.remove('invalid-element');
    validationMessageMail.classList.add('allowed');
  } else {
    console.log('Element with id "numberInput" not found.');
  }



  //FormaValidUserPayPoint
  const paymentMethod = formElements.pay.value;

  if (!paymentMethod) {
    console.log('Please choose a payment method.');
    return;
  }




  const goodsSelectQuantityValue = document.getElementById('goodsSelectQuantity');
  if (goodsSelectQuantityValue){
    const inputValueGoods = goodsSelectQuantityValue.value.trim();

    if(inputValueGoods.match(/^-/) || isNaN(inputValueGoods) || inputValueGoods === '' || inputValueGoods === '0' || inputValueGoods.startsWith('0')){
      titleChError.classList.add('titleChError')
      titleChError.innerText = `!Invalid input. Please enter only digits`;
      return;
    }

    const numberRegexValue = /^\d+$/;

    if (numberRegexValue.test(inputValueGoods)) {
      titleChError.innerText = `Allowed`;
      titleChError.classList.add('goodsSelectQuantity');
    } else {
      console.log('Invalid input. Please enter only digits.');
    }
  } else {
    console.log('Element with id "numberInput" not found.');
  }

  return true
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
  console.log('click')

  function showAddAnswer(label, value,) {
    let spanElement = document.createElement('span');
    spanElement.innerHTML = `<h4>${label}:</h4><div>${value}</div>`;
    parentElementDiv.appendChild(spanElement);
  }
  console.log('click 2');

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
    console.log('click 3')
  }
});