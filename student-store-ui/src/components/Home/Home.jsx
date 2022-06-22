import * as React from "react"
import "./Home.css"
import ProductGrid from "../Product/ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home(props) {
    return (
        <div className="home">
            <p>Home</p>
            <Hero/>
            <ProductGrid {...props}/>
            <Footer/>
        </div>
    )
}
