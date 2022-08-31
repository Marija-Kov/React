import logo from '../assets/logo.png'
import line from '../assets/vector-line.svg'

export default function Navbar(){
    return (
        <nav>
            <img className="logo" src={logo} alt='logo' />
            <img className="curvy-line" src={line} alt='' />
        </nav>
    )
}