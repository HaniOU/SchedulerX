
import CalendarBody from "./CalendarBody";
import CalendarHead from "./CalendarHead";
import classes from "./Calendar.module.css"
function Calendar() {
    return (
        <div className={classes.calendar}>
        <CalendarHead/>
        <CalendarBody />  
        </div>
    );
}
export default Calendar;