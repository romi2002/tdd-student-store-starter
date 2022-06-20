import * as React from "react"
import Logo from "../Logo/Logo";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <Logo imgSrc={"https://via.placeholder.com/300.png"}/>
    </nav>
  )
}
