import * as React from "react"
import "./ShoppingCart.css"
import {FaShoppingCart} from "react-icons/all";
import ShoppingCartProductList from "../Product/ProductPriceList/ShoppingCartProductList";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {useState} from "react";
import IconButton from "../CategoryButton/IconButton";

//TODO Check classnames for autograder
export default function ShoppingCart({
                                         products,
                                         shoppingCart,
                                         checkoutFormData,
                                         handleOnCheckoutFormChange,
                                         handleOnSubmitCheckoutForm
                                     }) {
    const [openCheckoutModal, setCheckoutModal] = useState(false)

    const hasItems = shoppingCart.some((val) => val !== 0);
    return (
        <div className='shopping-cart'>
            {!hasItems ? (
                    <span className='notification'>No items added to cart yet. Start shopping now!</span>
                ) :
                <>
                    <ShoppingCartProductList products={products} shoppingCart={shoppingCart}/>
                    <IconButton text='Checkout!'
                                onSelectedHandler={() => setCheckoutModal(!openCheckoutModal)}/>
                    <CheckoutForm isOpen={openCheckoutModal}
                                  handleOnCloseCheckout={() => setCheckoutModal(false)}
                                  products={products}
                                  shoppingCart={shoppingCart}
                                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                                  checkoutFormData={checkoutFormData}/>
                </>}
        </div>
    )
}