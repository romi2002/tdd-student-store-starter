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

    const subtotal = shoppingCart.length ? shoppingCart.slice(1).reduce((total, quantity, id) => {
        if (quantity && quantity !== 0) return total + quantity * products[id].price
        else return total
    }) : 0;

    const taxes = subtotal * 0.0875;

    return (<div>
        {shoppingCart && shoppingCart.slice(1).map((quantity, index) => {
            const product = products[index]
            const cost = quantity * product.price;
            //TODO Format items
            if(quantity !== 0) return (
                <div key={'product-price-list-' + index} className={'product-price-list-item'}>
                    <span className='price-text' key={'product-price-list-name-' + index}>{'Name:' + product.name}</span>
                    <span className='price-text' key={'product-price-list-quantity-' + index}>{'Quantity: ' + quantity}</span>
                    <span className='price-text' key={'product-price-list-cost-' + index}>{'Cost: ' + currencyFormatter.format(cost)}</span>
                </div>
            )
        })}
        <div className='shopping-cart-product-list-prices'>
            <span className='price-text'>{'Subtotal: ' + currencyFormatter.format(subtotal)}</span>
            <span className='price-text'>{'Taxes: ' + currencyFormatter.format(taxes)}</span>
            <span className='price-text'>{'Total: ' + currencyFormatter.format(subtotal + taxes)}</span>
        </div>
    </div>)
}