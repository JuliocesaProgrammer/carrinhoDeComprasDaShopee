async function addItemToCart(userCart, item) {
    userCart.push(item);
};

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

async function deleteItemFromCart(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {

}

async function displayCart(userCart) {
console.log("Shopee Cart List:");
  userCart.forEach((item, index) => {
    console.log(`Item: ${item.name} - Quantity: ${item.quantity} - Price: ${item.price}`);
  });
}
export { addItemToCart, calculateTotal, deleteItemFromCart, removeItem, displayCart};
