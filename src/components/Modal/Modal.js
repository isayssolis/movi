import React from "react";

const Modal = ({ handleClose, children }) => {

    return (
        <div className="modal fade-in show mt-5 d-block mb-5" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content mb-5">
                    <div className="p-2">
                        <a className="small text-light" onClick={handleClose}><i className="fa-solid fa-arrow-left-long"></i> Regresar </a>
                        <p className="modal-title text-center mt-2 bold">Tómate una foto de frente</p>
                    </div>
                    <div className="modal-body mb-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;