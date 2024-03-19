
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import classes from "./Calendar.module.css"
function Calendar({ onDayButton, onAppointmentButton, onNoteButton }) {
    return (
        <>
            <CalendarHead />
            <CalendarBody
                onDayButton={onDayButton}
                onAppointmentButton={onAppointmentButton}
                onNoteButton={onNoteButton}
               
                />
        </>
    );
}
export default Calendar;