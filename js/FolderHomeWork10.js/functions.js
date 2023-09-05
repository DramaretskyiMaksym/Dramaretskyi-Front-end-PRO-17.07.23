function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}

let selectedProduct;
function getProductNumber(){
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));
  selectedProduct = products[productNumber - 1];
}

let productsAmount;
function getProductAmount(){
  do {
    productsAmount = parseInt(prompt('Enter products amount:'));
  } while (productsAmount < 1 || isNaN(productsAmount));
}


function calculationFinalPriceDiscount() {
    let initialPrice = selectedProduct.price * productsAmount;
    console.log('Price: $', initialPrice);
    
    if (initialPrice >= startDiscountFrom) {
      const finalPrice = initialPrice * discountValue;
      console.log('Congrats! You got a discount, the final price is $' + finalPrice);
    }
  }
