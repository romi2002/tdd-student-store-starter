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
    const [checkoutUserData, setCheckoutUserData] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/store').then(res => {
            console.log(res.data)
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

    const handleOnCheckoutFormChange = (event) => {
        let newUserData = {...checkoutUserData}
        switch(event.target.name){
            case 'email':
                newUserData.email = event.target.value
                break
            case 'name':
                newUserData.name = event.target.value
                break
        }
        console.log(newUserData)
        setCheckoutUserData(newUserData)
    }

    const handleCheckoutSubmit = () => {
        let data = {...checkoutUserData}
        data.shoppingCart = shoppingCart
        axios.post('http://localhost:3001/store', data).then((resp) => {
                console.log(resp.data)
            }
        )
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/" element={
                        <>
                            <main>
                                <Navbar/>
                                <div className='main-window'>
                                    <Sidebar isOpen={isOpen} handleOnToggle={() => {
                                        setOpen(!isOpen)
                                    }} shoppingCart={shoppingCart}
                                             handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                                             handleOnSubmitCheckoutForm={handleCheckoutSubmit}
                                             checkoutFormData={checkoutUserData}
                                             products={products}/>
                                    <div className='content'>
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
