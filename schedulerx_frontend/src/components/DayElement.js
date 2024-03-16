import classes from "./DayElement.module.css"
function DayElement({ day }) {
    return (
        <div className={classes.day}>
            <div className={classes.btnDiv}>
                <button  className={classes.number}>{day}</button>
            </div>
            <ul className={classes.list}>
                <li>Appointments</li>
                <li>Activities</li>
                <li>Notes</li>
            </ul>
        </div>
    );
}
export default DayElement;