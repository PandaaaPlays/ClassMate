import React, {useEffect, useRef, useState} from "react";
import "./CardFooter.css"
import "../../Utils/Utils.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";

const CardFooter = ({ nextWorkTime }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const text = nextWorkTime != null ? `Prochain travail dû dans ${nextWorkTime}` : 'Aucun travail à remettre';
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current.offsetWidth < textRef.current.scrollWidth) {
            setIsTooltipVisible(true);
        } else {
            setIsTooltipVisible(false);
        }
    }, [nextWorkTime]);

    return (
        <div className="card-footer">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            <span className="card-footer-text" ref={textRef}>{text}
                { isTooltipVisible && <span className="tooltip-ellipsis">{text}</span> }
            </span>
        </div>
    );
}

export default CardFooter;