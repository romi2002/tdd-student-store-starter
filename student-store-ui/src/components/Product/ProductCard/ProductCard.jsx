import * as React from "react"
import "./ProductCard.css"
import {Link} from 'react-router-dom'

export default function ProductCard({
                                        product,
                                        productId,
                                        quantity,
                                        handleAddItemToCart,
                                        handleRemoveItemToCart,
                                        showDescription
                                    }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const priceString = currencyFormatter.format(product.price)

    return (
        <div className={'product-card'}>
            <span className={'product-name'}>{product.name}</span>
            <span className={'product-price'}>{priceString}</span>
            {showDescription && <span className={'product-description'}>{product.description}</span>}
            <div className={'media'}>
                <Link to={"/products/" + productId}>
                    <img className={'media'} src={product.image}/>
                </Link>
            </div>
            <div>
                <button className={'add'} onClick={() => {
                    handleAddItemToCart(productId)
                }}>Add
                </button>
                <button className={'remove'} onClick={() => {
                    handleRemoveItemToCart(productId)
                }}>Remove
                </button>
            </div>
            <span className={'product-quantity'}>{quantity}</span>
        </div>
    )
}