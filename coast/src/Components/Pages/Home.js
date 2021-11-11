import App from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
        <ul className={App}>
      <Link to='/Home'>Home</Link>
      <Link to='/Company'>Company</Link>
      <Link to='/Contato'>Contato</Link>
      <Link to='/Newproject'>Novo Projecto</Link>
      </ul>
        </div>
    );
}

export default Home