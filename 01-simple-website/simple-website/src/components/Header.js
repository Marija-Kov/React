import React from "react"


export default function Header() {
    return(
    <header>
        <nav>
            <img className="react-logo" src="./logo512.png" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     </header>  
    )
}
