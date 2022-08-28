// with the correct setup - no CDNs: 
// import React from 'react'  -- that's where JSX syntax lives
//import ReactDOM from "react-dom"

const root = document.querySelector('#root');


function Header() {
    return(
    <header>
        <nav>
            <img className="react-logo" src="./react-logo-clipart.png" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     </header>  
    )
}

function MainContent() {
    return (
        <div>
         <h1>I want to learn React because..</h1>
        <ul>
            <li>I want to be more competent at the front-end </li>
            <li>It looks interesting and practical</li>
            <li>And many more reasons</li>
        </ul>
       </div> 
    )
}

function Footer() {
    return (
        <footer className="copyright">
            <small>2022 Marija K. All rights reserved.</small >
        </footer> 
    )
}

function Reasons() {
    return(  
    <div>
       <Header />
       <MainContent />
       <Footer />
     </div>
    )
}

ReactDOM.render(<Reasons />, root)

