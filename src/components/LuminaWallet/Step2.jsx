
import React, { useContext, useState } from 'react';
import '../Navbar/ExternalNavbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './step2.css'
import KeyContext from '../../context/walletContext';
const Step2 = () => {
    const { privateKey, publicKey } = useContext(KeyContext);
    const [revealPrivateKey, setRevealPrivateKey] = useState(false);
    const navigate = useNavigate();
    const handleCopy = (keyValue) => {
        navigator.clipboard.writeText(keyValue)
            .then(() => {
                console.log("Text copied to clipboard:");
            })
            .catch((error) => {
                console.error("Error copying text:", error);
            });
    }
    const handleReveal = () => {
        setRevealPrivateKey(true);
    };
    return (
        <div className='step2main'>
            <div className="text-center py-4"><Link to="/"><img src="assets/img/logo.png" width="200px" alt="" /></Link></div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 pt-5 text-center">
                            <h1 className="main-heading">This is your <br className="d-break" /> Lumina trading wallet</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mx-auto step-box text-lg-start">
                            <div className="row">
                                <div className="col-lg-11 mx-auto">
                                    <h3 className="mb-4">Lumina Trading wallet</h3>
                                    <div className="row">
                                        <div className="col-lg-12 mx-auto">
                                            <div className="input-group input-group-lg mb-4">
                                                <input readOnly type="text" value={publicKey} className="form-control" aria-label="Amount" />
                                                <span className="input-group-text"><FontAwesomeIcon onClick={() => handleCopy(publicKey)} icon={faCopy} /></span>
                                            </div>

                                        </div>
                                    </div>
                                    <h3 className="mb-1">Private Key</h3>

                                    <div style={{
                                        opacity: revealPrivateKey ? 1 : 0.02,
                                        transition: 'opacity 0.5s ease-in-out'
                                    }} className="input-group input-group-lg mb-4">
                                        <input readOnly type="text" value={privateKey} className="form-control" aria-label="Amount" />
                                        <span className="input-group-text"><FontAwesomeIcon onClick={handleCopy} icon={faCopy} /></span>
                                    </div>
                                    <p style={{
                                        opacity: revealPrivateKey ? 1 : 0.04,
                                        transition: 'opacity 0.5s ease-in-out'
                                    }} className="mb-0">Please copy the below private key and store it in a safe location. Your private key will NOT be displayed again.</p>
                                    <div className="text-center mb-5">
                                        <button className="step-box-btn" onClick={handleReveal}>Click here to reveal private key</button>
                                    </div>

                                    <div className="text-center mt-5"> <Link className="step-box-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Continue</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row step2main">
                        <div className="col-lg-3 mx-auto">
                            <nav className="WizardSteps">
                                <a className="WizardSteps__step WizardSteps__step--complete">
                                    <span className="WizardSteps__status">
                                        <span className="WizardSteps__status-text">✔</span>
                                    </span>
                                </a>

                                <hr className="WizardSteps__line" />

                                <a className="WizardSteps__step WizardSteps__step--complete">
                                    <span className="WizardSteps__status">
                                        <span className="WizardSteps__status-text">✔</span>
                                    </span>
                                </a>

                                <hr className="WizardSteps__line" />

                                <a className="WizardSteps__step WizardSteps__step--active">
                                    <span className="WizardSteps__status">
                                        <span className="WizardSteps__status-text"></span>
                                    </span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Button trigger modal --> */}

                {/* <!-- Modal --> */}
                <div className="modal " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Final chance to save private key</h5>
                                <p className="py-4">You will not be able to retrieve it again.</p>
                                <div className="my-3">
                                    <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                                    <button data-bs-dismiss="modal" className="btn-save" onClick={()=>{navigate('/step3')}}>I already saved it</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Step2;


