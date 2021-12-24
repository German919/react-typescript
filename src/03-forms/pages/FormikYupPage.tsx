import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";


export const FormikYupPage = () => {

   
    const {handleSubmit, 
        errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email:""
        },
        onSubmit: ( values) => console.log(values),
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15,"maximo de 15 caracteres")
                            .required("el nombre es requerido"),
            lastName: Yup.string()
                            .max(15,"maximo de 15 caracteres")
                            .required("el apellido es requerido"),
            email: Yup.string()
                       .email("formato no valido")
                       .required("el email es requerido")            
        })
    })

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>   

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    {...getFieldProps("firstName")}
                />
                 {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    {...getFieldProps("lastName")}
                />
                 {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    {...getFieldProps("email")}
                />
                 {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">submit</button>
            </form>         
        </div>
    )
}
