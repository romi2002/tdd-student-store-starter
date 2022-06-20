import * as React from "react"
import "./ShoppingCart.css"
import {ShoppingCart as ShoppingCartIcon} from "@material-ui/icons";

export default function ShoppingCart({products, shoppingCart}){
    const hasItems = shoppingCart.length && shoppingCart.reduce((partialSum, n) => partialSum + n) === 0;
    //const totalPrice = shoppingCart.reduce((partialSum, item))

    return (
        <div className='shopping-cart'>
            <ShoppingCartIcon/>
            {hasItems && (
                <span className='notification'>No items added to cart yet. Start shopping now!</span>
                )}
            {shoppingCart && shoppingCart.map((item, index) => {

                const product = products.find(p => p.id === index)

                console.log(`index: ${index} product: ${product}`)
                if(product && item){
                    return (<div key={'item-'+index}>
                        <h6>{product.name + item}</h6>
                    </div>)
                }
            })}
        </div>
    )
}