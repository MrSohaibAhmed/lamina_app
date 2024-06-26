import React from 'react';
// import '../Navbar/Navbar.css'
import '../Navbar/ExternalNavbar/Navbar.css'
import { useNavigate } from 'react-router-dom';
import KeyContext from '../../context/walletContext';
import { useContext } from 'react';
const Step3 = () => {
    const { privateKey, publicKey, decryptPrivateKey } = useContext(KeyContext);

    const navigate = useNavigate();
    return (
        <div>
            <div className="text-center py-4"><a href="index.html"><img src="assets/img/logo.png" width="200px" alt="" /></a></div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 pt-5 text-center">
                            <h1 className="main-heading step-heading">Confirm your TOPG trading <br className="d-break" /> wallet balance</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mx-auto step-box">
                            <h3 className="mb-4">Your TOPG Trading Wallet is now at 0 SOL Balance, if you want to Trade Right away, <br className="d-break" /> deposit $SOL to address below.</h3>
                            <div className="mb-5">{publicKey}<i className="fa fa-copy"></i></div>
                            <button onClick={() => { navigate('/dashboard') }} className="step-box-btn" href="#">Check Balance</button>
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