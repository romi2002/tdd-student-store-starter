import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetail from "../Product/ProductDetail/ProductDetail";
import {useState, useEffect} from "react";
import axios from "axios";

export default function App() {
    const [products, setProduct] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [shoppingCart, setShoppingCart] = useState([])

    useEffect(() => {
        axios.get('https://codepath-store-api.herokuapp.com/store').then(res => {
            setProduct(res.data.products)
            console.log(res.data.products)
        })
    }, [])

    const addItemToCart = (id) => {
        console.log("Adding item: " + id)
        let newShoppingCart = [...shoppingCart]
        if (newShoppingCart[id]) {
            console.log(newShoppingCart[id])
            newShoppingCart[id] += 1
        } else {
            console.log("THIS")
            newShoppingCart[id] = 1
        }
        console.log(newShoppingCart)
        setShoppingCart(newShoppingCart)
    }

    const removeItemFromCart = (id) => {
        console.log("Removing item: " + id)
        let newShoppingCart = [...shoppingCart]
        if(newShoppingCart[id] && newShoppingCart[id] > 0){
            newShoppingCart[id] -= 1
        }
        setShoppingCart(newShoppingCart)
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <main>
                                <Sidebar isOpen={isOpen} handleOnToggle={() => {
                                    console.log("Toggle")
                                    setOpen(!isOpen)
                                }} shoppingCart={shoppingCart}
                                products={products}/>
                                <div className='content'>
                                    <Navbar/>
                                    <Home handleAddItemToCart={addItemToCart}
                                          handleRemoveItemToCart={removeItemFromCart}
                                          shoppingCart={shoppingCart}
                                          products={products}
                                    />
                                </div>
                            </main>
                        </>
                    }/>
                    <Route path="products">
                        <Route path={":productId"} element={<ProductDetail/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
