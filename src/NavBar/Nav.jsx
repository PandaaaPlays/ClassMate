import React from "react";
import "./Nav.css"
import logo from "../Images/logo_init.png"
import SearchBar from './SearchBar/SearchBar'
import AccountButton from "./AccountButton/AccountButton";

const Nav = ({ setPage, currentPage }) => {
    const setCurrentPage = (page) => {
        setPage(page);
    };

    return (
        <nav className="nav">
            <div className="nav-logo">
                <a href="#">
                    <img src={logo} alt="Logo"/>
                </a>
            </div>
            <div className="nav-buttons">
                <a onClick={() => setCurrentPage("cours")} id="cours" className={currentPage === "cours" ? "active" : ""}>Cours</a>
                <a onClick={() => setCurrentPage("horaire")} id="horaire" className={currentPage === "horaire" ? "active" : ""}>Horaire</a>
                <a onClick={() => setCurrentPage("devoirs")} id="devoirs" className={currentPage === "devoirs" ? "active" : ""}>Devoirs</a>
                <a onClick={() => setCurrentPage("examens")} id="examens" className={currentPage === "examens" ? "active" : ""}>Examens</a>
            </div>
            <div className="right-corner">
                <SearchBar className="search-bar" />
                <AccountButton className="account-button"/>
            </div>
        </nav>
    );
}

export default Nav;