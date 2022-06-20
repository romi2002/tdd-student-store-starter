import * as React from "react"
import {Link} from 'react-router-dom'
import {ShoppingCart} from '@material-ui/icons'
import "./Logo.css"

export default function Logo({imgSrc}) {
    return (
        <div className={"logo"}>
            <Link to="/">
                <ShoppingCart/>
            </Link>
        </div>
    )
}