import { eachDayOfInterval, endOfMonth, endOfWeek,startOfMonth } from "date-fns";
import DayElement from "../DayElement/DayElement";
import classes from "./CalendarBody.module.css"

function CalendarBody({onDayButton, onAppointmentButton, onNoteButton,today }) {
    let days = eachDayOfInterval({start:startOfMonth(today), end: endOfWeek (endOfMonth(today))});
    return (
        <div className={classes.calendarContainer}>
            {days.map((day) =>
                <DayElement
                    dayDate={day}
                    onDayButton={onDayButton}
                    onAppointmentButton={onAppointmentButton}
                    onNoteButton={onNoteButton}
                    today = {today}
                />)}
        </div>
    );

}
export default CalendarBody;

