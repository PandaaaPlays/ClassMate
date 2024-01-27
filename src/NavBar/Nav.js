import React from "react";
import './Nav.css'
import logo from "../Images/logo_udes.png"
import SearchBar from './SearchBar/SearchBar'
import AccountButton from "./AccountButton/AccountButton";

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
                <SearchBar className="search-bar" />
                <AccountButton className="account-button"/>
            </div>
        </nav>
    );
}

export default Nav;