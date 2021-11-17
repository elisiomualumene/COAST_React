import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import style from './Footer.module.css'


const Footer = () => {
    return(
    <footer className={style.footer}>
    <ul className={style.social_list}>
        <li>
        <FaFacebook/>
        </li>
        
        
        <li>
        <FaInstagram/>
        </li>

        
        <li>
        <FaTwitter/>
        </li>
    </ul>
        <p className={style.copy_right}>
        <span>Costs</span>&copy; 2021
        </p>
    </footer>
    ); 
}

export default Footer