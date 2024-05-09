
import React, { useEffect, useState } from 'react';
// import { PublicKey } from "@solana/web3.js"
import logoImg from '../../../assets/img/logo.png';
import binanceImg from '../../../assets/img/binance.png'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import usePhantom from '../../../components/hooks/usePhantom';

const NavbarComp = () => {

    const { connectToPhantom, connected, account, web3, signMessage } = usePhantom();

    useEffect(() => {
        if (web3 && account) {
          signMessage();
        }
      }, [web3, account]);



    return (
        <nav className="navbar py-3 navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logoImg} width="200px" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="btn btn-bsc active" aria-current="page" >
                                <img src={binanceImg} width="20px" alt="BSC" /> BSC
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item" To="#">German</Link></li>
                            </ul>
                        </li>
                        {/* {walletAvail && ( */}
                            <li className="nav-item">
                                <button onClick={connectToPhantom} className="btn btn-connect active">{connected ? "Successfully Connected" : "Connect Wallet"}</button>
                            </li>
                        {/* )} */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComp;