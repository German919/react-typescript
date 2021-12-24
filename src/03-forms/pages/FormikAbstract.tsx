import "../styles/styles.css";
import { Formik, Form} from "formik";
import * as Yup from "yup";

import { MyTextInput, MyCheckbox, MySelect} from "../components";

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstraction Tutorial</h1>   

            <Formik 
                initialValues={{
                    firstName:"",
                    lastName:"",
                    email:"",
                    terms: false,
                    jobType:"",
                }}
                onSubmit={(values)=> console.log(values)}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15,"maximo de 15 caracteres")
                                    .required("el nombre es requerido"),
                        lastName: Yup.string()
                                    .max(15,"maximo de 15 caracteres")
                                    .required("el apellido es requerido"),
                        email: Yup.string()
                                    .email("formato no valido")
                                    .required("el email es requerido"),
                        terms: Yup.boolean()
                                    .oneOf([true], "debe aceptar las condiciones."),
                        jobType : Yup.string()
                                    .notOneOf(["it-senior"], "ese campo no es permitido")
                                    .required("debe seleccionar una opcion"),            
                    })
                }
            >
            
            {
                () => (

                    <Form>

                        <MyTextInput name="firstName" label="FirstName"/>
                        <MyTextInput name="lastName" label="LastName"/>
                        <MyTextInput name="email" label="Email"/>

                        <MySelect label="JobType" name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-senior</option>
                            <option value="it-jr">It-Jr</option>
                        </MySelect>

                        <MyCheckbox label="Terminos & condiciones" name="terms"/>

                        <button type="submit">submit</button>
                    </Form>         
                )
            }

            </Formik>
            
        </div>
    )
}
