import * as React from "react"
import "./Hero.css"

export default function Hero(props) {
    return (
        <div className='hero'>
            <span className='intro'>Welcome!</span>
            <img className='hero-img' src='https://via.placeholder.com/300.png'/>
        </div>
    )
}
