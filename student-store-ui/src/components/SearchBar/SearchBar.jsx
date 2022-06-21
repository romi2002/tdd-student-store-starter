import * as React from "react"
import {FaSearch} from "react-icons/all";
import "./SearchBar.css"

export default function SearchBar({
                                      handleSubmit,
                                      handleSearchChange
                                  }) {
    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <label>
                    Search
                    <FaSearch/>
                    <input type="text" name="search-bar" onChange={handleSearchChange}/>
                </label>
            </form>
        </div>
    )
}