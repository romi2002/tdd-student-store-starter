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
import Footer from "../Footer/Footer";

export default function App() {
    const [products, setProduct] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [shoppingCart, setShoppingCart] = useState([])
    const [selectedCategories, setSelectedCategory] = useState(['clothing', 'accessories', 'tech', 'food'])
    const [searchBar, setSearchBar] = useState('')
    const [selectedSort, setSortFunc] = useState('id-asc')

    useEffect(() => {
        axios.get('https://codepath-store-api.herokuapp.com/store').then(res => {
            setProduct(res.data.products)
            setShoppingCart(Array(res.data.products.length + 1).fill(0))
        })
    }, [])

    const addItemToCart = (id) => {
        let newShoppingCart = [...shoppingCart]
        if (newShoppingCart[id]) {
            newShoppingCart[id] += 1
        } else {
            newShoppingCart[id] = 1
        }
        setShoppingCart(newShoppingCart)
    }

    const removeItemFromCart = (id) => {
        let newShoppingCart = [...shoppingCart]
        if (newShoppingCart[id] && newShoppingCart[id] > 0) {
            newShoppingCart[id] -= 1
        }
        setShoppingCart(newShoppingCart)
    }

    const categorySelectedHandler = (category) => {
        var newCategories = [...selectedCategories]
        const index = newCategories.indexOf(category)
        if (index !== -1) {
            //Remove category
            newCategories.splice(index, 1);
        } else {
            newCategories.push(category)
        }
        setSelectedCategory(newCategories)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearchChange = (event) => {
        setSearchBar(event.target.value)
    }

    const handleSortChange = (event) => {
        console.log("func change")
        console.log(event.target.value)
        setSortFunc(event.target.value)
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
                                    setOpen(!isOpen)
                                }} shoppingCart={shoppingCart}
                                         products={products}/>
                                <div className='content'>
                                    <Navbar/>
                                    <Home handleAddItemToCart={addItemToCart}
                                          handleRemoveItemToCart={removeItemFromCart}
                                          shoppingCart={shoppingCart}
                                          products={products}
                                          selectedCategories={selectedCategories}
                                          searchTerm={searchBar}
                                          selectedSort={selectedSort}
                                          categorySelectedHandler={categorySelectedHandler}
                                          handleSearchSubmit={handleSearchSubmit}
                                          handleSearchChange={handleSearchChange}
                                          handleSortFuncChange={handleSortChange}
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
