import NoteModal from "../NoteModal/NoteModal";
import { useState } from "react";
import classes from "./Note.module.css"
import ReactDOM from "react-dom";


//beispiel note { date: new Date(2024, 2, 26), text: "Buy eggs and chips" }

function Note({  dayDate }) {

    const [showNoteModal, setShowNoteModal] = useState(false);
   
    function handleNoteButton() {
        setShowNoteModal(true);
    }


    return (
        <>
            <button onClick={handleNoteButton} className={classes.button}>⚪Notes</button>
            {showNoteModal &&
                ReactDOM.createPortal(<div className="overlay">
                    <NoteModal
                        dayDate={dayDate}
                        onNoteClose={() => setShowNoteModal(false)} />
                </div>, document.body
                )}
        </>
    );

}
export default Note;