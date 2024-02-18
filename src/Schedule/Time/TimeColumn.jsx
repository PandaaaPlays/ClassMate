import React from "react";
import "./TimeColumn.css";

const TimeColumn = ({ pixelsPerHour }) => {
    const hours = [
        "Header",
        "Matin",
        ...Array.from({ length: 14 }, (v, i) => {
            const hour = i + 8; // Commence à 8
            return hour < 10 ? `0${hour}:00` : `${hour}:00`;
        }),
        "Soir"];

    return (
        <div className="hours-list">
            {hours.map((hour, index) =>
                <p className={index === 0 ? 'hour-header' : 'hour'}
                    style={index !== 0 ? { height: `${pixelsPerHour}px` } : {}}>
                    {hour}
                </p>
            )}
        </div>
    );
}

export default TimeColumn;