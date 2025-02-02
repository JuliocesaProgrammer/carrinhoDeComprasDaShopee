async function addItemToCart(userCart, item) {
    userCart.push(item);
};

async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

async function deleteItemFromCart(userCart, name) {
  
}

async function removeItem(userCart, index) {

}

export { addItemToCart, calculateTotal, deleteItemFromCart, removeItem };
