import * as React from "react"
import "./Hero.css"

export default function Hero(props) {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <span className='intro'>Welcome to the student store!</span>
                <span className='description'>Shop for all your favorite products here!</span>
            </div>
        </div>
    )
}
