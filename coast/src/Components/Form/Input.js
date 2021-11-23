import style from './Input.module.css'

const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
    );
}

export default Input