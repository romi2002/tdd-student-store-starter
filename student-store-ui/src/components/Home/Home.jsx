import * as React from "react"
import "./Home.css"
import ProductGrid from "../Product/ProductGrid/ProductGrid";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Home() {
    const [products, setProduct] = useState(null)

    useEffect(() => {
        axios.get('https://codepath-store-api.herokuapp.com/store').then(res => {
            setProduct(res.data.products)
            console.log(res.data.products)
        })
    }, [])


    return (
        <div className="home">
            <p>Home</p>
            <ProductGrid products={products}/>
        </div>
    )
}
