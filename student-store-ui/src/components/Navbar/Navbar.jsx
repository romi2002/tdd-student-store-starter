import * as React from "react"
import Logo from "../Logo/Logo";
import "./Navbar.css"
import CategoryButton from "../CategoryButton/CategoryButton";
import {FaLaptop, FaPaperclip, FaTshirt, FaHamburger} from "react-icons/all";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar({
                                   selectedCategories,
                                   categorySelectedHandler,
                                   handleSearchSubmit, handleSearchChange
                               }) {
    return (
        <nav className="navbar">
            <p>Navbar</p>
            <Logo imgSrc={"https://via.placeholder.com/300.png"}/>
            <div className='filters'>
                <CategoryButton
                    onSelectedHandler={() => categorySelectedHandler('clothing')}
                    icon={<FaTshirt/>}
                    text={"Clothing"}
                    isActive={selectedCategories.includes('clothing')}/>
                <CategoryButton
                    onSelectedHandler={() => categorySelectedHandler('accessories')}
                    icon={<FaPaperclip/>}
                    text={"Accessories"}
                    isActive={selectedCategories.includes('accessories')}/>
                <CategoryButton
                    onSelectedHandler={() => categorySelectedHandler('tech')}
                    icon={<FaLaptop/>}
                    text={"Technology"}
                    isActive={selectedCategories.includes('tech')}/>
                <CategoryButton
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
