
import { startOfToday } from "date-fns";
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import { useState } from "react";

function Calendar() {

    const [currentDate, setCurrentDate] = useState(startOfToday());

    //setCurrentDate muss auch automatisch für neuen Monat getriggert werden!

    return (
        <>
            <CalendarHead
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
            />
            <CalendarBody
                currentDate={currentDate}
            />
        </>
    );
}

export default Calendar;