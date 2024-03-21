
import { format, isSameDay, isSameMonth, isSameYear, startOfToday } from "date-fns";
import classes from "./DayElement.module.css"
import { useState } from "react";

function DayElement({ dayDate, onDayButton, onAppointmentButton, onNoteButton, currentDate }) {

    let day = format(dayDate, "d");

    const [actualDate, setActualDate] = useState(startOfToday());
    // setActualDate soll bei neuem Tag automatisch getriggert werden !

    function isSameDate(dateA, dateB) {
        return (isSameDay(dateA, dateB) && isSameMonth(dateA, dateB) && isSameYear(dateA, dateB))
    }
    return (
        <div className={classes.day}>
            <div className={classes.numberBtnDiv}>
                <button onClick={() => onDayButton(dayDate)}
                    className={`${isSameMonth(dayDate, currentDate) ? classes.numberBtn : classes.notCurr} 
                           ${isSameDate(actualDate, dayDate) && classes.currentDay}`}>
                    {day}
                </button>
            </div>
            <div className={classes.buttonContainer}>
                <button onClick={() => onAppointmentButton(dayDate)} className={classes.btns}>⚪Appointments</button>
                <button onClick={() => onNoteButton(dayDate)} className={classes.btns}>⚪Notes</button>
            </div>
        </div>
    );
}

export default DayElement;