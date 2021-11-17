import { Link } from "react-router-dom";
import Container from "./Container";
import style from './NavBar.module.css'

const NavBar = () => {
        return(
            <nav className={style.Navbar}>
                <Container>
                <ul className={style.list}>

                <li className={style.item}><Link to='/'>Home</Link></li>

                <li className={style.item}><Link to='/Project'>Project</Link></li>

                <li className={style.item}><Link to='/Contato'>Contato</Link></li>

                <li className={style.item}><Link to='/Company'>Company</Link></li>

                </ul>
                </Container>
            </nav>
        );
    }
export default NavBar