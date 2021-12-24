import data from "../data/custom-form.json";
import {Formik, Form} from "formik"
import { MyTextInput, MySelect } from '../components';
import * as Yup from "yup"

const initialValues:{[key:string]:any} = {};

const requiredFields:{[key:string]:any} = {};

for(const input of data){
    initialValues[input.name] = input.value

    if(!input.validations) continue

    let shema = Yup.string();

    for(const rule of input.validations){
        if(rule.type === "required"){
            shema = shema.required("este campo es requerido")
        }
        if(rule.type === "minLength"){
            shema = shema.min((rule as any).value || 1, "debe tener un minimo de 5 caracteres")
        }
        if(rule.type === "email"){
            shema = shema.email("formato no valido")
        }
    }
    requiredFields[input.name] = shema;
}

const validationSchema = Yup.object({...requiredFields})

export const DinamicForm = () => {
    
    return (
        <div>
            <h1>Dinamic Form</h1>

            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values)=>console.log(values)}
            >

                {
                    ()=> (

                        <Form noValidate>
                            {
                                data.map( ({name, placeholder, label, type, options}) => {

                                    if(type === "input" || type === "email" || type === "password"){
                                        return <MyTextInput 
                                        key={name}
                                        placeholder={placeholder}
                                        name={name}
                                        label={label}
                                        type={type as any}
                                    />
                                    } else if (type === "select"){
                                        return (
                                            <MySelect
                                                key={name}
                                                label={label}
                                                name={name} 
                                            >
                                                <option value="">select an options</option>
                                                {
                                                    options?.map(({id, label}) => (
                                                        <option key={id} value={id}>{label}</option>
                                                    ))
                                                }

                                            </MySelect>
                                        )
                                    }
                                  
                                })
                            }
                            <button type="submit">submit</button>

                        </Form>
                        )
                }
               
            </Formik>
        </div>
    )
}
