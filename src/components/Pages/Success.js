import React from "react";
import {Link, useLocation} from "react-router-dom";
import useUrl from "../Hooks/useUrl";

const Success = () => {
    let location = useLocation();
    const showExtra = useUrl(location.pathname.toString())


    return(
        <div className={`container-fluid h-100 fade-in d-flex flex-column ${showExtra.dark ? 'bg-dark text-white' : ''}`}>
            <div className="row justify-content-md-center mt-5">
                <div className="col-sm-12 col-md-6 col-lg-5 mt-5 mb-5">
                    <div className="text-center bold mb-4">
                        <h1>Para crear tu cuenta, ingresa el código que te mandamos al:</h1>
                    </div>
                    <h5 className="text-center bold mb-4">
                        hi
                    </h5>
                    <p className="text-center bold">
                        <Link to="/create-account">Cambiar número</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Success;