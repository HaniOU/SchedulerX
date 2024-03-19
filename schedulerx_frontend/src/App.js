import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import Head from "./components/Head/Head";
import DayModal from "./components/DayModal/DayModal";
import AppointmentModal from "./components/AppointmentModal/AppointmentModal";
import NoteModal from "./components/NoteModal/NoteModal";


const initialAppointments = [];
const initialNotes = [
  {day:17, noteText:"I need to prepare for coming math exam, goal is to atleast study for 2 hours today.."},
  {day:17, noteText: "Text brother"},
  {day:26, noteText:"Buy eggs and chips"}
];

function App() {
  const [showDayModal, setShowDayModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [notes, setNotes] = useState(initialNotes)
  const [selectedDay, setSelectedDay] = useState(0);

  
  function handleNoteSubmit(note){
    const newData ={day: selectedDay, noteText: note}
    setNotes(prev => [...prev,newData]);
  }
  function getCurrentNotes(){
    const currentNotes = notes.filter(n => n.day === selectedDay);
    return currentNotes.length>0 ? currentNotes.map(data => data.noteText) : [];
  }
  function handleNoteButton(day){
    setSelectedDay(day);
    setShowNoteModal(true);
  }
  return (
    <>
      <Head />
      <Calendar
        onDayButton={() => setShowDayModal(true)  }
        onAppointmentButton={() => setShowAppointmentModal(true)}
        onNoteButton={handleNoteButton}
        />
      {showDayModal &&
        <div className="overlay">
          <DayModal 
          onDayClose={() => setShowDayModal(false)} />
        </div>}
      {showAppointmentModal &&
        <div className="overlay">
          <AppointmentModal 
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
