import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {styleNavLink} from "./Nav.style"
import logo from '../../img/logo.svg';
import logoB from '../../img/logoB.svg';
import useUrl from "../Hooks/useUrl";

const Nav = () => {
    let location = useLocation();
    const showExtra = useUrl(location.pathname.toString())

    return (
        <div className={`${showExtra.showExtra ? 'app-container' : ''} fixed-top`}>
                <nav className={`navbar navbar-expand-lg shadow-sm justify-content-between ${showExtra.dark ? 'bg-dark' : 'bg-white'}`}>
                <div className="container-fluid">
                    <NavLink to="/">
                        <img className='logo' src={`${showExtra.dark ? logoB : logo }`} alt='logo'/>
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/create-account"
                                         className={`${showExtra.dark ? 'text-white': ''}`}
                                         style={styleNavLink}>Iniciar sesión</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;