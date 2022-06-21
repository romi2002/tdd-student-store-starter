import * as React from "react"
import {Link} from 'react-router-dom'
import {FaShoppingCart} from "react-icons/all";
import "./Logo.css"

export default function Logo({imgSrc}) {
    return (
        <div className={"logo"}>
            <Link to="/">
                <FaShoppingCart/>
            </Link>
        </div>
    )
}