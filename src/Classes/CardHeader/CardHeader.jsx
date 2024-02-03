import React from "react";
import "./CardHeader.css"
import card_image from "../../Images/Card_Header.png";

const CardHeader = ({cardNumber}) => {
    return (
        <header className="card-header">
            <div className="image-container">
                <img src={card_image} alt="image" />
                <a className="card-number">{cardNumber}</a>
            </div>
        </header>
    );
}

export default CardHeader;