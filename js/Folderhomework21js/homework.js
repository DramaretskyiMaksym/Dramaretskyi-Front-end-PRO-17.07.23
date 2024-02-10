let selectedProductQuantity = 0;
let plusButton;
let minusButton;
let counterElement = document.createElement('div');
let totalOrderAmount = 0;
// Добавьте переменную для отслеживания состояния формы
let isRightBlockOpen = false;
let isFormVisible = false;


//Working categories
let selectedProductId = null; // Добавлено для отслеживания выбранного товара

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

function showRBlock(products) {
  const parentElement = document.getElementById('right');
  parentElement.innerHTML = '';

  let element = document.createElement('div');
  let button = document.createElement('button');
  let addButton = document.createElement('button');
  let plusButton = document.createElement('span');
  let minusButton = document.createElement('span');

  button.textContent = 'choose a product';
  button.className = 'button-order';
  element.className = 'dynamic-element';
  element.innerHTML = `<div> <string> <span>Name:</span> ${products.name}</string> <br> <string> <span>Price: </span> $${products.price}</string> <br> <string> <span>Description:</span> ${products.description}</string></div>`;
  element.setAttribute('data-right-id', products.id);

  addButton.textContent = 'Add to Card';
  addButton.className = 'add-to-card-button';


  plusButton.textContent = '+';
  plusButton.className = 'plus-button';

  minusButton.textContent = '-';
  minusButton.className = 'minus-button';
  
  parentElement.appendChild(element);
  element.append(button);
  element.append(addButton);
  element.append(plusButton);
  element.append(minusButton);

  addButton.addEventListener('click', function(){
    addButton.style.display = 'none';
    plusButton.style.display = 'flex';
    minusButton.style.display = 'flex';
    updateCounter();
    
  });

  
  plusButton.addEventListener('click', function () {
    selectedProductQuantity++;
    updateTotalAmount(products.price);
    updateCounter();
    updateOrderSummary();
  });
  
  minusButton.addEventListener('click', function () {
    if (selectedProductQuantity > 0) {
      selectedProductQuantity--;
      updateTotalAmount(-products.price);
      updateCounter();
    }
  });


  // Создаем элемент и выводим
  let orderSummaryElement = document.getElementById('orderSummary');

  if (!orderSummaryElement) {
    // Создаем элемент, если его еще нет
    orderSummaryElement = document.createElement('div');
    orderSummaryElement.id = 'orderSummary';
    // Добавляем созданный элемент в нужное место в DOM (например, внутрь блока формы)
    // Замените 'ваш-контейнер' на соответствующий селектор или id вашего контейнера
    document.getElementById('showResultatForm').appendChild(orderSummaryElement);
  }

  function updateOrderSummary() {
    // const orderSummaryElement = document.getElementById('orderSummary');
    orderSummaryElement.textContent = `Total Order Amount: $${totalOrderAmount.toFixed(2)}`;
  }




  button.addEventListener('click', function () {

    button.style.display = 'none';
    button.style.display = 'flex';
    mainForm.style.display = 'flex';
    right.style.display = 'none'
    // showInfoForForm = element.innerHTML = `<div> <string> <span>Name:</span> ${products.name}</string> <br> <string> <span>Price: </span> $${products.price}</string> <br> <string> <span>Description:</span> ${products.description}</string></div>`;
    showInfoForForm = element.innerHTML = `<div>${products.name}</div>`;
    showInfoForFormPrice = element.innerHTML = `<div> <br>Price: $${products.price}</div>`;
    titleForm.innerText = 'Information about your order';
    
    
    if (!isFormVisible) {
      element.append(plusButton);
      element.append(minusButton);

      plusButton.style.display = 'inline-block';
      minusButton.style.display = 'inline-block';
      button.textContent = 'Order+';

      const currentDateTime = new Date();
      localStorage.setItem('orderDateTime', currentDateTime.toISOString());
      // Начальное количество товаров при заказе
      selectedProductQuantity = 1;
      updateTotalAmount(products.price);
      updateCounter();
      updateOrderSummary()

    } else {
        // Если форма видима, скроем её
        mainForm.style.display = 'none';
    }
    // Инвертируйте состояние
    isFormVisible = !isFormVisible;
  });

  function updateTotalAmount(price) {
    totalOrderAmount += price;
    let totalElement = document.getElementById('spanAllBuy');
    let currentTotal = parseFloat(totalElement.textContent.replace('$', '')) || 0;
    let newTotal = currentTotal + price;
    totalElement.textContent = `$${totalOrderAmount.toFixed(2)}`;
    return totalOrderAmount;
  };
  
  function updateCounter() {
    let counterElement = document.querySelector('.dynamic-element div');
    counterElement.textContent = `Count: ${selectedProductQuantity}`;
  };
}


document.getElementById('left').addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'){
    let categoryKey = event.target.getAttribute('data-category');
    let centerBlockDiv = document.getElementById('center');
    centerBlockDiv.style.display = 'block';
    if(isRightBlockOpen){
      const rightBlock = document.getElementById('right');
      rightBlock.style.display = 'none';
      isRightBlockOpen = false;
    }
    const categoryProducts = categories[categoryKey].products
    showProducts(categoryProducts, categoryKey);
  };
});



document.getElementById('center').addEventListener('click', event => {
  const productId = event.target.getAttribute('data-product');
  const categoryKey = event.target.getAttribute('data-category');
  const products = categories[categoryKey].products.find(products => products.id == productId);
  

  // При выборе нового товара обнуляем количество
  selectedProductQuantity = 0;
  // Обновляем ID выбранного товара
  selectedProductId = products.id;
  showRBlock(products);
});

