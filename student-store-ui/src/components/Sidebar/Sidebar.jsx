import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useState} from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
    return (
        <section className="sidebar">
            <div className={'sidebar'}>
                {props.isOpen &&
                    <>
                        <h6>open</h6>
                        <ShoppingCart shoppingCart={props.shoppingCart}
                                      products={props.products}/>
                    </>
                }
                <button className={'toggle-button'} onClick={props.handleOnToggle}>Open</button>
            </div>
        </section>
    )
}
