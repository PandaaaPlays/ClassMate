import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React  from "react";
import "./AccountButton.css"
import "../../Utils/Utils.css"
import {faUser} from "@fortawesome/free-regular-svg-icons";

const AccountButton = () => {
    return (
        <div className="account">
            <a href="#" className="account-button">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </a>
            <span className="tooltip account-tooltip">Your account</span>
        </div>
    );
}

export default AccountButton;