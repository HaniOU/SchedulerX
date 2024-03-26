import { isSameDay, isSameMonth, isSameYear, format, startOfToday } from "date-fns";
import { useState } from "react";
import classes from "./Day.module.css"
import DayModal from "../DayModal/DayModal";
import ReactDOM from "react-dom";

function Day({ currentDate, dayDate, fetchAppointments, fetchNotes, appointments, notes }) {
    const [showDayModal, setShowDayModal] = useState(false);
    const [actualDate, setActualDate] = useState(startOfToday());


    let day = format(dayDate, "d");

    function handleDayButton() {
        fetchAppointments();
        fetchNotes();
        setShowDayModal(true);
    }

    function isSameDate(dateA, dateB) {
        return (isSameDay(dateA, dateB) && isSameMonth(dateA, dateB) && isSameYear(dateA, dateB))
    }

    return (
        <>
            <div className={classes.numberBtnDiv}>
                <button onClick={handleDayButton}
                    className={`${isSameMonth(dayDate, currentDate) ? classes.numberBtn : classes.notCurr} 
                   ${isSameDate(actualDate, dayDate) && classes.currentDay} `}>
                    {day}
                </button>
            </div>
            {showDayModal &&
                ReactDOM.createPortal(
                    <div className="overlay">
                        <DayModal
                            appointments={appointments}
                            notes={notes}
                            onDayClose={() => setShowDayModal(false)} />
                    </div>,
                    document.body
                )}
        </>

    );
}

export default Day;
