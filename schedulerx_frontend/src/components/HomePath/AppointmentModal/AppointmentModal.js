import { useEffect, useState } from "react";
import classes from "./AppointmentModal.module.css"
import { format } from "date-fns";

function AppointmentModal({ onAppointmentClose, dayDate }) {

    const jwt = localStorage.getItem('jwt');

    const [date, setDate] = useState("");
    const [activity, setActivity] = useState("");
    const [partner, setPartner] = useState("");
    const [appointments, setAppointments] = useState([]);

    function onDelete(appointmentDelete) {
        const updatesAppointment = appointments.filter(a => a !== appointmentDelete);
        setAppointments(updatesAppointment);
    }

    useEffect(() => {
        async function fetchAppointments() {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/appointments/${format(dayDate, "yyyy-MM-dd'T'HH:mm")}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${jwt}`
                        }
                    },
                {credentials: 'include'});
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                
                const transformedAppointments = data.map(appointment => ({
                    ...appointment,
                    date: new Date(appointment.date)
                }));

                setAppointments(transformedAppointments);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        }
        fetchAppointments()
    }, [dayDate]);

    useEffect(() => {
        function escape(e) {
            if (e.code === "Escape") {
                onAppointmentClose();
            }
        }
        document.addEventListener("keydown", escape);

        return function () {
            document.removeEventListener("keydown", escape);
        }
    }, [onAppointmentClose]);
    async function handleSubmit(e) {
        e.preventDefault();
        if (!date || !activity || !partner) return;
        const [hours, minutes] = date.split(':');
        const newDate = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate(), hours, minutes);
    //    newDate.setHours(newDate.getHours() + 1);

        const newAppointment = {
            date: newDate.toISOString(),
            activity: activity,
            partner: partner
        };
          try {
              const response = await fetch("http://localhost:8080/api/v1/addAppointment", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${jwt}`
                  },
                  body: JSON.stringify(newAppointment)
              });
  
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              setAppointments(prevApp => [...prevApp, newAppointment]);
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
                <input type="time" id="date" placeholder="09:30" value={date} onChange={(e) => setDate(e.target.value)} /> <br />
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
                        <li className={classes.appointments}>
                             <div className={classes.appointmentContent}>
                                <p>🕔{format(a.date, 'HH:mm')} 🌍{a.activity}  🙆‍♂️{a.partner}</p>
                                <button onClick={() => onDelete(a)} className={classes.delete}>&times;</button>
                            </div>
                        </li>
                    );
                })}
            </ul >
        </div >
    );
}

export default AppointmentModal;