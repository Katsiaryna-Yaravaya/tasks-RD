export const loginConfig = [
    {
        type: "email",
        label: "E-Mail:",
        isRequired: true,
        errorMessage: "Укажите корректный email адрес",
        name: "email",
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    },
    {
        type: "password",
        label: "Пароль:",
        isRequired: true,
        errorMessage: "Введите пароль больше 8 символов",
        name: "password",
        regex: /[a-zA-Z0-9]{8,}$/g
    }
]
