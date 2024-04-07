import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import DayElement from "../DayElement/DayElement";
import classes from "./CalendarBody.module.css"


function CalendarBody({ currentDate }) {

    let days = eachDayOfInterval({ start: startOfWeek(startOfMonth(currentDate)), end: endOfWeek(endOfMonth(currentDate)) });

    return (
        <div className={classes.calendarContainer}>
            {days.map((day) =>
                <div className={classes.day}><DayElement
                    dayDate={day}
                    currentDate={currentDate}
                /></div>
               ) }
        </div>
    );
}

export default CalendarBody;

