import { useEffect, useState } from 'react';

import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import style from './ProjetoForm.module.css'

const ProjetoForm = ({handleSubmit, btntext, projectData}) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})


   useEffect(() => {
        fetch('http://localhost:5000/categories',{
        method: 'GET',
        header:{
            'Content-Type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
   }, [])


   const submit = (e)=> {
    e.preventDefault()
    console.log(project)
    handleSubmit(project)
   }

   function handleChange(e){
       setProject({...project, [e.target.name]: e.target.value })
       console.log(project)
   }

   function handleCategory(e){
    setProject({...project, category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    },
})
    console.log(project)
}

    return(
        <>
    <form className={style.form} onSubmit={submit}>
    
        <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        />

        <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        />

        <Select name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleonChange={handleCategory}
        value={project.category ? project.category.id : ''}
        />
    
        <Submit text={btntext}/>

    </form>
        </>
    );
} 

export default ProjetoForm