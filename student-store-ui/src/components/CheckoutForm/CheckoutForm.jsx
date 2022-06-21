import * as React from "react"
import "./CheckoutForm.css"
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function CheckoutForm({
                                         isOpen = true,
                                         shoppingCart,
                                         checkoutForm = {
                                             'email': 'test',
                                             'name': 'abiel'
                                         },
                                         handleOnCheckoutFormChange = () => console.log("change"),
                                         handleOnSubmitCheckoutForm = () => console.log("Submit"),
                                         handleOnCloseCheckout,
                                     }) {
    return <div className='checkout-form'>
        <Modal
            isOpen={isOpen}>
            <h1>Checkout!</h1>
            <div className='checkout-form'>
                <div>
                    <span className='checkout-form-text'>
                        Email:
                    </span>
                    <input type='email'
                           name='email'
                           placeholder='student@codepath.org'
                           value={checkoutForm.email}
                           onChange={handleOnCheckoutFormChange}/>
                </div>
                <div>
                    <span className='checkout-form-text'>
                        Name:
                    </span>
                    <input type='text'
                           name='name'
                           placeholder='Student Name'
                           value={checkoutForm.name}
                           onChange={handleOnCheckoutFormChange}/>
                </div>

                <button className='checkout-button'
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