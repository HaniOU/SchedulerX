import DayElement from "./DayElement";
import classes from "./CalendarBody.module.css"

function CalendarBody(){
    const days = Array.from({ length: 28 }, (_, i) => i + 1);

    return (
        <div className={classes.container}>
            {days.map(day => <DayElement day={day} />)}
        </div>
    );

}
export default CalendarBody;

