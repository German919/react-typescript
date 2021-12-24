import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
  } from "react-router-dom";
import logo from "../logo.svg"
import { DinamicForm } from '../03-forms/pages/DinamicForm';
import { FormikBasicPage} from '../03-forms/pages/FormikBasicPage';
import { FormikAbstract, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';



export const Navigations = () => {

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? "nav-active" : ""} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({isActive})=> isActive ? "nav-active" : ""} >Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={({isActive})=> isActive ? "nav-active" : ""} >Formik</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={({isActive})=> isActive ? "nav-active" : ""} >Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={({isActive})=> isActive ? "nav-active" : ""} >Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstraction" className={({isActive})=> isActive ? "nav-active" : ""} >Formik Abstraction</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register-formik-page" className={({isActive})=> isActive ? "nav-active" : ""} >Register Formik Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dinamic-form" className={({isActive})=> isActive ? "nav-active" : ""} >Dinamic Form </NavLink>
                    </li>
                </ul>
                </nav>
                <Routes>

                     <Route  path="/" element={<h1>Home</h1>} />
                    <Route path="/formik-basic" element={<FormikBasicPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstraction" element={<FormikAbstract />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/register-formik-page" element={<RegisterFormikPage />} />
                    <Route path="/dinamic-form" element={<DinamicForm />} />  
                    <Route path="/*" element={<Navigate to="/register" replace />} / >
                </Routes>
            </div>
        </BrowserRouter>
        
    )
}
