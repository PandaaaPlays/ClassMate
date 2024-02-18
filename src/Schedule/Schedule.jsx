import React from "react";
import "./Schedule.css";
import {
    getFormattedDayNumber,
    getFormattedMonth,
    monday
} from "../Utils/Dates";
import ScheduleDays from "./Days/ScheduleDays";
import TimeColumn from "./Time/TimeColumn";
import TimeLines from "./Time/TimeLines";

const Schedule = () => {

    const pixelsPerHour = 89;

    return (
        <div className="schedule">
            <div className="schedule-header">
                Horaire | Semaine du {getFormattedDayNumber(monday)} {getFormattedMonth(monday, true)}
            </div>
            <div className="schedule-body">
                <TimeColumn pixelsPerHour={pixelsPerHour} />
                <TimeLines pixelsPerHour={pixelsPerHour}/>
                <ScheduleDays pixelsPerHour={pixelsPerHour} />
            </div>

        </div>
    );
}

export default Schedule;
