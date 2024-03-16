import classes from "./CalendarHead.module.css"

function CalendarHead() {
    return (
        <>
            <div className={classes.title}>
                <h1>SchedulerX</h1>
               <div className={classes.subTitle}>
                <p className={classes.greet}>Hello Hani!</p>
                <p className={classes.time}>18:22 PM</p>
                </div> 
            </div>

            <div className={classes.head}>
                <h1 className={classes.month}>FEBRUARY 2024</h1>
                <div className={classes.prevMonth}>JANUARY</div>
                <div className={classes.nextMonth}>MARCH</div>
                <div className={classes.leftArrow}> {`<=`} </div>
                <div className={classes.rightArrow}> {`=>`} </div>

            </div>

        </>
    );
}

export default CalendarHead;