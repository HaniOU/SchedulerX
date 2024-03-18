import classes from "./DayModal.module.css"
function DayModal({ onDayClose }) {        
    return (
        <div className={classes.modal}>
            <button onClick={() => onDayClose(false)} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Overview </h1>
            <h3>Appointments:  </h3>
            <p>
                13:00🕔    Dinner     with Max  <br />
                17:30🕔    Cinema     with Moe<br />
                23:00🕔    Gym        with Ilias <br />
            </p>
            <h3>Notes:</h3>
            <p> I need to prepare for coming math exam,
                goal is to atleast study for 2 hours today..</p>
        </div>
    );
}
export default DayModal;