import style from './layout.module.css'

const Container = (props) => {
    return(
        <div className={`${style.Container} ${style[props.customClass]}`}>
            {props.children}
        </div>
    );
}

export default Container