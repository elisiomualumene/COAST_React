import Input from '../Form/Input';
import Select from '../Form/Select';
import Submit from '../Form/Submit';
import style from './ProjetoForm.module.css'

const ProjetoForm = ({btntext}) => {
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
    <Select name="category_id" text="Selecione a categoria"/>
    <Submit text={btntext}/>

</form>
        </>
    );
}

export default ProjetoForm