import { addMonths, format, subMonths } from "date-fns";
import classes from "./CalendarHead.module.css"

function CalendarHead({currentDate, onButton}) {
    

    let currentMonthAndYear= format(currentDate,"MMMM yyyy");
    let previousMonth = format(subMonths(currentDate, 1),"MMMM" );
    let nextMonth = format(addMonths(currentDate, 1),"MMMM");

    return (
        <div className={classes.calendarHead}>
            <h2 className={classes.month}>{currentMonthAndYear}</h2>
            <h3 className={classes.prevMonth}>{previousMonth}</h3>
            <h3 className={classes.nextMonth}>{nextMonth}</h3>
            <h4 className={classes.leftArrow}> <button  onClick={() => onButton(subMonths(currentDate, 1))} className={classes.btn}>⬅️</button> </h4>
            <h4 className={classes.rightArrow}><button onClick={() => onButton(addMonths(currentDate, 1))} className={classes.btn}>➡️</button> </h4>
            <h5 className={classes.monday}>Monday</h5>
            <h5 className={classes.tuesday}>Tuesday</h5>
            <h5 className={classes.wednesday}>Wednesday</h5>
            <h5 className={classes.thursday}>Thursday</h5>
            <h5 className={classes.friday}>Friday</h5>
            <h5 className={classes.saturday}>Saturday</h5>
            <h5 className={classes.sunday}>Sunday</h5>
        </div>
    );
}

export default CalendarHead;