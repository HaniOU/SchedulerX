
import { format, isSameDay, isSameMonth, isSameYear, startOfToday } from "date-fns";
import classes from "./DayElement.module.css"
import { useState } from "react";
import Modal from "../Modal/Modal";


function DayElement({ dayDate, currentDate }) {

    let day = format(dayDate, "d");
    const [showDayModal, setShowDayModal] = useState(false);
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [actualDate, setActualDate] = useState(startOfToday());
    // setActualDate soll bei neuem Tag automatisch getriggert werden !

    function handleDayButton(date) {
        setSelectedDate(date);
        setShowDayModal(true);
    }
    function handleAppointmentButton(date) {
        setSelectedDate(date);
        setShowAppointmentModal(true);
    }
    function handleNoteButton(date) {
        setSelectedDate(date);
        setShowNoteModal(true);
    }
    function isSameDate(dateA, dateB) {
        return (isSameDay(dateA, dateB) && isSameMonth(dateA, dateB) && isSameYear(dateA, dateB))
    }
    return (
        <>
            <div className={classes.day}>
                <div className={classes.numberBtnDiv}>
                    <button onClick={() => handleDayButton(dayDate)}
                        className={`${isSameMonth(dayDate, currentDate) ? classes.numberBtn : classes.notCurr} 
                           ${isSameDate(actualDate, dayDate) && classes.currentDay}`}>
                        {day}
                    </button>
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={() => handleAppointmentButton(dayDate)} className={classes.btns}>⚪Appointments</button>
                    <button onClick={() => handleNoteButton(dayDate)} className={classes.btns}>⚪Notes</button>
                </div>
            </div>
            <Modal
                showDayModal={showDayModal}
                showAppointmentModal={showAppointmentModal}
                showNoteModal={showNoteModal}
                selectedDate={selectedDate}
                setShowDayModal={setShowDayModal}
                setShowAppointmentModal={setShowAppointmentModal}
                setShowNoteModal={setShowNoteModal}
            />
        </>

    );
}

export default DayElement;