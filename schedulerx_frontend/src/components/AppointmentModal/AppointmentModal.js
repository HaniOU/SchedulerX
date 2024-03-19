import classes from "./AppointmentModal.module.css"
function AppointmentModal({onAppointmentClose}){
    return (
        <div className={classes.modal}>
            <button onClick={onAppointmentClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Your Appointments </h1>
            <h3>Current Appointments:  </h3>
            <p>
                13:00🕔    Dinner     with Max  <br />
                17:30🕔    Cinema     with Moe<br />
                23:00🕔    Gym        with Ilias <br />
            </p>
            <h3>New Appointment:</h3>
            <form>
                <input type="text"/>
            </form>
        </div>
    );
}
export default AppointmentModal;