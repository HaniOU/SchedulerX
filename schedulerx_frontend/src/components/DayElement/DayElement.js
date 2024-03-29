import Day from "../Day/Day";
import Appointment from "../Appointment/Appointment";
import Note from "../Note/Note";

function DayElement({ dayDate, currentDate }) {
    return (
        <>
            <Day
                currentDate={currentDate}
                dayDate={dayDate}
            />
            <Appointment
                dayDate={dayDate}
            />
            <Note
                dayDate={dayDate}
            />
        </>
    );
}

export default DayElement;