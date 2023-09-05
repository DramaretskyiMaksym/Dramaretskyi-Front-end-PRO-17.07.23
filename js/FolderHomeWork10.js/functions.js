function calculateDiscount() {
  const startDiscountFrom = 10000;
  const discount = 10;

  const discountValue = (100 - discount) / 100;

  // Get product number
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));

  // Get product amount
  let productsAmount;
  do {
    productsAmount = parseInt(prompt('Enter products amount:'));
  } while (productsAmount < 1 || isNaN(productsAmount));

  // Save selected product
  const selectedProduct = products[productNumber - 1];

  // Calculate initial price without discount
  let initialPrice = selectedProduct.price * productsAmount;
  console.log('Price: $', initialPrice);

  // Calculate price with discount if needed
  if (initialPrice >= startDiscountFrom) {
    const finalPrice = initialPrice * discountValue;
    console.log('Congrats! You got a discount, the final price is $' + finalPrice);
  }
}

// Вызов функции для выполнения расчетов
calculateDiscount();
