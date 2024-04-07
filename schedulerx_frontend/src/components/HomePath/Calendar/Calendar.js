
import { startOfToday } from "date-fns";
import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHead from "../CalendarHead/CalendarHead";
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react";

function Calendar() {
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    let jwt = localStorage.getItem('jwt');
    useEffect(() => {
        setLoggedIn(jwt && true);
    }, [jwt])

    const [currentDate, setCurrentDate] = useState(startOfToday());

    //setCurrentDate muss auch automatisch für neuen Monat getriggert werden!

    return (
        <>
            {loggedIn ?
                <>
                    <CalendarHead
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                    <CalendarBody
                        currentDate={currentDate}
                    />
                </>
                : navigate("/login")}
        </>
    );
}

export default Calendar;