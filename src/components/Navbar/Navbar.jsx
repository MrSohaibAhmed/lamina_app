import React from "react";
import logoImg from "../../assets/img/logo.png";
import heroCircle from "../../assets/img/hero-circle.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { checkUser } from "../hooks/useWallet";
import usePhantom from "../../components/hooks/usePhantom";
import { useParams } from "react-router-dom";
const NavbarComp = () => {
  const { tokenid } = useParams();
  //////debugger
  const {
    connectToPhantom,
    connected,
    account,
    web3,
    signMessage,
    newUsersignMessage,
    solanaKey,
  } = usePhantom();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  useEffect(() => {
    // //////debugger
    if (solanaKey) {
      checkUser(solanaKey)
        .then((res) => {
          // ////////debugger
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
  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={logoImg} width="200px" alt="" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="btn btn-bsc active" aria-current="page" href="#">
                {" "}
                <img src="assets/img/binance.png" width="20px" alt="" /> BSC
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Germen
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-connect active"
                aria-current="page"
                onClick={connectToPhantom}
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
