import { eachDayOfInterval, endOfMonth, endOfWeek,startOfMonth, startOfWeek } from "date-fns";
import DayElement from "../DayElement/DayElement";
import classes from "./CalendarBody.module.css"

function CalendarBody({onDateButton, onAppointmentButton, onNoteButton,currentDate }) {
    let s = startOfWeek( startOfMonth(currentDate))
    let e = endOfWeek (endOfMonth(currentDate));
    let days = eachDayOfInterval({start: s, end: e});
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

