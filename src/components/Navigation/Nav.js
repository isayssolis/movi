import React, { useState, useRef, useEffect } from "react";
import {NavLink, useLocation} from "react-router-dom";
import {styleNavLink} from "./Nav.style"
import logo from '../../img/logo.svg';
import useUrl from "../Hooks/useUrl";

const Nav = () => {
    let location = useLocation();
    const showExtra = useUrl(location.pathname.toString())
    return (
        <div className={`${showExtra ? 'app-container' : ''} fixed-top `}>
            <nav className="navbar navbar-expand-lg bg-primary shadow-sm justify-content-between bg-white">
                <div className="container-fluid">
                    <NavLink to="/">
                        <img className='logo' src={logo} alt='logo'/>
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/create-account" style={styleNavLink}>Iniciar sesión</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;