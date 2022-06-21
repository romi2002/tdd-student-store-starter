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
                    <div className={'search-bar'}>
                        <span className={'search-bar'}><FaSearch/></span>
                        <input type="text" name="search-bar" onChange={handleSearchChange}/>
                    </div>
                </label>
            </form>
        </div>
    )
}