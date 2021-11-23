import style from './Select.module.css'

const Select = ({text, name, options , handleOnChange, value}) => {
    return(
        <div className={style.select_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
            <option>Slecione uma Opção</option>
            </select>
        </div>
    );
}

export default Select