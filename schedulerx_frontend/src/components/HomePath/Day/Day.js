import { isSameDay, isSameMonth, isSameYear, format, startOfToday, startOfDay } from "date-fns";
import { useEffect, useState } from "react";
import classes from "./Day.module.css"
import DayModal from "../DayModal/DayModal";
import ReactDOM from "react-dom";

function Day({ currentDate, dayDate }) {
    const [showDayModal, setShowDayModal] = useState(false);
    const [actualDate, setActualDate] = useState(startOfToday());
    useEffect(() => {
        const midnightDate = startOfDay(new Date());

        const millisecondsUntilMidnight = midnightDate.getTime() - Date.now();

  
        const timeoutId = setTimeout(() => {
            setActualDate(midnightDate);
        }, millisecondsUntilMidnight);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [])

    let day = format(dayDate, "d");

    function handleDayButton() {
     
        setShowDayModal(true);
    }

    function isSameDate(dateA, dateB) {
        return (isSameDay(dateA, dateB) && isSameMonth(dateA, dateB) && isSameYear(dateA, dateB))
    }

    return (
        <>
            <div className={classes.numberBtnDiv}>
                <button onClick={handleDayButton}
                    className={`${isSameMonth(dayDate, currentDate) ? classes.numberBtn : classes.notCurr} 
                   ${isSameDate(actualDate, dayDate) && classes.currentDay} `}>
                    {day}
                </button>
            </div>
            {showDayModal &&
                ReactDOM.createPortal(
                    <div className="overlay">
                        <DayModal
                            dayDate = {dayDate}
                            onDayClose={() => setShowDayModal(false)} />
                    </div>,
                    document.body
                )}
        </>

    );
}

export default Day;
