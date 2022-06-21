import * as React from "react"
import "./ProductPriceList.css"

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
                <div key={'product-price-list-' + index}>
                    <h6 key={'product-price-list-name-' + index}>{'Name:' + product.name}</h6>
                    <h6 key={'product-price-list-quantity-' + index}>{'Quantity: ' + quantity}</h6>
                    <h6 key={'product-price-list-cost-' + index}>{'Cost: ' + currencyFormatter.format(cost)}</h6>
                </div>
            )
        })}
        <div>
            <span>{'Subtotal: ' + currencyFormatter.format(subtotal)}</span>
            <span>{'Taxes: ' + currencyFormatter.format(taxes)}</span>
            <span>{'Total: ' + currencyFormatter.format(subtotal + taxes)}</span>
        </div>
    </div>)
}