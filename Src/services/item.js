async function createItem(nome, price, quantity){
    return {
        nome: nome,
        price: price,
        quantity: quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;