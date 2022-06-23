import * as React from "react"
import Logo from "../Logo/Logo";
import "./Navbar.css"
import IconButton from "../CategoryButton/IconButton";
import {FaLaptop, FaPaperclip, FaTshirt, FaHamburger, FaShoppingBasket} from "react-icons/all";
import SearchBar from "../SearchBar/SearchBar";
import SocialsBar from "../SocialsBar/SocialsBar";

export default function Navbar({
                                   selectedCategories,
                                   categorySelectedHandler,
                                   handleSearchSubmit, handleSearchChange,
                                   handleSortFuncChange
                               }) {
    return (
        <nav className="navbar">
            <div className='main-bar'>
                <FaShoppingBasket size={24}/>
                <h1 className='store-name'>Student Store</h1>
            </div>
            <SocialsBar/>
        </nav>
    )
}
