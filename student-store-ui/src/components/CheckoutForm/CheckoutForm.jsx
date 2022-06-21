import * as React from "react"
import "./CheckoutForm.css"
import Modal from 'react-modal'
import ProductPriceList from "../Product/ProductPriceList/ProductPriceList";
import {useState} from "react";

Modal.setAppElement('#root')

export default function CheckoutForm({
                                         isOpen = true,
                                         shoppingCart,
                                         products,
                                         checkoutForm = {
                                             'email': 'test',
                                             'name': 'abiel'
                                         },
                                         handleOnCheckoutFormChange = () => console.log("change"),
                                         handleOnSubmitCheckoutForm = () => console.log("Submit"),
                                         handleOnCloseCheckout,
                                     }) {

    const [termsAndConditionsAccepted, setTermsAndCond] = useState(false)

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
                           value={checkoutForm.email}
                           onChange={handleOnCheckoutFormChange}/>
                </label>

                <label>
                        <span className='checkout-form-text'>
                        Name:
                        </span>
                    <input type='text'
                           name='name'
                           placeholder='Student Name'
                           value={checkoutForm.name}
                           onChange={handleOnCheckoutFormChange}/>
                </label>
                <ProductPriceList
                    products={products}
                    shoppingCart={shoppingCart}/>
                <label>
                    I accept the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">terms and conditions</a>
                    <input type='checkbox' id='terms-and-conds-check'
                           onChange={(e) => setTermsAndCond(e.target.checked)}></input>
                </label>
                <button className='checkout-button'
                        disabled={!termsAndConditionsAccepted}
                    //TODO Send the request somewhere
                        onClick={handleOnSubmitCheckoutForm}>Checkout
                </button>
                <button onClick={handleOnCloseCheckout}>
                    Close checkout!
                </button>
            </div>
        </Modal>
    </div>
}