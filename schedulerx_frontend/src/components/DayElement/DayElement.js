
import classes from "./DayElement.module.css"
function DayElement({ day, currentMonth, currentDay, onDayButton, onAppointmentButton, onNoteButton }) {

 

    return (
            <div className={classes.day}>
                <div className={classes.numberBtnDiv}>
                    <button onClick={onDayButton}
                        className={`${currentMonth ? classes.numberBtn : classes.notCurr} ${currentDay ? classes.currentDay : ""}`}>
                        {day}
                    </button>
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={onAppointmentButton}>⚪Appointments</button>
                    <button onClick={() => onNoteButton(day)}>⚪Notes</button>
                </div>
            </div>
    );
}
export default DayElement;