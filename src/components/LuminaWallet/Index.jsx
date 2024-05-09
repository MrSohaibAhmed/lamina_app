import React, { useContext, useState } from 'react';
import logoImg from '../../assets/img/logo.png'
import '../../components/Navbar/ExternalNavbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import KeyContext from '../../context/walletContext';



const LuminaWallets = () => {
  const navigate = useNavigate();
  // const { privateKey, publickey, balance } = useContext(KeyContext)
  const { generateKeyHandler } = useContext(KeyContext);

  // const generateKeyHandler = () => {
  //   console.log("Private key is", privateKey);
  // }

  // console.log("step1 public key" , publicKey);

  return (
    <div>
      <div className="text-center py-4">
        <Link to="/">
          <img src={logoImg} width="200px" alt="" />
        </Link>
      </div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 pt-5 text-center">
              <h1 className="main-heading">
                Generate and download your<br className="d-break" /> Lumina trading wallet
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mx-auto step-box">
              <h3>
                Click Generate to obtain your lumina wallet<br className="d-break" /> and private key!
              </h3>
              <Link onClick={generateKeyHandler} className="step-box-btn" >
                Generate
              </Link>
              {/* <button onClick={click}>Click me </button> */}
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

                <a className="WizardSteps__step WizardSteps__step--active">
                  <span className="WizardSteps__status">
                    <span className="WizardSteps__status-text"></span>
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
      </section>
    </div>
  );
};

export default LuminaWallets;
