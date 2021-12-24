import "../styles/styles.css";
import {useFormik, FormikErrors } from "formik"

interface FormValues {
    firstName:string,
    lastName:string,
    email:string
}

export const FormikBasicPage = () => {

    const validate = (values:FormValues) => {

        const errors: FormikErrors<FormValues> = {}

        if(!values.firstName){
            errors.firstName = "required"
        }else if(values.firstName.length >= 15){
            errors.firstName = "must be 15 characters o less"
        }

        if(!values.lastName){
            errors.lastName = "required"
        }else if(values.lastName.length >= 10){
            errors.lastName = "must be 10 characters o less"
        }

        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

        
        return errors;

    }
    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email:""
        },
        onSubmit: ( values) => console.log(values),
        validate,
    })
    
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>   

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value= {values.firstName}
                />
                 {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value= {values.lastName}
                />
                 {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value= {values.email}
                />
                 {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">submit</button>
            </form>         
        </div>
    )
}
