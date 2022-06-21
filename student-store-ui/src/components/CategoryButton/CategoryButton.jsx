import * as React from "react"
import "./CategoryButton.css"

export default function CategoryButton({onSelectedHandler,
                                       icon,
                                       text}){
    return (
        <div>
            <button onClick={onSelectedHandler}>{text}</button>
            {icon}
        </div>)
}