import { useState } from "react";
import classes from "./AppointmentModal.module.css"
import { format } from "date-fns";

function AppointmentModal({ onAppointmentClose, appointments }) {

    const [date, setDate] = useState("");
    const [activity, setActivity] = useState("");
    const [partner, setPartner] = useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        if (!date || !activity || !partner) return;
    
        const newAppointment = {
            date: new Date(date).toISOString(),
            activity: activity,
            partner: partner
        };
    
        try {
            const response = await fetch("/api/v1/addAppointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAppointment)
            });
    
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
  
            console.log("Appointment added successfully");
    
        } catch (error) {
            console.error("Error adding appointment:", error);
        }
   
        setActivity("");
        setDate("");
        setPartner("");
    }
    
    return (
        <div className={classes.modal}>
            <h3>New Appointment:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">🕔 At: </label>
                <input type="text" id="date" placeholder="09:30" value={date} onChange={(e) => setDate(e.target.value)} /> <br />
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
                            <p>🕔{format(a.date, 'HH:mm')} 🌍{a.activity}  🙆‍♂️{a.partner}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default AppointmentModal;