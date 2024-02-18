import {
    getDateFromWeekMonday,
    getFormattedDayNumber,
    getFormattedMonth,
    getFormattedWeekday,
    monday,
    today
} from "../../Utils/Dates";
import TaskComponent from "./TaskComponent";
import "./ScheduleDays.css";


const ScheduleDays = ({ pixelsPerHour }) => {
    const days = {
        "Lundi": [{ task: "Cours d'informatique", class: "IFT123", startTime: "05:00", endTime: "05:30", color: "yellow" },
                  { task: "Cours d'informatique", class: "IFT123", startTime: "22:05", endTime: "22:30", color: "yellow" }],
        "Mardi": [{ task: "Cours d'étude de l'environnement 1", class: "ENV123", startTime: "07:55", endTime: "09:00", color: "red" },
                  { task: "Cours d'étude de l'environnement 1", class: "ENV123", startTime: "21:35", endTime: "23:30", color: "red" }],
        "Mercredi": [{ task: "Devoir 1", class: "IFT123", dueTime: "23:59", color: "red"},
                     { task: "Devoir 1", class: "IFT123", dueTime: "07:59", color: "green"}],
        "Jeudi": [{ task: "Devoir 2", class: "IFT123", dueTime: "14:46", color: "green" },
                  { task: "Sols", class: "ENV224", startTime: "09:22", endTime: "12:12", color: "green"}],
        "Vendredi": [{ task: "Tâche dimanche 2", startTime: "10:15", endTime: "10:25", color: "purple"}],
        "Samedi": [{ task: "Tâche dimanche 2", startTime: "19:00", endTime: "22:53", color: "dark-blue"}],
        "Dimanche": [{ task: "Tâche dimanche 2", startTime: "9:00", endTime: "12:00", color: "blue"}]
    };

    return(
        <div className="schedule-days">
            {Object.keys(days).map((day, index) => (
                <div className="schedule-day">
                    <div className="day-header">
                        <span>{day} | {getFormattedDayNumber(getDateFromWeekMonday(monday, index))} {getFormattedMonth(getDateFromWeekMonday(monday, index))}</span>
                        {day.toLowerCase() === getFormattedWeekday(today) ? <span className="today"> Aujourd'hui</span> : null}
                    </div>
                    <div className="day-body">
                        {days[day].map(task => (
                            <TaskComponent task={task} pixelsPerHour={pixelsPerHour} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ScheduleDays;