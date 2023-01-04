import "./styles.css";
import {useState} from "react";

const Input = ({type, label, isRequired, errorMessage, regex, onChange, name}) => {
    const [isValidate, setIsValidate] = useState(true)

    const handleChange = (e) => {
        if(onChange){
          onChange(e)
        }
        setIsValidate(() => regex.test(e.target.value))
    }

    return (
        <div className="inputField">
            <label htmlFor={type}>{label}</label>
            <input
                id={type}
                name={name}
                type={type}
                className={!isValidate ? "inputError" : "input"}
                required={isRequired}
                onChange={handleChange}
            />
            {!isValidate && <span>{errorMessage}</span>}
        </div>
    )
}
export default Input;
