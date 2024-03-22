import NoteModal from "../NoteModal/NoteModal";
import { useState } from "react";
import classes from "./Note.module.css"
import ReactDOM from "react-dom";

//beispiel note { date: new Date(2024, 2, 26), text: "Buy eggs and chips" }

function Note({ fetchNotes, notes, dayDate }) {

    const [showNoteModal, setShowNoteModal] = useState(false);


    function handleNoteButton() {

        fetchNotes();

        setShowNoteModal(true);
    }


    return (
        <>
            <button onClick={handleNoteButton} className={classes.button}>⚪Notes</button>
            {showNoteModal &&
                ReactDOM.createPortal(<div className="overlay">
                    <NoteModal
                        dayDate={dayDate}
                        fetchNotes={fetchNotes}
                        notes={notes}
                        onNoteClose={() => setShowNoteModal(false)} />
                </div>, document.body
                )}
        </>
    );

}
export default Note;