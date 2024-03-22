import NoteModal from "../NoteModal/NoteModal";
import { useState } from "react";
import classes from "./Note.module.css"
import ReactDOM from "react-dom";


const initialNotes = [
    { date: new Date(2024, 2, 17), text: "I need to prepare for coming math exam, goal is to atleast study for 2 hours today.." },
    { date: new Date(2024, 2, 17), text: "Text brother" },
    { date: new Date(2024, 2, 26), text: "Buy eggs and chips" }
];

function Note({ fetchNotes, notes }) {

    const [showNoteModal, setShowNoteModal] = useState(false);
   

    function handleNoteButton() {
       
        fetchNotes();

        setShowNoteModal(true);
    }
   

    return (
        <>
            <button onClick={handleNoteButton} className={classes.button}>⚪Notes</button>
            {showNoteModal &&
               ReactDOM.createPortal( <div className="overlay">
                    <NoteModal
                        notes={notes}
                        onNoteClose={() => setShowNoteModal(false)} />
                </div>, document.body
                )}
        </>
    );

}
export default Note;