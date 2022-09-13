import reactLogo from "../images/logo512.png"

export default function Header(props) {
    return(
    <>
        <nav className={props.mode}>
            <span className="logo-group">
             <img className="react-logo" src={reactLogo} alt="React logo"/>
             <h3>ReactFacts</h3>
            </span>
            <div className={props.mode} id="toggle" onClick={props.toggle}>
                <div className={props.mode} id="toggle--circle"></div>
                </div>
        </nav>
     </>  
    )
}
