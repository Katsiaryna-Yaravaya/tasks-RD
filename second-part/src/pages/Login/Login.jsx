import {useEffect, useState} from "react";
import { Form } from "../../components";
import {loginConfig} from "./config";
import data from "../../mockData.json";

const Login = () => {
    const [credentials, setCredentials] = useState([])

    useEffect(()=>{
        setCredentials(data.data)
    },[])

    const authentication = (userData) => {
        const userCredential = credentials.find((item) => userData.email === item.email && userData.password === item.password)

        if (userCredential) {
            console.log('Вы зашли под существующим пользователем')
        } else {
            console.log('Такого пользователя не существует')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = new FormData(e.target)
        const userData = Object.fromEntries(user.entries())
        authentication(userData);
    };

    return (
        <Form
            title="Вход"
            subtitle="Для существующих пользователей"
            buttonTitle={"Войти в систему"}
            inputs={loginConfig}
            onSubmit={handleSubmit}
        />
    );
}

export default Login;
