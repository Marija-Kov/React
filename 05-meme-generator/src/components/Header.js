
import trollFace from '../assets/TrollFace.png'

export default function Header(){
    return(
        <header>
         <span className="logo-title">
             <img className="trollface" src={trollFace} alt="Troll Face" width="31px" />
             <h1>Meme Generator</h1>
         </span>
         <h2>React Course Project</h2>
        </header>
    )
} 