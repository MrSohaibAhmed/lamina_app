import React from 'react';
import logoImg from '../../assets/img/logo.png'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

const LuminaWallets = () => {
  return (
    <div>
      <div className="text-center py-4">
        <a href="index.html">
          <img src={logoImg} width="200px" alt="" />
        </a>
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
              <Link className="step-box-btn" to={"/step2"}>
                Generate
              </Link>
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
