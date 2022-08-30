import logo from '../assets/airbnb-logo.png';
import imgGroup from '../assets/imgGroup.png'
export default function Hero(){
    return (
        <>
        <nav>
            <img className="logo" src={logo} alt="airbnb" />
        </nav>
        <div className="hero-image-wrapper">
        <img className="hero-image" src={imgGroup} alt="Hero group" />
        </div>
        <div className="title-wrapper">
        <h1>Online Experiences</h1>
        <h2>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
        </div>
        </>
    )
}