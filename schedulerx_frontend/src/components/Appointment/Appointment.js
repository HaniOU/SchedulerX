import AppointmentModal from "../AppointmentModal/AppointmentModal";
import { useState } from "react";
import classes from "./Appointment.module.css"
import ReactDOM from "react-dom";


const initialAppointments = [
    { date: new Date(2024, 2, 17, 10, 0), activity: "Gym", partner: "Ilias" },
    { date: new Date(2024, 2, 17, 15, 30), activity: "Dinner", partner: "Max" },
    { date: new Date(2024, 2, 11, 10, 0), activity: "Cinema", partner: "Moe" }
];

function Appointment({ fetchAppointments, appointments, dayDate }) {

    const [showAppointmentModal, setShowAppointmentModal] = useState(false);


    function handleAppointmentButton() {

        fetchAppointments();

        setShowAppointmentModal(true);
    }

    return (
        <>
            <button onClick={handleAppointmentButton} className={classes.button}>⚪Appointments</button>
            {showAppointmentModal &&
                ReactDOM.createPortal(<div className="overlay">
                    <AppointmentModal
                        dayDate={dayDate}
                        fetchAppointments={fetchAppointments}
                        appointments={appointments}
                        onAppointmentClose={() => setShowAppointmentModal(false)} />
                </div>, document.body
                )}
        </>
    );


}
export default Appointment;