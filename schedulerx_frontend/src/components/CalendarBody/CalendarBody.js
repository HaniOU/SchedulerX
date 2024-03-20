import { eachDayOfInterval, endOfMonth, endOfWeek,startOfMonth } from "date-fns";
import DayElement from "../DayElement/DayElement";
import classes from "./CalendarBody.module.css"

function CalendarBody({onDateButton, onAppointmentButton, onNoteButton,currentDate }) {
    let days = eachDayOfInterval({start:startOfMonth(currentDate), end: endOfWeek (endOfMonth(currentDate))});
    return (
        <div className={classes.calendarContainer}>
            {days.map((day) =>
                <DayElement
                    dayDate={day}
                    onDateButton={onDateButton}
                    onAppointmentButton={onAppointmentButton}
                    onNoteButton={onNoteButton}
                    currentDate = {currentDate}
                />)}
        </div>
    );

}
export default CalendarBody;

