import React from 'react'
import logoImg from "../../../assets/dashboard/logo.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon

import './InternalNavbar.css'

const InternalNavbar = () => {
    return (
        <div>
            <nav className="navbar py-3 navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to="/"><img className="logo-img" src={logoImg} width="30px" alt="" /> GenAI</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">NEW PAIRS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">TRENDING</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">HOLDINGS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">LEADERBOARD</Link>
                            </li>
                            <li className="nav-item topnav">
                                <div className="search-container d-flex">
                                    <form>
                                        <input type="text" placeholder="Search by token or LP contract" name="search" />
                                        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                                        {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                                    </form>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to="#">Germen</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default InternalNavbar