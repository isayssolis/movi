import React from "react";
import {Link, useLocation} from "react-router-dom";
import useUrl from "../Hooks/useUrl";
import {moviBtn, moviList, zi3} from "../../css/success.style";
import {bgDots, p1, p2} from "../../css/CreateAccount.style";

const Success = () => {
    let location = useLocation();
    const showExtra = useUrl(location.pathname.toString())


    return(
        <div className={`container-fluid h-100 fade-in d-flex flex-column ${showExtra.dark ? 'bg-dark text-white' : ''}`}>
            <div className="d-none d-sm-block" style={{...bgDots, ...p1}}> </div>
            <div style={{...bgDots, ...p2}}> </div>
            <div className="row justify-content-sm-center mt-5" style={zi3}>
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-5 mb-5">
                    <div className="text-center bold mb-3">
                        <h1>¡Bienvenido a Movi!</h1>
                    </div>
                    <ul className="list-unstyled" style={moviList}>
                        <li className="mt-3">
                            <span className="text-white"> <i className="fa-solid fa-user pe-4"></i> Validaremos tu identidad</span>
                        </li>
                        <li className="mt-4">
                            <span className="text-white"> <i className="fa-solid fa-credit-card pe-4"></i> Consultaremos tu buró de crédito</span>
                        </li>
                        <li className="mt-4">
                            <span className="text-white"> <i className="fa-solid fa-money-bill-1 pe-4"></i> Comprobaremos tus ingresos</span>
                        </li>
                    </ul>
                    <div className="text-center bold mt-4">
                        <p>Estás a tres sencillos pasos de estrenar el auto de tus sueños: </p>
                    </div>
                    <div className="text-center mt-4">
                        <Link className="btn btn-primary btn-lg" to="/onboarding" style={moviBtn} >Crear cuenta</Link>
                    </div>
                    <div className="text-center bold mt-4">
                        <Link className="text-white" to="/create-account">En otro momento</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;