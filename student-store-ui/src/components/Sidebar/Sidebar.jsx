import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useState} from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import IconButton from "../CategoryButton/IconButton";

export default function Sidebar(props) {
    return (
        <section className="sidebar">
            <div className={'sidebar'}>
                {props.isOpen &&
                    <>
                        <ShoppingCart shoppingCart={props.shoppingCart}
                                      products={props.products}/>
                    </>
                }
                <IconButton
                    onSelectedHandler={props.handleOnToggle}
                    text={props.isOpen ? "Close shopping cart" : "Open shopping cart"}/>
            </div>
        </section>
    )
}
