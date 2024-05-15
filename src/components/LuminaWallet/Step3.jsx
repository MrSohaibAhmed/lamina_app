import React from 'react';
// import '../Navbar/Navbar.css'
import '../Navbar/ExternalNavbar/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
const navigate = useNavigate();
    return (
        <div>
            <div className="text-center py-4"><a href="index.html"><img src="assets/img/logo.png" width="200px" alt="" /></a></div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 pt-5 text-center">
                            <h1 className="main-heading">Confirm your Photon trading <br className="d-break" /> wallet balance</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mx-auto step-box">
                            <h3 className="mb-4">Oops! Your Photon wallet has 0 SOL Deposit SOL to this<br className="d-break" /> wallet to start trading</h3>
                            <div className="mb-5"><a href="#"></a>8ANgsVdw2dQXZtyJbXAdBvi6njrv4KB1VLmFhLmFjWum <i className="fa fa-copy"></i></div>
                            <button onClick={()=>{navigate('/dashboard')}} className="step-box-btn" href="#">Check Balance</button>
                        </div>
                    </div>
                    <div className="row">
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

                                <a className="WizardSteps__step WizardSteps__step--complete">
                                    <span className="WizardSteps__status">
                                        <span className="WizardSteps__status-text">✔</span>
                                    </span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Step3