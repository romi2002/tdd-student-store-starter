import * as React from "react"
import {FaFacebook, FaFacebookMessenger, FaInstagramSquare} from "react-icons/all";
import './SocialsBar.css'

export default function SocialsBar({}) {
    const LinkedIcon = ({icon, url = "https://facebook.com"}) => {
        return (<a className='socials-link' href={url}><span className='icon'>
            {icon}
        </span></a>)
    }

    return (
        <div className={'socials-bar'}>
            <LinkedIcon icon={<FaFacebook/>}/>
            <LinkedIcon icon={<FaFacebookMessenger/>}/>
            <LinkedIcon icon={<FaInstagramSquare/>}/>
        </div>
    )
}