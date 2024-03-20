
import { format, isSameDay, isSameMonth, isSameYear, startOfToday } from "date-fns";
import classes from "./DayElement.module.css"
import { useState } from "react";
function DayElement({ dayDate, onDayButton, onAppointmentButton, onNoteButton, today }) {

    let day = format(dayDate, "d");
    
    
    const [actualDate, setActualDate] = useState(startOfToday());


    function isSameDate(dateA, dateB) {
        return (isSameDay(dateA, dateB) && isSameMonth(dateA, dateB) && isSameYear(dateA, dateB))
    }
    return (
        <div className={classes.day}>
            <div className={classes.numberBtnDiv}>
                <button onClick={() => onDayButton(day)}
                    className={`${isSameMonth(dayDate, today) ? classes.numberBtn : classes.notCurr} 
                           ${isSameDate(actualDate, dayDate) && classes.currentDay}`}>
                    {day}
                </button>
            </div>
            <div className={classes.buttonContainer}>
                <button onClick={() => onAppointmentButton(day)}>⚪Appointments</button>
                <button onClick={() => onNoteButton(day)}>⚪Notes</button>
            </div>
        </div>
    );
}
export default DayElement;