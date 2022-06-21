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
import NotFound from "../NotFound/NotFound";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function App() {
    const [products, setProduct] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [shoppingCart, setShoppingCart] = useState([])
    const [selectedCategories, setSelectedCategory] = useState(['clothing', 'accessories', 'tech', 'food'])

    useEffect(() => {
        axios.get('https://codepath-store-api.herokuapp.com/store').then(res => {
            setProduct(res.data.products)
            console.log(res.data.products)
            setShoppingCart(Array(res.data.products.length).fill(0))
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
        if (newShoppingCart[id] && newShoppingCart[id] > 0) {
            newShoppingCart[id] -= 1
        }
        setShoppingCart(newShoppingCart)
    }

    const categorySelectedHandler = (category) => {
        console.log(category)
        var newCategories = [...selectedCategories]
        const index = newCategories.indexOf(category)
        if (index !== -1) {
            //Remove category
            newCategories.splice(index, 1);
        } else {
            newCategories.push(category)
        }
        console.log(newCategories)
        setSelectedCategory(newCategories)
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/" element={
                        <>
                            <main>
                                <Sidebar isOpen={isOpen} handleOnToggle={() => {
                                    console.log("Toggle")
                                    setOpen(!isOpen)
                                }} shoppingCart={shoppingCart}
                                         products={products}/>
                                <div className='content'>
                                    <Navbar selectedCategories={selectedCategories}
                                            categorySelectedHandler={categorySelectedHandler}/>
                                    <Home handleAddItemToCart={addItemToCart}
                                          handleRemoveItemToCart={removeItemFromCart}
                                          shoppingCart={shoppingCart}
                                          products={products}
                                          selectedCategories={selectedCategories}
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
