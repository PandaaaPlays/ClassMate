import './TimeLines.css';

const TimeLines = ({pixelsPerHour}) => {

    const hours = Array.from({ length: 15 }, (v, i) => i);

    return (
        <div className="hour-lines">
            {hours.map((hour) => {
                return <div className="hour-line" style={{ top: `${hour * pixelsPerHour - 3}px `}} />;
            })}
        </div>
    );
}

export default TimeLines;