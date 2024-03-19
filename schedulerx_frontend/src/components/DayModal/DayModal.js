import classes from "./DayModal.module.css"
function DayModal({ onDayClose, appointments, notes }) {        
    return (
        <div className={classes.modal}>
            <button onClick={onDayClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Overview </h1>
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
            <h3>Current Notes:  </h3>
            <ul>
                {notes.map(n => <li>{n}</li>)}
            </ul>
        </div>
    );
}
export default DayModal;