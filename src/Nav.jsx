import React from "react";
import './Nav.css'
import logo from "./Images/logo_udes.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <a href="#">
                    <img src={logo} alt="Logo"/>
                </a>
            </div>
            <div className="nav-buttons">
                <a href="#" id="cours">Cours</a>
                <a href="#" id="horaire">Horaire</a>
                <a href="#" id="devoirs">Devoirs</a>
                <a href="#" id="examens">Examens</a>
            </div>
            <div className="right-corner">
                <div className="search-bar" id="searchBar" onClick="toggleSearch()">
                    <input className="search-text" type="text" placeholder="Type to search..." />
                    <a href="#" className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                </div>
                <div className="account">
                    <a href="#" className="account-button">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </a>
                    <span className="account-tooltip">Your account</span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;