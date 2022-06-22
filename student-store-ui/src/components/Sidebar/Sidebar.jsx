import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useState} from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import IconButton from "../CategoryButton/IconButton";
import {FaShoppingCart, FaWindowClose} from "react-icons/all";

export default function Sidebar(props) {
    return (
        <section className="sidebar">
            <div>
                <IconButton
                    onSelectedHandler={props.handleOnToggle}
                    icon={props.isOpen ? <FaWindowClose/> : <FaShoppingCart/>}/>
            </div>
            <div className={'sidebar'}>
                {props.isOpen &&
                    <>
                        <ShoppingCart className='shopping-cart-side' shoppingCart={props.shoppingCart}
                                      products={props.products}/>
                    </>
                }
            </div>
        </section>
    )
}
