import { useState } from "react";
import classes from "./AppointmentModal.module.css"

function AppointmentModal({ onAppointmentClose, onAppointmentSubmit, appointments }) {

    const [time, setTime] = useState("");
    const [activity, setActivity] = useState("");
    const [partner, setPartner] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!time || !activity || !partner) return
        onAppointmentSubmit(time, activity, partner);
        setActivity("");
        setTime("");
        setPartner("");
    }

    return (
        <div className={classes.modal}>
            <h3>New Appointment:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="time">🕔 At: </label>
                <input type="text" id="time" placeholder="09:30" value={time} onChange={(e) => setTime(e.target.value)} /> <br />
                <label htmlFor="content">🌍 Activity: </label>
                <input type="text" id="activity" placeholder="Brunch" value={activity} onChange={(e) => setActivity(e.target.value)} /> <br />
                <label htmlFor="who">🙆‍♂️ With: </label>
                <input type="text" id="who" placeholder="Max" value={partner} onChange={(e) => setPartner(e.target.value)} />
                <button>Enter</button>
            </form>
            <button onClick={onAppointmentClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Your Appointments </h1>
            <h3>Current Appointments:  </h3>
            <ul>
                {appointments.map(a => {
                    return (
                        <li>
                            <p>🕔{a.time} 🌍{a.activity}  🙆‍♂️{a.partner}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AppointmentModal;