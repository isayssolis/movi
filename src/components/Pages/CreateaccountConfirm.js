import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../Context/AppContext";
import {Link} from "react-router-dom";
import {InputWidth} from "../../css/CreateAccount.style";
import {useNavigate} from "react-router-dom";

const initialValues = {
    code_1: "",
    code_2: "",
    code_3: "",
    code_4: "",
};

const CreateAccountConfirm = () => {

    const [context, setContext] = useContext(AppContext);
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(error)
        validate()
    }, [values]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value.charAt(0).trim(),
        });

        const form = e.target.form;
        const index = [...form].indexOf(e.target);
        form.elements[index + 1].focus();
    };

    const validate = ()=> {
        const valArray = Object.values(values);
        console.log(valArray)

        if(valArray.includes('')) {
            setError(true)
        }else setError(false)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        navigate("/success");
    }

    return(
        <div className="container-fluid h-100 fade-in d-flex flex-column">
            <div className="row justify-content-md-center mt-5">
                <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mt-5 mb-5">
                    <div className="text-center bold mb-4">
                        <h1>Para crear tu cuenta, ingresa el código que te mandamos al:</h1>
                    </div>
                    <h5 className="text-light text-center bold mb-4">
                        {context.phone}
                    </h5>
                    <p className="text-center bold">
                        <Link to="/create-account">Cambiar número</Link>
                    </p>
                </div>
            </div>
            <div className="row justify-content-sm-center">
                    <div className="col-sm-4 col-md-6 col-lg-5 col-xl-4 col-xxl-3">
                        <form onSubmit={onSubmitForm} autoComplete="off">
                            <div className="row justify-content-evenly">
                                <div className="col-3">
                                    <div className="input-group input-group-lg m-0-auto" style={InputWidth}>
                                        <input type="text" className="form-control bg-light rounded text-center"
                                               name='code_1'
                                               placeholder="0"
                                               value={values.code_1}
                                               onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-3 d-flex">
                                    <div className="input-group input-group-lg m-0-auto" style={InputWidth}>
                                        <input type="text" className="form-control bg-light rounded text-center"
                                               name='code_2'
                                               placeholder="0"
                                               value={values.code_2}
                                               onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-3 d-flex">
                                    <div className="input-group input-group-lg m-0-auto" style={InputWidth}>
                                        <input type="text" className="form-control bg-light rounded text-center"
                                               name='code_3'
                                               placeholder="0"
                                               value={values.code_3}
                                               onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-3 d-flex">
                                    <div className="input-group input-group-lg m-0-auto" style={InputWidth}>
                                        <input type="text" className="form-control bg-light rounded text-center"
                                               name='code_4'
                                               placeholder="0"
                                               value={values.code_4}
                                               onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <p className="text-center bold">
                                        <Link to="/create-account">Reenviar código</Link>
                                    </p>
                                    <div className="d-grid mt-5">
                                        <input className={`btn btn-lg ${error ? 'btn-secondary' : 'btn-primary'}`}
                                               disabled={error}
                                               type="submit" value="Continuar" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default CreateAccountConfirm;