import DayElement from "../DayElement/DayElement";
import classes from "./CalendarBody.module.css"

function CalendarBody({onDayButton}) {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    for (let i = 1; i <= 4; i++) {
        days.push(i);
    }

    return (
        <div className={classes.calendarContainer}>
            {days.map((day, i) =>
                <DayElement
                    day={day}
                    currentMonth={i >= 31 ? false : true}
                    currentDay={i === 16 && true}
                    onDayButton={onDayButton}
                />)}
        </div>
    );

}
export default CalendarBody;

