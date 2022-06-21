import * as React from "react"
import "./ShoppingCart.css"
import {ShoppingCart as ShoppingCartIcon} from "@material-ui/icons";

//TODO Check classnames for autograder
export default function ShoppingCart({products, shoppingCart}){
    const totalPrice = shoppingCart.length ? shoppingCart.slice(1).reduce((total, quantity, id) => {
        if(quantity && quantity !== 0) return total + quantity * products[id].price
        else return total
    }) : 0;

    const hasItems = totalPrice !== 0; //Maybe not a good idea in case there's a free item

    console.log(`totalPrice: ${totalPrice} hasItems: ${hasItems}`)

    return (
        <div className='shopping-cart'>
            <ShoppingCartIcon/>
            {!hasItems && (
                <span className='notification'>No items added to cart yet. Start shopping now!</span>
                )}
            {shoppingCart && shoppingCart.map((item, index) => {
                const product = products.find((p) => p.id === index)
                //TODO Format items
                return (item &&
                        <h6>{item}</h6>)
            })}
        </div>
    )
}