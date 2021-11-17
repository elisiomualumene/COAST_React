import LinkButton from '../Layout/LinkButton';
import style from './Home.module.css'

const Home = () => {
    return(
        <section className={style.home}>
        <h1>Bem-Vindo ao <span>Costs</span></h1>
        <p>Comece a Gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="./Newproject" text="Criar Projeto"/>
        </section>
    );
}

export default Home