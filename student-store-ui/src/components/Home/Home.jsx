import * as React from "react"
import "./Home.css"
import ProductGrid from "../Product/ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Filterbar from "../Filterbar/Filterbar";

export default function Home(props) {
    return (
        <div className="home">
            <Hero/>
            <Filterbar {...props}/>
            <ProductGrid {...props}/>
            <Footer/>
        </div>
    )
}
