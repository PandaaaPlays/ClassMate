import React from 'react';
import './TaskComponent.css';

const TaskComponent = ({ task, pixelsPerHour }) => {

    const taskDurationHeightRemoval = 10;

    function getTimePosition(time) {
        const [hour, minutes] = time.split(':').map(Number);
        if(hour < 8) return 0; // Time is before 8am
        if(hour > 21) return 15 * pixelsPerHour; // Time is after 9pm

        return (((hour - 7) + minutes / 60) * pixelsPerHour);
    }

    function getWorkTimePosition(time, duration) {
        const [hour, minutes] = time.split(':').map(Number);
        if(hour < 8) return 0; // Time is before 8am
        if(hour > 21) return 15 * pixelsPerHour; // Time is after 9pm

        return ((hour - 7) + (minutes / 60)) * pixelsPerHour - taskDuration * pixelsPerHour;
    }

    function getTimeDuration(startTime, endTime) {
        let [startHour, startMinutes] = startTime.split(':').map(Number);
        let [endHour, endMinutes] = endTime.split(':').map(Number);
        if(startHour < 8) {
            startHour = 7;
            startMinutes = 0;
        }
        if(endHour > 21) {
            endHour = 23;
            endMinutes = 0;
        }
        if(endHour < 8 || startHour > 21) return 1; // Task is before 8am or after 9pm

        const duration = ((endHour + endMinutes / 60) - (startHour + startMinutes / 60));
        if(duration < 0.32) return 0.32; // Small task
        if(duration < 0.6) return 0.6; // Medium task
        return duration; // Big task
    }

    function getWorkTimeDuration(dueTime) {
        let [hour, minutes] = dueTime.split(':').map(Number);
        if(hour < 8 || hour > 21) return 1; // Task is before 8am or after 9pm
        return 0.6;
    }

    const taskDuration = task.dueTime ? getWorkTimeDuration(task.dueTime) : getTimeDuration(task.startTime, task.endTime);

    const style = {
        position: 'absolute',
        transform: `translateY(${task.dueTime ? getWorkTimePosition(task.dueTime, taskDuration) : getTimePosition(task.startTime)}px)`,
        height: `${(taskDuration * pixelsPerHour) - taskDurationHeightRemoval}px`,
    };

    return (
        <div className={`task ${task.color}`} style={style}>
            <div className="task-title">
                {task.dueTime ? <p className="task-time">{task.dueTime} ></p> : <p className="task-time">{task.startTime} - {task.endTime} ›</p>}
                <p className="task-class">{task.class}</p>
            </div>
            <span className="task-description" style={taskDuration < 0.6 ? {visibility: "hidden"} : {}}>{task.task}</span>
        </div>

    );
}

export default TaskComponent;