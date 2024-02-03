import React, {useState} from "react";
import Nav from './NavBar/Nav';
import ClassCard from "./Classes/ClassCard";
import "./App.css";
import {calculateTime} from "./Classes/TimeCalculation";

const App = () => {
    const [selectedPage, setSelectedPage] = useState("cours");

    // Function to render the selected page
    const renderPage = () => {
        switch (selectedPage) {
            case "cours":
                return (
                    <div className="classCards">
                        <ClassCard
                            number="IFT123"
                            name="Développement de site web"
                            teacher="Teacher Name"
                            teacherOffice="D7-4321"
                            schedule={ {
                                day0: { button: "L", time: "9:00", local: "D7-2023" },
                                day1: { button: "M" },
                                day2: { button: "M" },
                                day3: { button: "J", time: "9:00", local: "D7-2023" },
                                day4: { button: "V", time: "9:00", local: "D7-2023" }}}
                            nextWorkTime={calculateTime(new Date(2024, 1, 2, 8, 17))}/>
                        <ClassCard
                            number="ENV123"
                            name="Étude de l'environnement"
                            teacher="Teacher Name"
                            teacherOffice="D7-1234"
                            schedule={ {
                                day0: { button: "L" },
                                day1: { button: "M" },
                                day2: { button: "M" },
                                day3: { button: "J", time: "9:00", local: "D7-2023" },
                                day4: { button: "V", time: "9:00", local: "D7-2023" }}}
                            nextWorkTime={calculateTime(new Date(2024, 1, 17, 19, 5))}/>
                    </div>
                );
            case "horaire":
                return (
                    <div className="schedule">
                        <div className="weekdays">
                            <div className="day">Lundi</div>
                            <div className="day">Mardi</div>
                            <div className="day">Mercredi</div>
                            <div className="day">Jeudi</div>
                            <div className="day">Vendredi</div>
                            <div className="day">Samedi</div>
                            <div className="day">Dimanche</div>
                        </div>
                        <div className="hours">
                            <div className="hour">00:00</div>
                            <div className="hour">01:00</div>
                            <div className="hour">02:00</div>
                            <div className="hour">03:00</div>
                            <div className="hour">04:00</div>
                            <div className="hour">05:00</div>
                            <div className="hour">06:00</div>
                            <div className="hour">07:00</div>
                            <div className="hour">08:00</div>
                            <div className="hour">09:00</div>
                            <div className="hour">10:00</div>
                            <div className="hour">11:00</div>
                            <div className="hour">12:00</div>
                            <div className="hour">13:00</div>
                            <div className="hour">14:00</div>
                            <div className="hour">15:00</div>
                            <div className="hour">16:00</div>
                            <div className="hour">17:00</div>
                            <div className="hour">18:00</div>
                            <div className="hour">19:00</div>
                            <div className="hour">20:00</div>
                            <div className="hour">21:00</div>
                            <div className="hour">22:00</div>
                            <div className="hour">23:00</div>
                        </div>
                    </div>
                );
            case "devoirs":
                return (<a></a>);
            case "examens":
                return (<a></a>);
            default:
                return null;
        }
    };

    return (
        <div>
            <Nav className="nav" setPage={setSelectedPage} currentPage={selectedPage} />
            {renderPage()}
        </div>
    );
}

export default App;