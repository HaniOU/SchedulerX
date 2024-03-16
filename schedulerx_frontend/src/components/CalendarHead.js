import classes from "./CalendarHead.module.css"

function CalendarHead() {
    return (
        <div className={classes.calendarHead}>
            <h2 className={classes.month}>MARCH 2024</h2>
            <h3 className={classes.prevMonth}>FEBRUARY</h3>
            <h3 className={classes.nextMonth}>APRIL</h3>
            <h4 className={classes.leftArrow}> <button className={classes.btn}>⬅️</button> </h4>
            <h4 className={classes.rightArrow}><button className={classes.btn}>➡️</button> </h4>
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