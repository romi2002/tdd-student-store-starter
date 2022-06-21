import * as React from "react"
import "./ShoppingCart.css"
import {FaShoppingCart} from "react-icons/all";
import ProductPriceList from "../Product/ProductPriceList/ProductPriceList";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {useState} from "react";

//TODO Check classnames for autograder
export default function ShoppingCart({products, shoppingCart}){
    const [openCheckoutModal, setCheckoutModal] = useState(false)

    const hasItems = shoppingCart.some((val) => val !== 0);
    return (
        <div className='shopping-cart'>
            <FaShoppingCart/>
            {!hasItems ? (
                <span className='notification'>No items added to cart yet. Start shopping now!</span>
                ) :
                <>
                    <ProductPriceList products={products} shoppingCart={shoppingCart}/>
                    <button onClick={() => setCheckoutModal(!openCheckoutModal)}>Checkout!</button>
                    <CheckoutForm isOpen={openCheckoutModal}
                                  handleOnCloseCheckout={() => setCheckoutModal(false)}
                                  products={products}
                                  shoppingCart={shoppingCart}/>
                </>}
        </div>
    )
}