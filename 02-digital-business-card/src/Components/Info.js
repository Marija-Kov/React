import Email from '../assets/contact-social-icons/Email.png'
import LinkedIn from '../assets/contact-social-icons/LinkedIn.png'
import photo from '../assets/keech-professional.jpeg'
export default function Info() {
    return (
        <>
       <div className="photo-container">
        <img className="photo" src={photo} alt="A developer" width="240px" />
       </div>  
       <div className="info-content">
        <h1>Keech Keech</h1>
        <h2>Frontend Developer</h2>
        <small>office@keech.org</small>
        <div className="button-group">
          <button className="email"><img src={Email} alt="Email icon" width="12px"/>Email</button>
          <button className="linkedin"><img src={LinkedIn} alt="LinkedIn logo" width="12px"/>LinkedIn</button>
        </div>
       </div>
        </>
    )
}