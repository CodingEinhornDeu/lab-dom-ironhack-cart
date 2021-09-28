// ITERATION 1

function updateSubtotal(product) {

  // get references to elements in the dom
  const priceElm = document.querySelector(".price span");
  const quantityElm = document.querySelector(".quantity input");
  const subtotalElm = document.querySelector(".subtotal span");
  // calculate
  const price = parseFloat(priceElm.innerHTML);
  const quantity = parseFloat(quantityElm.value);
  const subtotal = price * quantity;
  // get Subtotal
  subtotalElm.innerHTML = subtotal;



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
