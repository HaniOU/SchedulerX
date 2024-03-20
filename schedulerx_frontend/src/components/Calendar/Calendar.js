
import { startOfToday} from "date-fns";
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import classes from "./Calendar.module.css"
import { useState } from "react";
function Calendar({ onDayButton, onAppointmentButton, onNoteButton }) {
    const[today, setToday] = useState(startOfToday());
    return (
        <>
            <CalendarHead
            today = {today}           
            onButton = {setToday} 
            />
            <CalendarBody
                onDayButton={onDayButton}
                onAppointmentButton={onAppointmentButton}
                onNoteButton={onNoteButton}
                today = {today}
                />
        </>
    );
}
export default Calendar;