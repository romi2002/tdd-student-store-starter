import * as React from "react"
import "./CategoryButton.css"

/*
Creates a button with an icon used to filter out categories
 */
export default function CategoryButton({
                                           onSelectedHandler,
                                           icon,
                                           text,
                                           isActive
                                       }) {
    return (
        <div className={isActive ? 'category-button' : 'category-button button-inactive'}>
            <button
                onClick={onSelectedHandler}>{text}</button>
            {icon}
        </div>)
}