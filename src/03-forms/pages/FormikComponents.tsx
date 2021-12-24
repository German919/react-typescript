import "../styles/styles.css";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components Tutorial</h1>   

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
                                    .required("el email es requerido"),            
                    })
                }
            >
            
            {
                () => (

                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field 
                            type="text" 
                            name="firstName"
                        />
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field 
                            type="text"
                            name="lastName" 
                        />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email address</label>
                        <Field 
                            type="email"
                            name="email" 
                        />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job type</label>
                        <Field as="select"name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-senior</option>
                            <option value="it-jr">It-Jr</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label htmlFor="terms">
                            <Field type="checkbox" name="terms" />
                            terms and condictios
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">submit</button>
                    </Form>         
                )
            }

            </Formik>
            
        </div>
    )
}
