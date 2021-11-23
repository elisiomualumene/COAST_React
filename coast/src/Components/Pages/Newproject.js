import ProjetoForm from '../Projeto/ProjetoForm';
import style from './Newprojects.module.css'

const Newproject = () => {
    return(
        <div className={style.newprojet_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu Projeto para depois adicionar os serviços</p>
        <ProjetoForm btntext="Criar Projeto"/>
        </div>
    );
}

export default Newproject