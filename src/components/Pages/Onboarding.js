import React, {useState, useRef, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {input, inputContainer, uploadedImg} from "../../css/Onboarding.style";
import Webcam from "react-webcam";
import Modal from "../Modal/Modal";
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};
const Onboarding = () => {
    let location = useLocation();
    const [values, setValues] = useState({
        imgFront: '',
        imgBack: '',
    });
    const [flow, setFlow] = useState(0);
    const [modal, setModal] = useState(false);
    const [imgFace, setImgFace] = useState('');
    const [error, setError] = useState(true);

    useEffect(() => {
        console.log(error)
        validate()
    }, [values]);

    const validate = ()=> {
        const valArray = Object.values(values);
        if(valArray.includes('') && !imgFace) {
            setError(true)
        }else setError(false)
    }
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


   const modalOpen = () => {
       setModal(true)
    }

    const modalClose = () =>  {
        setModal(false)
    }


    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        (e) => {
            e.preventDefault();
            const imageSrc = webcamRef.current.getScreenshot();
            setImgFace(imageSrc)
            setModal(false)
        },
        [webcamRef]
    );
    const deleteFace = (e) => {
        e.preventDefault();
        setImgFace('');
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
                <label style={inputContainer} htmlFor="imgFace" className={`rounded mt-3 ${imgFace ? "border-success" : ''}`}>
                    {imgFace ? <img src={imgFace} className="rounded fade-in" style={uploadedImg} alt="face" /> : ''}
                    <input id="imgFace" onClick={modalOpen} style={input} name="imgFace" type="button" />
                    <i className="fa-solid fa-cloud-arrow-up px-2"></i> {imgFace ? "Reemplazar" : "Tómate una foto de frente" }
                </label>
                {modal ? <Modal handleClose={modalClose}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={"100%"}
                        videoConstraints={videoConstraints}
                    />
                    <div className="d-grid">
                    <button className="btn btn-primary btn-lg"  onClick={capture} >Tomar foto</button>
                    </div>
                </Modal> : ''}
                <div className="col-12">
                    <div className="d-grid mt-3">
                        <input className={`btn btn-lg ${error ? 'btn-secondary' : 'btn-primary'}`}
                               disabled={error}
                               type="submit" value="Crear cuenta" />
                    </div>
                </div>
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