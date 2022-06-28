import * as React from "react"
import "./ShoppingCartProductList.css"

export default function ShoppingCartProductList({
                                                    products,
                                                    shoppingCart
                                                }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    // const subtotal = shoppingCart.length ? shoppingCart.slice(1).reduce((total, quantity, id) => {
    //     if (quantity && quantity !== 0) return total +  products[id].price
    //     else return total
    // }) : 0;

    let subtotal = 0;
    shoppingCart.slice(1).forEach((quantity, index) => {
        subtotal += products[index].price * quantity
    })

    const taxes = subtotal * 0.0875;
    console.log('Subtotal:', subtotal)
    console.log('Price:', products[0].price)

    return (<div>
        {shoppingCart && shoppingCart.slice(1).map((quantity, index) => {
            const product = products[index]
            const cost = quantity * product.price;
            //TODO Format items
            if (quantity !== 0) return (
                <>
                    {index === 0 && <hr key={'product-price-list-upp-sep-' + index} className={'product-separator'}/>}
                    <div key={'product-price-list-' + index} className={'product-price-list-item'}>
                        <span className='price-text' key={'product-price-list-name-' + index}>{product.name}</span>
                        <span className='price-text'
                              key={'product-price-list-quantity-' + index}>{'Quantity: ' + quantity}</span>
                        <span className='price-text'
                              key={'product-price-list-cost-' + index}>{'Cost: ' + currencyFormatter.format(cost)}</span>
                    </div>
                    <hr key={'product-price-list-lower-sep-' + index} className={'product-separator'}/>
                </>
            )
        })}
        <div className='shopping-cart-product-list-prices'>
            <span className='price-text'>{'Subtotal: ' + currencyFormatter.format(subtotal)}</span>
            <span className='price-text'>{'Taxes: ' + currencyFormatter.format(taxes)}</span>
            <span className='price-text'>{'Total: ' + currencyFormatter.format(subtotal + taxes)}</span>
        </div>
    </div>)
}