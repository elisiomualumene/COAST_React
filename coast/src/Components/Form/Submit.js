import style from './Submit.module.css'

const Submit = ({text}) => {
    return(
    <div>
        <button className={style.btn}>{text}</button>
    </div>
    );
}

export default Submit