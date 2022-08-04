import React, {useState, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import {input, inputContainer, uploadedImg} from "../../css/Onboarding.style";

const Onboarding = () => {
    let location = useLocation();
    const [values, setValues] = useState({
        imgFront: '',
        imgBack: '',
        gender: '',
    });
    const [flow, setFlow] = React.useState(0);

    const camera = useRef(null);
    const [image, setImage] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target
        const [file] = e.target.files;
        setValues({ ...values, [name]: URL.createObjectURL(file) })

    }
    const renderFlow = () =>{
        switch (flow) {
            case 0:
            default: return flow0();
            case 1:
                return flow1();
            case 2:
                return "Flow 3";
        }
    }



    const flow0 = () => {
        return (
            <form autoComplete="off" className="fade-in">
                <label style={inputContainer} htmlFor="imgFront" className={`rounded ${values.imgFront ? "border-success" : ''}`}>
                    {values.imgFront ? <img src={values.imgFront} className="rounded fade-in" style={uploadedImg} alt="front" /> : ''}
                    <input id="imgFront" onChange={handleChange} style={input} name="imgFront" type="file" />
                    <i className="fa-solid fa-cloud-arrow-up px-2"></i> {values.imgFront ? "Reemplazar" : "Sube el frente de tu INE" }
                </label>
                <label style={inputContainer} htmlFor="imgBack" className={`rounded mt-3 ${values.imgBack ? "border-success" : ''}`}>
                    {values.imgBack ? <img src={values.imgBack} className="rounded fade-in" style={uploadedImg} alt="back" /> : ''}
                    <input id="imgBack" onChange={handleChange} style={input} name="imgBack" type="file" />
                    <i className="fa-solid fa-cloud-arrow-up px-2"></i> {values.imgFront ? "Reemplazar" : "Sube el reverso de tu INE" }
                </label>
                <hr/>




            </form>
        )
    }

    const flow1 = () => {
        return (
            <div className="fade-in">Flow 1</div>
        )
    }




    return(
        <div className='container-fluid h-100 fade-in d-flex flex-column'>
            <div className="row justify-content-sm-center mt-5">
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-5 mb-5">
                    <div className="text-center bold mb-5">
                        <h1>Validemos tu identidad</h1>
                        <p>Sube tu INE y tómate una foto</p>
                    </div>
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-6 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
                            {renderFlow()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding;