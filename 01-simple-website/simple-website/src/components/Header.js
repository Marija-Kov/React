import reactLogo from "../images/logo512.png"

export default function Header() {
    return(
    <>
        <nav>
            <span className="logo-group">
             <img className="react-logo" src={reactLogo} alt="React logo"/>
             <h3>ReactFacts</h3>
            </span>
            <h4 className="project">
                Project 1
            </h4>
        </nav>
     </>  
    )
}
