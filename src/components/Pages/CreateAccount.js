import React, {useContext, useState} from "react";
import {bgAuto, bgDots, carText, containerAuto, p1, p2, textContainer, } from '../../css/CreateAccount.style'
import {regexEmail} from "../../helpers/Regex";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../Context/AppContext";

const initialValues = {
    email: "",
    password: "",
    phone: "",
};
const errorValues = {
    type: "",
    message: "",
    name: ""
};

const CreateAccount = () => {

    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(errorValues);
    const [togglePass, setTogglePass] = useState(false);
    const navigate = useNavigate();
    const [context, setContext] = useContext(AppContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleCheckPassword = () =>  {
        setTogglePass(!togglePass)
    }

    const handleOnBlur = (e) => {
        setError(errorValues)
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                if(regexEmail.test(value)){
                    setError({name: name, type: 'is-valid', message: ''})
                }else{
                    setError({name: name, type: 'is-invalid', message: 'Email incorrecto'})
                }
                break;
            case 'password':
                if(value){
                    setError({name: name, type: 'is-valid', message: ''})
                }else{
                    setError({name: name, type: 'is-invalid', message: 'password incorrecto'})
                }
                console.log(regexEmail.test(value))
                break;
            case 'phone':
                if(isNaN(value) || value.length > 10 || value.length < 10 || !(value)){
                    setError({name: name, type: 'is-invalid', message: 'Ingresa un número válido'})
                }else{
                    setError({name: name, type: 'is-valid', message: ''})
                }
                console.log(regexEmail.test(value))
                break;
        }
    }

    const renderAlert = (name)=>{
        if(error.name === name){
            return error.type
        }
        else return ''
    }

    const renderMessage= ()=>{
        if(error.name === 'phone'){
            if(error.message){
                return (
                    <div className="alert alert-danger small" role="alert">
                        {error.message}
                    </div>
                )
            }else return <p className='small ms-3 text-light'>Número a 10 dígitos</p>
        }
        else return (<p className='small ms-3 text-light'>Número a 10 dígitos</p>)
    }

    const navigateSuccess = () =>{
        setContext(values);
        navigate("/create-account/confirm");
    }

    return(
        <div className="container-fluid h-100 fade-in d-flex flex-column">
            <div className="row h-100">
                <div className="col-lg-6">
                    <div className="container mt-5 fade-in">
                        <div className="row justify-content-md-center">
                            <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                                <div className="text-center bold">
                                    <h1>Crear cuenta</h1>
                                    <p>Te damos la bienvenida a la forma más fácil y accesible de estrenar un auto</p>
                                </div>
                                <form autoComplete="off">
                                    <div className="input-group input-group-lg mb-4">
                                        <input type="text" className={`form-control bg-light rounded ${renderAlert('email')}`}
                                               placeholder='Correo electrónico'
                                               value={values.email}
                                               onChange={handleInputChange}
                                               onBlur={handleOnBlur}
                                               name='email'
                                        />
                                    </div>
                                    <div className="input-group input-group-lg mb-4">
                                        <input type={`${togglePass ? 'text' : 'password'}`}
                                               className={`form-control bg-light rounded ${renderAlert('password')}`}
                                               placeholder='Crea tu contraseña'
                                               value={values.password}
                                               onChange={handleInputChange}
                                               onBlur={handleOnBlur}
                                               name='password'
                                        />
                                        <span className="input-group-text selectable" onClick={()=>handleCheckPassword()}>
                                            {togglePass ? <i className="fa-solid fa-eye"> </i> : <i className="fa-solid fa-eye-slash"> </i>}

                                        </span>
                                    </div>
                                    <div className="input-group input-group-lg">
                                        <input type="text" className={`form-control bg-light rounded ${renderAlert('phone')}`}
                                               placeholder='Celular'value={values.phone}
                                               onChange={handleInputChange}
                                               onBlur={handleOnBlur}
                                               name='phone'
                                        />
                                    </div>
                                    {renderMessage()}
                                    <div className="input-group input-group-lg mt-4 mb-4">
                                        <div className="form-check">
                                            <input className="form-check-input border-0" type="checkbox" />
                                            <label className="form-check-label small">
                                                Acepto los <a href='#'><b>Términos, Condiciones y Políticas de Privacidad.</b></a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                            <button className="btn btn-primary btn-lg" onClick={navigateSuccess} type="button">Crear cuenta</button>
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