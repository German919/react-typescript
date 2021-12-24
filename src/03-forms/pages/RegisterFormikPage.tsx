import "../styles/styles.css";
import { ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export const RegisterFormikPage = () => {

    return (
        <div>
            <Formik 
                initialValues= {{ 
                    name:"",
                    email: "",
                    password1: "",
                    password2: "",
                }}
            onSubmit={(values)=>console.log(values)}
            validationSchema={
                Yup.object({
                    name : Yup.string()
                                .min(2,"Debe tener un minimo de 2 caracteres")
                                .max(15,"debe tener un maximo de 15 caracteres")
                                .required("campo requerido"),
                    email : Yup.string() 
                                .email("formato no valido")
                                .required("email requerido"),
                    password1 : Yup.string()
                                .required("campo requerido")
                                .min(6, "la password debe tener como minimo 6 caracteres"),
                    password2 : Yup.string()
                                .oneOf([ Yup.ref("password1")], "los password deben ser iguales")
                                .required("campo requerido")
                })
            }
            >

            {
                ({handleReset, handleSubmit,}) => (

                    <Form>
                    <Field 
                        type="text"
                        placeholder="name"
                        name="name"
                    />
                    <ErrorMessage name="name" component="span" />
                    
                    <Field 
                        type="email"
                        placeholder="email"
                        name="email"
                    />
                    <ErrorMessage name="email" component="span" />
                   
                    <Field 
                        type="password"
                        placeholder="password"
                        name="password1"
                    />
                    <ErrorMessage name="password1" component="span" />
                    
                    <Field
                        type="password"
                        placeholder="repeat password"
                        name="password2"
                    />
                    <ErrorMessage name="password2" component="span" />
                   
                    <button type="submit">create</button>
    
                    <button onClick={handleReset}>reset</button>
    
                </Form>
                )
            }

            </Formik>
           
        </div>
    )
}
