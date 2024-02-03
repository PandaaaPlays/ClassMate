import SchedulePreviewButton from "../SchedulePreviewButton/SchedulePreviewButton";
import React from "react";
import "./CardBody.css"
import "../../Utils/Utils.css"

const CardBody = ({ teacher, teacherOffice, schedule }) => {
    return (
        <div className="card-body">
            { teacher && (<p className="card-teacher">{teacher} { teacherOffice && `- (${teacherOffice})`}</p>)}
            { schedule && (<div className="schedule-container">
                <p className="card-schedule-title">Horaire:</p>
                <div className="card-schedule-preview">
                    {Object.keys(schedule).map(day => (
                        <SchedulePreviewButton
                            key={day}
                            button_text={schedule[day].button}
                            hover_text={{ time: schedule[day].time, local: schedule[day].local }}
                        />
                    ))}
                </div>
            </div>) }
        </div>
    );
}

export default CardBody;