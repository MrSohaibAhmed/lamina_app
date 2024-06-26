import React, { useEffect, useState } from "react";
// import { PublicKey } from "@solana/web3.js"
import logoImg from "../../../assets/dashboard/logo.png";
import solImg from "../../../assets/img/sol-d6ecfc05903dc1848872e95eab3de8cdbdeb68927d14e9d1dcf5d16212d65f74.svg";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import usePhantom from "../../../components/hooks/usePhantom";
import { checkUser } from "../../hooks/useWallet";
import ModalComp from "./ModalComp";
import { useParams } from "react-router-dom";
import { pairData } from "../../hooks/useWallet";
import { useContext } from "react";
import KeyContext from "../../../context/walletContext";
const NavbarComp = () => {
  const { tokenid } = useParams();
  const { setCoinsKey, setNoDetails, setSolBalance, solBalance } =
    useContext(KeyContext);
  const navi = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {
    connectToPhantom,
    connected,
    signMessage,
    newUsersignMessage,
    solanaKey,
    connectToSolflare,
    SignMessageWithSolflare,
    newSignMessageWithSolflare,
  } = usePhantom();
  useEffect(() => {
    //////debugger;
    if (solanaKey) {
      checkUser(solanaKey)
        .then((res) => {
          //////debugger
          localStorage.setItem("publicKey", res?.data?.data.publicKey);
          console.log("user found");
          if (localStorage.getItem("connectedToSolflare")) {
            SignMessageWithSolflare();
          } else {
            signMessage();
          }
        })
        .catch((error) => {
          if (localStorage.getItem("connectedToSolflare")) {
            newSignMessageWithSolflare();
          } else {
            newUsersignMessage();
          }

          console.log("user not found");
          console.error("Error checking user:", error);
        });
    }
  }, [solanaKey]);

  const handleConnectWallet = () => {
    setShowModal(true); // Show modal when "Connect Wallet" button is clicked
    // connectToPhantom();
  };
  const gotoDashboard = () => {
    navi("/dashboard");
  };
  useEffect(() => {
    const fetchPairData = async () => {
      //debugger
      try {
        // const res = await pairData(
        //   "CwJCznavdHe6AYU85v56nDh1VCWKs3ywcRj8uShXd3F3"
        // );
        const res = await pairData(
          tokenid
        );
        console.log(res?.data, "Response data is = >>>>>>>>>");
        setCoinsKey(res?.data);
      } catch (error) {
        console.error("Error fetching pair data:", error);
      }
    };

    // Call the async function
    fetchPairData();
  }, []); //

  return (
    <>
      <nav className="navbar py-3 navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo-img" src={logoImg} width="30px" alt="" /> TOPG TRADING
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="mx-4 txt-nav">
                  $TOPG CA - AJA46gwnfkwB74CwpRwPR2x2gh2VP457tzKvdRo4wgQk
                </a>
              </li>
              <li className="nav-item">
                <a href="https://x.com/TheTateGold" className="btn-nav">
                  Twitter
                </a>{" "}
                /{" "}
                <a href="https://t.me/TheTateGold" className="me-3 btn-nav">
                  Telegram
                </a>
              </li>
              <li className="nav-item">
                <Link className="btn btn-bsc active" aria-current="page">
                  <img src={solImg} width="20px" alt="SOLONA" /> SOLANA
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" To="#">
                      German
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {localStorage.getItem("publicKey") ? (
                  <button
                    onClick={gotoDashboard}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Go To Dashboard
                  </button>
                ) : (
                  <ModalComp
                    connectToPhantom={connectToPhantom}
                    connectToSolflare={connectToSolflare}
                  />
                )}
              </li>
              {/* )} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
