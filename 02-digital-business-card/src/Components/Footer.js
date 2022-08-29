import Twitter from '../assets/contact-social-icons/Twitter.png'
import Facebook from '../assets/contact-social-icons/Facebook.png'
import Instagram from '../assets/contact-social-icons/Instagram.png'
import Github from '../assets/contact-social-icons/Github.png'
export default function Footer() {
    return (
       <footer>
        <div class="social-group">
          <a href="https://twitter.com/v49925941"><img src={Twitter} alt="Twitter logo" /></a>
          <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook logo" /></a>
          <a href="https://www.instagram.com/recyclebin499/"><img src={Instagram} alt="Instagram logo" /></a>
          <a href="https://github.com/Marija-Kov"><img src={Github} alt="Github logo" /></a>
        </div>
      </footer>
    )
}