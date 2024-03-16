import classes from "./DayElement.module.css"
function DayElement({ day, currentMonth, currentDay }) {
    return (
        <div className={classes.day}>
            <div className={classes.numberBtnDiv}>
                <button
                    className={`${currentMonth ? classes.numberBtn : classes.notCurr} ${currentDay ? classes.currentDay : ""}`}>
                    {day}
                </button>


            </div>
            <div className={classes.buttonContainer}>
                <button>⚪Appointments</button>
                <button>⚪Notes</button>
            </div>
        </div>
    );
}
export default DayElement;