function loadSelectedProduct() {
  // Загружаем информацию о выбранном товаре из localStorage
  selectedProductId = localStorage.getItem('selectedProductId');
  if (selectedProductId) {
    const categoryKey = 'books';  // Предположим, что книги выбраны по умолчанию
    const products = categories[categoryKey].products.find(product => product.id == selectedProductId);
    if (products) {
      showRBlock(products);
    }
  }
}

// Загружаем выбранный товар при загрузке страницы
loadSelectedProduct();

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
      username.classList.remove('invalid-element')
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
      selectedCities.push(citys[i].value);
    }
  };

  return selectedCities;
}





// //Отлельная функция для работы с массивом значений
// function convereArray (){
//   // Получаем форму по её id
// let myForm = document.getElementById('mainForm');

// // Получаем коллекцию элементов управления формы
// let formControls = mainForm.elements;

// // Преобразуем коллекцию в массив
// let formControlsArray = Array.from(formControls);

// // Получаем массив значений
// let valuesArray = formControlsArray.map(function(element) {
//   return element.value;
// });

// console.log(valuesArray);
// }

// window.addEventListener('load', ()=>{
//   console.log(localStorage.getItem('formsValue'));
// });


document.getElementById('btn').addEventListener('click', () => {
  
  const formElements = document.forms.mainForm.elements;
  localStorage.setItem('formsValue', JSON.stringify(getFormValues(formElements)));
  console.log(localStorage.getItem('formsValue'));
  
  function getFormValues(elements) {
    const values = {};
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
  
      if (element.type === 'radio' && !element.checked) {
        continue; // Пропускаем невыбранные радиокнопки
      }
  
      if (element.type === 'checkbox') {
        values[element.name] = element.checked;
      } else {
        values[element.name] = element.value;
      }
    }
  
    return values;
  }
  

  // convereArray();

  function showAddAnswer(label, value) {
    let spanElement = document.createElement('span');
    spanElement.innerHTML = `<h4>${label}:</h4><div>${value}</div>`;
    // parentElementDiv.appendChild(spanElement);
  }
    if (validateForm()){
      document.activeElement.blur();
      showResultatForm.style.display = 'none';
      mainForm.style.display = 'none';
      btn.style.display = 'none';

      const savedOrderDateTime = localStorage.getItem('orderDateTime');
      if (savedOrderDateTime) {
        const orderDateTime = new Date(savedOrderDateTime);
        showAddAnswer('Order Date and Time', orderDateTime.toLocaleString());
      };
    

      showAddAnswer('Order information',showInfoForForm);
      // showAddAnswer('Full Name User', formElements.nameUser.value);
      // showAddAnswer('City Usera', formElements.citys.value);
      // showAddAnswer('Number mail User', formElements.numberMail.value);
      // showAddAnswer('Pay', formElements.pay.value);
      // showAddAnswer('Quantity', formElements.numberQuantity.value);
      // showAddAnswer('Comment', formElements.commet.value);
       // Display order date and time
    }
    

    document.getElementById('showData').addEventListener('click', () => {
      showResultatForm.style.display = 'flex';
      closeData.style.display = 'flex';
      main.style.display = 'none';
    });

    document.getElementById('closeData').addEventListener('click', () => {
      showResultatForm.style.display = 'none';
      closeData.style.display = 'none';
    });

  console.log('valid Done');
});

// const closeButton = document.createElement('button');
// closeButton.textContent = 'x';
// closeButton.className = 'close-button';


// Добавим обработчик события для закрытия формы
document.getElementById('closebButton').addEventListener('click', () => {
  const formElements = document.forms.mainForm.elements;

  for (let i = 0; i < formElements.length; i++) {
    formElements[i].blur();
  }
  document.getElementById('formMainPages').blur();


  // document.getElementById('mainForm').blur();

  formMainPages.style.display = 'none';

  isFormVisible = false;

  // Установим фокус на кнопку "Order product" после закрытия формы
  document.getElementById('left').focus();
});






















































// let tasks  = [categories];

// function showTasks(){
//   tasks.map((task, index) => showTask(task, index));
//   //tasks.map(show)(эквивалентна запись), потому что метод map принимает колл бэк, вызывает его, передавая в качестве первого аргумента - task
//   //В чем разница? ни в чем!
// }

// function showTask(task, index) {
//   const parent = document.getElementById('tasks');
//   const item = document.createElement('li');
//   item.textContent = task;
  
//   const btn = document.createElement('button');
//   btn.setAttribute('type', 'button');
//   btn.textContent = 'X';
//   btn.setAttribute('data-task-index', index);
//   btn.addEventListener('click', () => {
//     tasks.splice(index, 1);// При клике удаляем
//     //Затем обновляем
//     localStorage.setItem('ourTasks', JSON.stringify(tasks));
//     item.remove();
//   });

//   item.appendChild(btn);
//   parent.appendChild(item);
// }

// window.addEventListener('load', () => {
//     // Если storedTasks равно null, используем пустой массив
//   tasks = JSON.parse(localStorage.getItem('ourTasks')) || [];
//   showTasks();

// });

// document.getElementById('btn').addEventListener('click', () => {
//   const str = document.forms[0].str.value;
//   tasks.push(str);
//   showTask(str, tasks.length - 1);
//   localStorage.setItem('ourTasks', JSON.stringify(tasks));
// });