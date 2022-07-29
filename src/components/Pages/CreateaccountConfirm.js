import React, {useState} from "react";

const CreateAccountConfirm = () => {


    return(
        <div className="container-fluid h-100 fade-in d-flex flex-column">
            <div className="row justify-content-md-center mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="text-center bold">
                        <h1>Para crear tu cuenta, ingresa el código que te mandamos al:</h1>
                    </div>
                    <form action="" autoComplete="off">

                        <div className="input-group input-group-lg mb-4">
                            <input type="text" className="form-control bg-light rounded"
                                   placeholder='Correo electrónico'
                                   name='email'
                            />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg"  type="button">Crear cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountConfirm;