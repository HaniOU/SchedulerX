import { format } from "date-fns";
import classes from "./DayModal.module.css"
function DayModal({ appointments, notes, onDayClose }) {
    return (
        <div className={classes.modal}>
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
                {notes.map(n => <li>{n}</li>)}
            </ul>
        </div>
    );
}
export default DayModal;