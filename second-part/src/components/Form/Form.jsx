import {Button, Input} from "../index";
import "./styles.css";

const Form = ({title, subtitle, inputs, className, onSubmit, buttonTitle}) => {

    return (
        <form onSubmit={onSubmit} className="form">
            <h3>{title}</h3>
            <span>{subtitle}</span>
            {inputs.map((item, idx) => <Input
                key={`${idx}-${item.type}`}
                type={item.type}
                name={item.name}
                label={item.label}
                isRequired={item.isRequired}
                errorMessage={item.errorMessage}
                regex={item.regex}
            />)}
            <div className={className ? className : "buttonField"}>
                <Button type="submit" name={buttonTitle}/>
            </div>
        </form>
    );
};

export default Form;
