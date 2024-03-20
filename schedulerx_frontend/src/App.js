import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import Head from "./components/Head/Head";
import DayModal from "./components/DayModal/DayModal";
import AppointmentModal from "./components/AppointmentModal/AppointmentModal";
import NoteModal from "./components/NoteModal/NoteModal";

const initialAppointments = [
  { day: "17", time: "10:00", activity: "Gym", partner: "Ilias" },
  { day: "17", time: "16:30", activity: "Dinner", partner: "Max" },
  { day: "11", time: "20:00", activity: "Cinema", partner: "Moe" }
];
const initialNotes = [
  { day: "17", noteText: "I need to prepare for coming math exam, goal is to atleast study for 2 hours today.." },
  { day: "17", noteText: "Text brother" },
  { day: "26", noteText: "Buy eggs and chips" }
];

function App() {

  const [showDayModal, setShowDayModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [notes, setNotes] = useState(initialNotes)
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedDay, setSelectedDay] = useState(0);


  function handleDayButton(day) {
    setSelectedDay(day);
    setShowDayModal(true);
  }
  function handleAppointmentButton(day) {
    setSelectedDay(day);
    setShowAppointmentModal(true);
  }
  function handleNoteButton(day) {
    setSelectedDay(day);
    setShowNoteModal(true);
  }
  function handleNoteSubmit(note) {
    const newNote = { day: selectedDay, noteText: note }
    setNotes(prev => [...prev, newNote]);
  }
  function handleAppointmentSubmit(time, activity, partner) {
    const newAppointment = { day: selectedDay, time: time, activity: activity, partner: partner };
    setAppointments(prev => [...prev, newAppointment]);
  }
  function getCurrentAppointments() {
    const currentAppointments = appointments.filter(a => a.day === selectedDay);
    return currentAppointments.length > 0 ? currentAppointments : [];

  }
  function getCurrentNotes() {
    const currentNotes = notes.filter(n => n.day === selectedDay);
    return currentNotes.length > 0 ? currentNotes.map(data => data.noteText) : [];
  }

  console.log(getCurrentNotes());
  return (
    <>
      <Head
      
      />
      <Calendar
        onDayButton={handleDayButton}
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
