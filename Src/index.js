import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];	
const myWishList = [];

console.log('Hello User, seja bem vindo ao carrinho da shopee');

const item1 = await createItem("Camisa", 50.99, 2);
const item2 = await createItem("Calça", 150.99, 3);

await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

await cartService.displayCart(myCart);

console.log('Shopee Cart Total is: ');
await cartService.calculateTotal(myCart);

console.log('Shopee WishList Total is: ');
await cartService.calculateTotal(myWishList);

