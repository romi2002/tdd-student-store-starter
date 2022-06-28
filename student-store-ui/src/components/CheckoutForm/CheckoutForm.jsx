import * as React from "react"
import "./CheckoutForm.css"
import Modal from 'react-modal'
import ShoppingCartProductList from "../Product/ProductPriceList/ShoppingCartProductList";
import {useState} from "react";

Modal.setAppElement('#root')

export default function CheckoutForm({
                                         isOpen = true,
                                         shoppingCart,
                                         products,
                                         checkoutFormData,
                                         handleOnCheckoutFormChange,
                                         handleOnSubmitCheckoutForm,
                                         handleOnCloseCheckout,
                                     }) {

    const [termsAndConditionsAccepted, setTermsAndCond] = useState(false)

    const isFormFilledOut = checkoutFormData &&
        (checkoutFormData.name ?? '') !== '' &&
        (checkoutFormData.email ?? '') !== ''

    console.log(termsAndConditionsAccepted)
    console.log(isFormFilledOut)

    return <div className='checkout-form'>
        <Modal
            isOpen={isOpen}>
            <h1>Checkout!</h1>
            <div className='checkout-form'>
                <label>
                    <span className='checkout-form-text'>
                        Email:
                    </span>
                    <input type='email'
                           name='email'
                           placeholder='student@codepath.org'
                           onChange={handleOnCheckoutFormChange}/>
                </label>

                <label>
                        <span className='checkout-form-text'>
                        Name:
                        </span>
                    <input type='text'
                           name='name'
                           placeholder='Student Name'
                           onChange={handleOnCheckoutFormChange}/>
                </label>
                <ShoppingCartProductList
                    products={products}
                    shoppingCart={shoppingCart}/>
                <label>
                    I accept the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">terms and conditions</a>
                    <input type='checkbox' id='terms-and-conds-check'
                           onChange={(e) => setTermsAndCond(e.target.checked)}></input>
                </label>
                <button className='checkout-button'
                        disabled={(!termsAndConditionsAccepted || !isFormFilledOut)}
                        onClick={handleOnSubmitCheckoutForm}>Checkout
                </button>
                <button onClick={handleOnCloseCheckout}>
                    Close checkout!
                </button>
            </div>
        </Modal>
    </div>
}