import React, { useContext, useState } from "react";
import logoImg from "../../assets/dashboard/logo.png";
import "../../components/Navbar/ExternalNavbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import KeyContext from "../../context/walletContext";
import Loader from "./Loader";

const TOPGWallets = () => {
  const navigate = useNavigate();
  const { generateKeyHandler } = useContext(KeyContext);
  const [loading, setLoading] = useState(false);

  const handleGenerateKey = async () => {
    setLoading(true);
    try {
      await generateKeyHandler();
      // Handle success if needed, e.g., navigate to another page
    } catch (error) {
      console.error("Error generating key:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center py-4">
      <Link className="navbar-brand" to="/">
            <img className="logo-img" src={logoImg} width="30px" alt="" /> TOPG
          </Link>
      </div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 pt-5 text-center">
              <h1 className="main-heading step-heading">
                Generate and download your
                <br className="d-break" /> TOPG trading wallet
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto step-box">
              <h3>
                Click Generate to obtain your TOPG wallet
                <br className="d-break" /> and private key!
              </h3>
              {loading ? (
                <center>
                  <Link className="step-box-btn" disabled>
                    Generating....
                  </Link>
                </center>
              ) : (
                <Link onClick={handleGenerateKey} className="step-box-btn">
                  Generate
                </Link>
              )}
            </div>
          </div>
          <div className="row bg-def">
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

export default TOPGWallets;
