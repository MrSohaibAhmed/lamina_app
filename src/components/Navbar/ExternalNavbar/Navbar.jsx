import React, { useEffect, useState } from "react";
// import { PublicKey } from "@solana/web3.js"
import logoImg from "../../../assets/dashboard/logo.png";
import solImg from "../../../assets/img/sol-d6ecfc05903dc1848872e95eab3de8cdbdeb68927d14e9d1dcf5d16212d65f74.svg";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import usePhantom from "../../../components/hooks/usePhantom";
import { checkUser } from "../../hooks/useWallet";
const NavbarComp = () => {
  const {
    connectToPhantom,
    connected,
    signMessage,
    newUsersignMessage,
    solanaKey,
  } = usePhantom();
  useEffect(() => {
    //debugger;
    if (solanaKey) {
      checkUser(solanaKey)
        .then((res) => {
          // //debugger
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

  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-dark">
      <div className="container">
      <Link className="navbar-brand" to="/">
            <img className="logo-img" src={logoImg} width="30px" alt="" /> GenAI
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
              <a className="mx-4 txt-nav">$GENAI CA - 5XzX3PGu2mmWSeSJ8yXdXgX9xjAA1Prdr8dPz3FNzQT9</a>
            </li>
          <li className="nav-item">
              <a href="#"  className="btn-nav">Twitter</a> /  <a href="#" className="me-3 btn-nav">Telegram</a>
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
            {/* {walletAvail && ( */}
            <li className="nav-item">
              {/* <button onClick={connectToPhantom} className="btn btn-connect active">{connected ? "Successfully Connected" : "Connect Wallet"}</button> */}
              <button
                onClick={connectToPhantom}
                className="btn btn-connect active"
              >
                Connect Wallet
              </button>
            </li>
            {/* )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
