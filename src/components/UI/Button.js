import './Button.css'

const Button = (props) => {

    return (
        <div>
            <button className={props.variant}>{props.text}</button>
        </div>
    )
}

export default Button