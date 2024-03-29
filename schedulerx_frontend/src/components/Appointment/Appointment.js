import AppointmentModal from "../AppointmentModal/AppointmentModal";
import { useState } from "react";
import classes from "./Appointment.module.css"
import ReactDOM from "react-dom";

//beispiel appointment { date: new Date(2024, 2, 17, 10, 0), activity: "Gym", partner: "Ilias" }
function Appointment({  dayDate }) {

    const [showAppointmentModal, setShowAppointmentModal] = useState(false);
   
    function handleAppointmentButton() {

        setShowAppointmentModal(true);
    }

    return (
        <>
            <button onClick={handleAppointmentButton} className={classes.button}>⚪Appointments</button>
            {showAppointmentModal &&
                ReactDOM.createPortal(<div className="overlay">
                    <AppointmentModal
                        dayDate={dayDate}
                        onAppointmentClose={() => setShowAppointmentModal(false)} />
                </div>, document.body
                )}
        </>
    );


}
export default Appointment;