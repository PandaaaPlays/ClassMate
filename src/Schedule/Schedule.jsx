import React from "react";
import "./Schedule.css";
import {
    getDateFromWeekMonday,
    getFormattedDayNumber,
    getFormattedMonth,
    getFormattedWeekday,
    getWeekMondayDate
} from "./ScheduleDates";

const Schedule = () => {
    const today = new Date(2024, 1, 11);

    const days = {
        "Lundi": ["Tâche lundi 1", "Tâche lundi 2"],
        "Mardi": ["Tâche mardi 1"],
        "Mercredi": ["Tâche mercredi 1"],
        "Jeudi": ["Tâche jeudi 1"],
        "Vendredi": ["Tâche vendredi 1"],
        "Samedi": [],
        "Dimanche": ["Tâche dimanche 1", "Tâche dimanche 2"]
    };

    const mondayDate = getWeekMondayDate(today);

    return (
        <div className="schedule">
            <div className="schedule-header">
                Horaire | Semaine du {getFormattedDayNumber(mondayDate)} {getFormattedMonth(mondayDate, true)}
            </div>
            <div>
                <table className="schedule-body">
                    <thead>
                    <tr>
                        {Object.keys(days).map((day, index) => (
                            <th className={`schedule-day ${day.toLowerCase() === getFormattedWeekday(today) ? "today" : ""}`}>
                                { day.toLowerCase() === getFormattedWeekday(today) && <span>Aujourd'hui ›</span> }
                                <div className="date">
                                    <span>{day} | {getFormattedDayNumber(getDateFromWeekMonday(mondayDate, index))} {getFormattedMonth(getDateFromWeekMonday(mondayDate, index))}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {/* Boucle pour chaque ligne de tâches */}
                    {[...Array(Math.max(...Object.values(days).map(tasks => tasks.length)))].map((_, index) => (
                        <tr>
                            {/* Boucle pour chaque jour de la semaine */}
                            {Object.keys(days).map(day => (
                                <td>{days[day][index]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Schedule;
