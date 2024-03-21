import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import DayElement from "../DayElement/DayElement";
import classes from "./CalendarBody.module.css"
import { useState } from "react";
import Modal from "../Modal/Modal";

function CalendarBody({ currentDate }) {

    let days = eachDayOfInterval({ start: startOfWeek(startOfMonth(currentDate)), end: endOfWeek(endOfMonth(currentDate)) });

    const [showDayModal, setShowDayModal] = useState(false);
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

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

    return (
        <>
            <div className={classes.calendarContainer}>
                {days.map((day) =>
                    <DayElement
                        dayDate={day}
                        onDayButton={handleDayButton}
                        onAppointmentButton={handleAppointmentButton}
                        onNoteButton={handleNoteButton}
                        currentDate={currentDate}
                    />)}
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

export default CalendarBody;

