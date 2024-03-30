import { format } from "date-fns";
import classes from "./DayModal.module.css"
import { useEffect, useState } from "react";
function DayModal({ onDayClose, dayDate }) {

    const [appointments, setAppointments] = useState([]);
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchAppointments();
        fetchNotes();
    }, []);

    useEffect(()=>{
        function escape(e){
            if(e.code==="Escape"){
                onDayClose();
            }
        }
        document.addEventListener("keydown", escape);

        return function(){
            document.removeEventListener("keydown", escape);
        }
    },[onDayClose]);

    async function fetchAppointments() {
       // setIsLoading(true);
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
        } finally{
       //     setIsLoading(false);
        }
      
    }
    
    async function fetchNotes() {
      //  setIsLoading(true);
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
        finally{
     //       setIsLoading(false);
        }
    }

    return (
        <>
        {isLoading ? <p> Loading... </p> : <div className={classes.modal}>
        <button onClick={onDayClose} className={classes.close}>&times;</button>
        <h1 className={classes.title}>Overview </h1>
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
        <h3>Current Notes:  </h3>
        <ul>
            {notes.map(n => <li>{n.text}</li>)}
        </ul>
    </div>}
        </>
        
        
    );
}
export default DayModal;