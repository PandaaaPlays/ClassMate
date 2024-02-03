import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {addSearchBarEventListener} from "./SearchBarEventListener";
import "./SearchBar.css"

const SearchBar = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

    addSearchBarEventListener((isSearchBarOpen) => {
        setIsSearchBarOpen(isSearchBarOpen);
    });

    const toggleSearch = () => {
        setIsSearchBarOpen(true);
    }

    return (
        <div className={`search-bar ${isSearchBarOpen ? 'active' : ''}`} id="searchBar" onClick={toggleSearch}>
            <input className="search-text" type="text" placeholder="Type to search..."/>
            <a className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </a>
        </div>
    );
}

export default SearchBar;