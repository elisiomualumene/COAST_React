import { Link } from 'react-router-dom';
import style from './LinkButton.module.css'

const LinkButton = ({to, text}) => {
    return(
        <>
        <Link to={to} className={style.btn}>
            {text}
        </Link>
        </>
    );
}

export default LinkButton