import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import Head from "./components/Head/Head";
import DayModal from "./components/DayModal/DayModal";
import AppointmentModal from "./components/AppointmentModal/AppointmentModal";
import NoteModal from "./components/NoteModal/NoteModal";
import { isSameDay, isSameMonth, isSameYear } from "date-fns";

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

function App() {

  const [showDayModal, setShowDayModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [notes, setNotes] = useState(initialNotes)
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedDate, setSelectedDate] = useState(null);


  function handleDateButton(date) {
    setSelectedDate(date);
    setShowDayModal(true);
  }
  function handleAppointmentButton(date) {
    setSelectedDate(date);
    setShowAppointmentModal(true);
  }
  function handleNoteButton(date) {
    setSelectedDate(date);
    setShowNoteModal(true);
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
  function getCurrentAppointments() {
    const currentAppointments = appointments.filter(a =>isSameDate(a.date, selectedDate));
    return currentAppointments.length > 0 ? currentAppointments : [];

  }
  function getCurrentNotes() {
    const currentNotes = notes.filter(n =>isSameDate(n.date, selectedDate));
    return currentNotes.length > 0 ? currentNotes.map(data => data.noteText) : [];
  }

  console.log(getCurrentNotes());
  return (
    <>
      <Head

      />
      <Calendar
        onDateButton={handleDateButton}
        onAppointmentButton={handleAppointmentButton}
        onNoteButton={handleNoteButton}

      />
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
export default App;
