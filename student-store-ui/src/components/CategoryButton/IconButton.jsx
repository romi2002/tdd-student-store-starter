import * as React from "react"
import "./IconButton.css"

/*
Creates a button with an icon used to filter out categories
 */
export default function IconButton({
                                           onSelectedHandler: onClick,
                                           icon,
                                           text,
                                           isActive = true,
                                       }) {
    return (
        <div className={isActive ? 'icon-button' : 'button-inactive icon-button'}
            onClick={onClick}>
            {text && <span className='icon-button'>{text}</span>}
            {icon && icon}
        </div>)
}