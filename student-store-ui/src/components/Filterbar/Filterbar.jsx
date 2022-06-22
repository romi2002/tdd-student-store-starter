import * as React from "react"
import "./Filterbar.css"
import SearchBar from "../SearchBar/SearchBar";
import IconButton from "../CategoryButton/IconButton";
import {FaHamburger, FaLaptop, FaPaperclip, FaTshirt} from "react-icons/all";

export default function Filterbar({
                                      categorySelectedHandler, selectedCategories,
                                      handleSearchSubmit, handleSearchChange, handleSortFuncChange
                                  }) {
    return (
        <div className='filterbar'>
            <div>
                <span>Categories:</span>
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
            </div>

            <div className='filterbox'>
                <SearchBar handleSubmit={handleSearchSubmit}
                           handleSearchChange={handleSearchChange}/>

                <label>
                    Sort:
                    <select onChange={handleSortFuncChange}>
                        <option value='id-asc'>Default</option>
                        <option value="price-asc">Price Ascending</option>
                        <option value="price-desc">Price Descending</option>
                        <option value='name-asc'>Name Ascending</option>
                        <option value='name-desc'>Name Descending</option>
                    </select>
                </label>
            </div>
        </div>
    )
}