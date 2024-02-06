import React from "react";
import "./Schedule.css";

const Schedule = () => {
    const date = new Date();
    const today = date.toLocaleString('fr-FR', {weekday: 'long'});
    const todayNumber = date.toLocaleString('fr-FR', {day: 'numeric'});
    const todayMonth = date.toLocaleString('fr-FR', {month: 'short'});

    const days = {
        "Lundi": ["Tâche lundi 1", "Tâche lundi 2"],
        "Mardi": ["Tâche mardi 1"],
        "Mercredi": ["Tâche mercredi 1"],
        "Jeudi": ["Tâche jeudi 1"],
        "Vendredi": ["Tâche vendredi 1"],
        "Samedi": [],
        "Dimanche": ["Tâche dimanche 1", "Tâche dimanche 2"]
    };

    return (
        <div className="schedule">
            <div className="schedule-header">
                Rebonjour John,
            </div>
            <div>
                <table className="schedule-body">
                    <thead>
                    <tr>
                        {Object.keys(days).map(day => (
                            <th className={`schedule-day ${day.toLowerCase() === today ? "today" : ""}`}>
                                { day.toLowerCase() === today && <span>Aujourd'hui ›</span> }
                                <span>{day} | {todayNumber} {todayMonth}</span>
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
