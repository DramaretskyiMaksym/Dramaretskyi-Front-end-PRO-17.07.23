//Вывести в консоль список с данными по всем товарам (каждый товар на отдельной строке).
//(Что бы мне вывести список данных, массива мне нужен цикл)
function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}


let selectedProduct;
function getProductNumber(){
  do {
    let = valueNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while (valueNumber < 1 || valueNumber > products.length || isNaN(valueNumber ));
  selectedProduct = products[valueNumber - 1];
}


let productsAmount = function (){
  do {
    valueAmount = parseInt(prompt('Enter products amount:'));
  } while (valueAmount < 1 || isNaN(valueAmount));
}


function calculationFinalPriceDiscount() {
    let initialPrice = selectedProduct.price * valueAmount;
    console.log('Price: $', initialPrice);
    
    if (initialPrice >= startDiscountFrom) {
      const finalPrice = initialPrice * discountValue;
      console.log('Congrats! You got a discount, the final price is $' + finalPrice);
    }
  }
