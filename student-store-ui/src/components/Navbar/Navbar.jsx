import * as React from "react"
import Logo from "../Logo/Logo";
import "./Navbar.css"
import IconButton from "../CategoryButton/IconButton";
import {FaLaptop, FaPaperclip, FaTshirt, FaHamburger, FaShoppingBasket} from "react-icons/all";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar({
                                   selectedCategories,
                                   categorySelectedHandler,
                                   handleSearchSubmit, handleSearchChange
                               }) {
    return (
        <nav className="navbar">
            <div className='main-bar'>
                <p>Navbar</p>
                <FaShoppingBasket/>
            </div>
            <div className='filters'>
                <IconButton
                    onSelectedHandler={() => categorySelectedHandler('clothing')}
                    icon={<FaTshirt/>}
                    text={"Clothing"}
                    isActive={selectedCategories.includes('clothing')}/>
                <IconButton
                    onSelectedHandler={() => categorySelectedHandler('accessories')}
                    icon={<FaPaperclip/>}
                    text={"Accessories"}
                    isActive={selectedCategories.includes('accessories')}/>
                <IconButton
                    onSelectedHandler={() => categorySelectedHandler('tech')}
                    icon={<FaLaptop/>}
                    text={"Technology"}
                    isActive={selectedCategories.includes('tech')}/>
                <IconButton
                    onSelectedHandler={() => categorySelectedHandler('food')}
                    icon={<FaHamburger/>}
                    text={"Food"}
                    isActive={selectedCategories.includes('food')}/>
                <SearchBar handleSubmit={handleSearchSubmit}
                           handleSearchChange={handleSearchChange}/>
            </div>
        </nav>
    )
}
