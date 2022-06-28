const storage = require('../data/storage').storage

class Store {
    constructor() {

    }

    getProducts() {
        return {'products':storage.get('products').value()}
    }

    getProduct(id) {
        const prod = this.getProducts().products.find(product => product.id === parseInt(id));
        if(prod) return {'product':prod}

        throw new Error("Invalid product id given!")
    }

    computeOrderTotal(shoppingCart){
        const products = this.getProducts().products
        if(!shoppingCart || shoppingCart.length === 0) return 0
        return shoppingCart.reduce((prevSum, currentValue, index) =>{
            if(!currentValue) return prevSum
            return prevSum + currentValue * products[index].price
        }) * 1.0875;
    }

    getNewOrderId() {
        return storage.get('purchases').value().length + 1
    }

    processOrder(shoppingCart, user){
        if(!shoppingCart || !user.name || !user.email){
            throw new Error("Order cannot be processed with empty shopping cart or user")
        }

        const total = this.computeOrderTotal(shoppingCart)

        const orderData = {
            'id' : this.getNewOrderId(),
            'name' : user.name,
            'email' : user.email,
            'order' : shoppingCart,
            'total' : total,
            'createdAt' :  new Date().toISOString()
        }

        storage.get('purchases').push(orderData).write()
        return orderData

        // storage.set('purchases',
        //     storage.get('purchases').value().concat(
        //     orderData)
        // )
    }
}

module.exports = new Store()