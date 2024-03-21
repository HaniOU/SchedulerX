
import { isSameDay, isSameMonth, isSameYear } from "date-fns";
import DayModal from "../DayModal/DayModal";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import NoteModal from "../NoteModal/NoteModal";
import { useState } from "react";

const initialAppointments = [
    { date: new Date(2024, 2, 17, 10, 0), activity: "Gym", partner: "Ilias" },
    { date: new Date(2024, 2, 17, 15, 30), activity: "Dinner", partner: "Max" },
    { date: new Date(2024, 2, 11, 10, 0), activity: "Cinema", partner: "Moe" }
];
const initialNotes = [
    { date: new Date(2024, 2, 17), noteText: "I need to prepare for coming math exam, goal is to atleast study for 2 hours today.." },
    { date: new Date(2024, 2, 17), noteText: "Text brother" },
    { date: new Date(2024, 2, 26), noteText: "Buy eggs and chips" }
];


function Modal({ showDayModal, showAppointmentModal, showNoteModal, selectedDate, setShowDayModal, setShowAppointmentModal, setShowNoteModal }) {

    const [appointments, setAppointments] = useState(initialAppointments);
    const [notes, setNotes] = useState(initialNotes)

    function getCurrentAppointments() {
        const currentAppointments = appointments.filter(a => isSameDate(a.date, selectedDate));
        return currentAppointments.length > 0 ? currentAppointments : [];
    }
    function getCurrentNotes() {
        const currentNotes = notes.filter(n => isSameDate(n.date, selectedDate));
        return currentNotes.length > 0 ? currentNotes.map(data => data.noteText) : [];
    }
    function handleNoteSubmit(note) {
        const newNote = { date: selectedDate, noteText: note }
        setNotes(prev => [...prev, newNote]);
    }
    function handleAppointmentSubmit(time, activity, partner) {
        const newAppointment = { date: selectedDate, time: time, activity: activity, partner: partner };
        setAppointments(prev => [...prev, newAppointment]);
    }
    function isSameDate(dateA, dateB) {
        return (isSameDay(dateA, dateB) && isSameMonth(dateA, dateB) && isSameYear(dateA, dateB))
    }

    return (
        <>
            {showDayModal &&
                <div className="overlay">
                    <DayModal
                        appointments={getCurrentAppointments()}
                        notes={getCurrentNotes()}
                        onDayClose={() => setShowDayModal(false)} />
                </div>}
            {showAppointmentModal &&
                <div className="overlay">
                    <AppointmentModal
                        appointments={getCurrentAppointments()}
                        onAppointmentSubmit={handleAppointmentSubmit}
                        onAppointmentClose={() => setShowAppointmentModal(false)} />
                </div>}
            {showNoteModal &&
                <div className="overlay">
                    <NoteModal
                        onNoteSubmit={handleNoteSubmit}
                        notes={getCurrentNotes()}
                        onNoteClose={() => setShowNoteModal(false)} />
                </div>}
        </>
    );
}

export default Modal;