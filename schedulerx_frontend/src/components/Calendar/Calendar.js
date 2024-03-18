
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import classes from "./Calendar.module.css"
function Calendar({onDayButton}) {
    return (
        <>
        <CalendarHead/>
        <CalendarBody onDayButton={onDayButton}/>  
        </>
    );
}
export default Calendar;