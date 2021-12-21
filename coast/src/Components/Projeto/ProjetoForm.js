import { useEffect, useState } from 'react';

import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import style from './ProjetoForm.module.css'

const ProjetoForm = ({btntext}) => {

    const [categories, setCategories] = useState([])

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

    return(
        <>
<form className={style.form}>
    <Input
    type="text"
    text="Nome do Projeto"
    name="name"
    placeholder="Insira o nome do projeto"
    />
    <Input
    type="number"
    text="Orçamento do Projeto"
    name="budget"
    placeholder="Insira o orçamento do projeto"
    />
    <Select name="category_id" text="Selecione a categoria" options={categories}/>
    <Submit text={btntext }/>

</form>
        </>
    );
} 

export default ProjetoForm