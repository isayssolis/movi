import React, {useState} from "react";
import {bgAuto, bgDots, carText, containerAuto, p1, p2, textContainer, } from '../../css/CreateAccount.style'

const CreateAccount = () => {

    let [showLabel, setShowLabel] = useState(false);

    const focusInput = () => {
        setShowLabel(true)
        console.log('hi')
    }

    return(
            <div className="container-fluid h-100 fade-in d-flex flex-column">
                <div className="row h-100">
                    <div className="col-lg-6">
                        <div className="container mt-5 fade-in">
                            <div className="row justify-content-md-center">
                                <div className="col-sm-12 col-md-6 col-lg-5 mt-5">
                                    <div className="text-center bold">
                                        <h1>Crear cuenta</h1>
                                        <p>Te damos la bienvenida a la forma más fácil y accesible de estrenar un auto</p>
                                    </div>
                                    <form action="">
                                        <div className="input-group input-group-lg mb-4">
                                            <span className={showLabel ? 'overLabel fade-in' : 'd-none'}>Email</span>
                                            <input type="text" className="form-control bg-light border-0 rounded"
                                                   placeholder='Correo electrónico'
                                            />
                                        </div>
                                        <div className="input-group input-group-lg mb-4">
                                            <input type="text" className="form-control bg-light border-0"
                                                   placeholder='Crea tu contraseña'
                                            />
                                            <span className="input-group-text"><i className="fa-solid fa-eye"> </i></span>
                                        </div>
                                        <div className="input-group input-group-lg">
                                            <input type="text" className="form-control bg-light border-0"
                                                   placeholder='Celular'
                                            />
                                        </div>
                                        <p className='small ms-3 text-light'>Número a 10 dígitos</p>
                                        <div className="input-group input-group-lg mt-4 mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input border-0" type="checkbox" />
                                                <label className="form-check-label small">
                                                    Acepto los <a href='#'><b>Términos, Condiciones y Políticas de Privacidad.</b></a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-lg" type="button">Crear cuenta</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 fade-in extra-div p-0" style={containerAuto}>
                        <div style={{...bgDots, ...p1}}> </div>
                        <div style={{...bgDots, ...p2}}> </div>
                        <div style={bgAuto}> </div>
                        <div style={textContainer}>
                            <h3 style={carText}>
                                La forma más fácil de estrenar auto
                                <br/>
                            </h3>
                            <h5 style={carText}>Sin pago inicial y con opción a compra</h5>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CreateAccount;