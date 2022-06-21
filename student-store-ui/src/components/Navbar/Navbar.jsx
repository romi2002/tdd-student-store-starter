import * as React from "react"
import Logo from "../Logo/Logo";
import "./Navbar.css"

export default function Navbar({selectedCategory}) {
    return (
        <nav className="navbar">
            <p>Navbar</p>
            <Logo imgSrc={"https://via.placeholder.com/300.png"}/>
            <div className='filters'>
                <CategoryButton
                    icon={<CheckroomIcon/>}
                    onSelectedHandler={() => console.log("selected")}
                    text={"Clothing"}/>
                <button>Clothing</button>
                <button>Accessories</button>
                <button>Tech</button>
            </div>
        </nav>
    )
}
