import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
  } from "react-router-dom";
import logo from "../logo.svg"
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigations = () => {

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive ? "nav-active" : ""} >Shopping Store</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=> isActive ? "nav-active" : ""} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={({isActive})=> isActive ? "nav-active" : ""} >Users</NavLink>
                    </li>
                </ul>
                </nav>
                <Routes>
                    
                    <Route path="/" element={<ShoppingPage />} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/*" element={<Navigate to="/" replace />} / >
                </Routes>
            </div>
        </BrowserRouter>
        
    )
}
