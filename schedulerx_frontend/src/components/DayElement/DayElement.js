import Day from "../Day/Day";
import Appointment from "../Appointment/Appointment";
import Note from "../Note/Note";
import { useState } from "react";
import { format } from "date-fns";
import classes from "./DayElement.module.css"

function DayElement({ dayDate, currentDate }) {
    const [appointments, setAppointments] = useState([]);
    const [notes, setNotes] = useState([]);

    async function fetchAppointments() {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/appointments/${format(dayDate, "yyyy-MM-dd'T'HH:mm")}`);
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
    
    async function fetchNotes() {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/notes/${format(dayDate, "yyyy-MM-dd'T'HH:mm")}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            
            const transformedNotes = data.map(note => ({
                ...note,
                date: new Date(note.date)
            }));
            
            setNotes(transformedNotes);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
        
    }
    

    return (
        <div className={classes.container}>
            <Day
                currentDate={currentDate}
                dayDate={dayDate}
                fetchAppointments={fetchAppointments}
                fetchNotes={fetchNotes}
                appointments={appointments}
                notes={notes}
            />
            <Appointment
                
                fetchAppointments={fetchAppointments}
                appointments={appointments}
                dayDate={dayDate}


            />
            <Note
              
                fetchNotes={fetchNotes}
                notes={notes}
                dayDate={dayDate}


            />
        </div>
    );
}

export default DayElement;