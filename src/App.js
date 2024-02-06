import React, {useState} from "react";
import Nav from './NavBar/Nav';
import ClassCard from "./Classes/ClassCard";
import Schedule from "./Schedule/Schedule";
import "./App.css";
import {calculateTime} from "./Classes/TimeCalculation";

const App = () => {
    const [selectedPage, setSelectedPage] = useState("cours");

    // Function to render the selected page
    const renderPage = () => {
        switch (selectedPage) {
            case "cours":
                return (
                    <div className="class-container">
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
                    <Schedule />
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