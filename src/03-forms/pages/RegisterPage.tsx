import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {

    const {onChange, formData, name, email, password1, password2, resetForm, isValidEmail} = useForm({
        name:"",
        email: "",
        password1: "",
        password2: "",
    });

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {name.trim().length <= 0 && <span>El name es obligatorio</span>}
                <input 
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                { !isValidEmail( email ) && <span>El email no es válido</span>}
                <input 
                    type="password"
                    placeholder="password"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                />
                 {password1.trim().length <= 0 && <span>El password es obligatorio</span>}
                 {password1.trim().length < 6 && password1.trim().length > 0 && <span>El password debe tener más de 6 letras</span>}
                <input 
                    type="password"
                    placeholder="repeat password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                />
                 {password2.trim().length <= 0 && <span>El password es obligatorio</span>}
                 {password1.trim().length > 0 && password1 !== password2 && <span>password incorrecta</span>}
                <button>create</button>

                <button onClick={resetForm}>reset</button>

            </form>
        </div>
    )
}
