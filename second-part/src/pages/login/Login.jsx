import { Form } from "../../components";
import {loginConfig} from "./config";
import data from "../../mockData.json";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = new FormData(e.target)
        const userData = Object.fromEntries(user.entries())

        data.data.map((item)=>{
            if (userData.email === item.email && userData.password === item.password) {
                console.log("Вы зашли под существующим пользователем")
            }

            return ''
        })

    };

    return (
        <Form
            title="Вход"
            subtitle="Для существующих пользователей"
            inputs={loginConfig}
            onSubmit={handleSubmit}
        />
    );
}

export default Login;
