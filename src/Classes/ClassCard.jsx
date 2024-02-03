import "./ClassCard.css"
import React, {useState, useEffect, useRef} from "react";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";
import CardHeader from "./CardHeader/CardHeader";

const ClassCard = ({ number, name, teacher, teacherOffice, schedule, nextWorkTime }) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const closeCardIfClickOutside = (event) => {
            if (!cardRef.current.contains(event.target)) {
                setIsCardOpen(false);
            }
        };

        document.addEventListener('click', closeCardIfClickOutside);

        return () => {
            document.removeEventListener('click', closeCardIfClickOutside);
        };
    }, []);

    const toggleCard = () => {
        setIsCardOpen(!isCardOpen);
    }

    return (
        <div ref={cardRef} className={`card ${isCardOpen ? 'active' : ''}`} onClick={toggleCard}>
            <CardHeader cardNumber={number}/>
            { name ? <p className="card-name">{name}</p> : <p className="placeholder card-name">Undefined</p> }
            <CardBody name={name} teacher={teacher} teacherOffice={teacherOffice} schedule={schedule}/>
            <CardFooter nextWorkTime={nextWorkTime} ref={(element) => {this.element = element}} />
        </div>
    )
}

export default ClassCard;