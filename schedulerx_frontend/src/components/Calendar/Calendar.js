
import { startOfToday} from "date-fns";
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import classes from "./Calendar.module.css"
import { useState } from "react";
function Calendar({ onDateButton, onAppointmentButton, onNoteButton }) {
    const[currentDate, setCurrentDate] = useState(startOfToday());
    return (
        <>
            <CalendarHead
            currentDate = {currentDate}           
            onButton = {setCurrentDate} 
            />
            <CalendarBody
                onDateButton={onDateButton}
                onAppointmentButton={onAppointmentButton}
                onNoteButton={onNoteButton}
                currentDate = {currentDate}
                />
        </>
    );
}
export default Calendar;