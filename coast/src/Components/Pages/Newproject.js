// import { useHistory } from 'react-router-dom'
import ProjetoForm from '../Projeto/ProjetoForm';
import style from './Newprojects.module.css'

const Newproject = () => {


     //const history = useHistory()

     function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []


        fetch('http://localhost:5000/projects',{
            methond: 'POST',
            headers: {
                'Contend-type':'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            // redirect
        })
        .catch(err => console.log(err))
     }


    return(
        <div className={style.newprojet_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu Projeto para depois adicionar os serviços</p>
        <ProjetoForm handleSubmit={createPost} btntext="Criar Projeto"/>
        </div>
    );
}

export default Newproject