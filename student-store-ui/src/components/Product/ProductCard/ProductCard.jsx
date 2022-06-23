import * as React from "react"
import "./ProductCard.css"
import {Link} from 'react-router-dom'
import IconButton from "../../CategoryButton/IconButton";
import {BsFillBagPlusFill, BsFillBagXFill, FaShoppingBasket} from "react-icons/all";

export default function ProductCard({
                                        product,
                                        productId,
                                        quantity,
                                        handleAddItemToCart,
                                        handleRemoveItemToCart,
                                        showDescription,
                                        showButtons = true,
                                        showName = true
                                    }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const priceString = currencyFormatter.format(product.price)

    return (
        <div className={'product-card'}>
            <div className={'media'}>
                <Link to={"/products/" + productId}>
                    <img className={'media'} src={product.image}/>
                </Link>
            </div>
            <div className='content'>
                {showName && <span className={'product-name'}>{product.name}</span>}
                {showButtons && <div className={'product-card-buttons'}>
                    <IconButton
                        onSelectedHandler={() => {handleAddItemToCart(productId)}}
                        icon={<BsFillBagPlusFill size={24}/>}
                    />
                    <IconButton
                        onSelectedHandler={() => handleRemoveItemToCart(productId)}
                        icon={<BsFillBagXFill size={24}/>}
                        isActive={quantity !== 0}
                    />
                </div>}
                <div className='product-card-prod-info'>
                    <span className={'product-price'}>{priceString}</span>
                    {quantity !== undefined && <span className={'product-quantity'}>{'Quantity: ' + quantity}</span>}
                </div>
                {showDescription && <div className={'product-card-prod-info'}>
                    <span className={'product-description'}>{product.description}</span>
                </div>}
            </div>
        </div>
    )
}