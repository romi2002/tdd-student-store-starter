import * as React from "react"
import Logo from "../Logo/Logo";
import "./Navbar.css"
import IconButton from "../CategoryButton/IconButton";
import {FaLaptop, FaPaperclip, FaTshirt, FaHamburger, FaShoppingBasket} from "react-icons/all";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar({
                                   selectedCategories,
                                   categorySelectedHandler,
                                   handleSearchSubmit, handleSearchChange,
                                   handleSortFuncChange
                               }) {
    return (
        <nav className="navbar">
            <div className='main-bar'>
                <FaShoppingBasket/>
                <h1>Navbar</h1>
            </div>
            <div className='filters'>
                <SearchBar handleSubmit={handleSearchSubmit}
                           handleSearchChange={handleSearchChange}/>
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
                <label>
                    Sort:
                    <select onChange={handleSortFuncChange}>
                        <option value='id-asc'>Default</option>
                        <option value="price-asc">Price Ascending</option>
                        <option value="price-desc">Price Descending</option>
                        <option value='name-asc'>Name Ascending</option>
                        <option value='name-desc'>Name Deescending</option>
                    </select>
                </label>
            </div>
        </nav>
    )
}
