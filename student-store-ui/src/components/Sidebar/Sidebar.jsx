import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useState} from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
    const [openCheckoutModal, setCheckoutModal] = useState(false)

    console.log("sidebar " + props.shoppingCart)
  return (
    <section className="sidebar">
        <div className={'sidebar'}>
            {props.isOpen &&
                <>
                    <h6>open</h6>
                    <ShoppingCart shoppingCart={props.shoppingCart}
                    products={props.products}/>
                    <button onClick={() => setCheckoutModal(!openCheckoutModal)}>Checkout!</button>
                    <CheckoutForm isOpen={openCheckoutModal}
                                    handleOnCloseCheckout={() => setCheckoutModal(false)}/>
                </>
            }
            <button className={'toggle-button'} onClick={props.handleOnToggle}>Open</button>
        </div>
    </section>
  )
}
