import { Link } from "react-router-dom";


const Home = () => {
    return(
    <div>
          <ul>
            <Link to='/Home'>Home</Link>
            <Link to='/Company'>Company</Link>
            <Link to='/Contato'>Contato</Link>
            <Link to='/Newproject'>Novo Projecto</Link>
        </ul>
    </div>
    );
}

export default Home