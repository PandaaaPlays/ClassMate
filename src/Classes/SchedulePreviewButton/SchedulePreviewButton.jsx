import "./SchedulePreviewButton.css"
import "../../Utils/Utils.css"
import React from "react";

const SchedulePreviewButton = ({ button_text, hover_text }) => {

    const isNull = !hover_text.time || !hover_text.local;

    return (
        <div className={`preview ${isNull ? 'empty' : ''}`}>
            <a className="preview-button">
                {button_text}
                {!isNull && <div className="tooltip preview-tooltip">
                    <span>Heure : {hover_text.time}</span>
                    <span>Local : {hover_text.local}</span>
                </div>
                }
            </a>
        </div>
    );
}

export default SchedulePreviewButton;