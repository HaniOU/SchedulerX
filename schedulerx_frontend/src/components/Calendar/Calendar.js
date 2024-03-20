
import { startOfToday} from "date-fns";
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import classes from "./Calendar.module.css"
import { useState } from "react";
function Calendar({ onDateButton, onAppointmentButton, onNoteButton }) {
    const[today, setToday] = useState(startOfToday());
    return (
        <>
            <CalendarHead
            today = {today}           
            onButton = {setToday} 
            />
            <CalendarBody
                onDateButton={onDateButton}
                onAppointmentButton={onAppointmentButton}
                onNoteButton={onNoteButton}
                today = {today}
                />
        </>
    );
}
export default Calendar;