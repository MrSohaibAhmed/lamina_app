import React, { useEffect } from "react";
import heroCircle from "../../assets/img/hero-circle.png"; // Import your image file
import heroMainImg from "../../assets/img/hero-main.png";
import traderIconImg from "../../assets/img/trader-icon.png";
import trader1Img from "../../assets/img/trader-1.png";
import trader2Img from "../../assets/img/trader-2.png";
import trader3Img from "../../assets/img/trader-3.png";
import "./Landing.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import usePhantom from "../../components/hooks/usePhantom";
import { checkUser } from "../hooks/useWallet";
const LandingPage = () => {
  const {
    connectToPhantom,
    connected,
    account,
    web3,
    signMessage,
    newUsersignMessage,
    solanaKey,
  } = usePhantom();
  useEffect(() => {
    if (solanaKey) {
    checkUser(solanaKey)
      .then((res) => {
        // debugger
        console.log(res);
        localStorage.setItem("publicKey", res?.data?.data.publicKey);
        console.log("user found");
        signMessage();
      })
      .catch((error) => {
        newUsersignMessage();
        console.log("user not found");
        console.error("Error checking user:", error);
      });
    }
  }, [solanaKey]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // const clickHandler = ()=>{
  //   connectToPhantom()
  // }
  return (
    <div className="mainLandingPage">
      <div id="hero" className="hero d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Snipe and sell tokens <br /> at lightning speed
              </h1>
              <button className="btn-transparent" onClick={connectToPhantom}>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  Connect to start trading SOL now
                </h2>
              </button>
              <p>Install Phantom and connect your wallet to log in.</p>
            </div>
            <div
              className="col-lg-6 px-0 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={heroCircle} className="circle-img img-fluid" alt="" />
              <img src={heroMainImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-12 trader-heading text-center">
              <h1 className="main-heading">
                BUILT BY TRADERS
                <br /> <span className="text-gradiant">FOR TRADERS</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
      <div className="trader-div align-items-center">
        <div className="container trader-box">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <img src={traderIconImg} width="54px" alt="" />
              <h1 className="trader-hd">Discover</h1>
              <p>Discover new tokens and filter by your preferences.</p>
              <h2 className="trading-num">01</h2>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src={trader1Img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="container trader-box">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <img src={traderIconImg} width="54px" alt="" />
              <h1 className="trader-hd">Monitor</h1>
              <p>
                Real-time security updates & easily monitor
                <br className="d-break" /> your portfolio.
              </p>
              <h2 className="trading-num">02</h2>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src={trader2Img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="container trader-box">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <img src={traderIconImg} width="54px" alt="" />
              <h1 className="trader-hd">Quick Buy and Sell</h1>
              <p>
                Trade faster with Photon with a speed
                <br className="d-break" /> advantage for every transaction.
              </p>
              <h2 className="trading-num">03</h2>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src={trader3Img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="main-heading">
                START TRADINGIN
                <br /> LESS THAN 30 SECS
              </h1>
              <p>Install Phantom and connect your wallet to log in.</p>
            </div>
            <div className="col-lg-12 footer-bottom">
              <div className="row">
                <div className="col-lg-6 text-lg-start text-center">
                  <p>© Lumina wallet Inc. 2024</p>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                  <Link onClick={scrollToTop}>Terms of use </Link> |{" "}
                  <Link onClick={scrollToTop}>Privacy policy </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
