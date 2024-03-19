import { useState } from "react";
import classes from "./NoteModal.module.css"
function NoteModal({onNoteClose, notes, onNoteSubmit}){
    const[note, setNote]= useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(!note) return

        onNoteSubmit(note);
        setNote("");
    }
    return (
        <div className={classes.modal}>
            <button onClick={onNoteClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Your Notes </h1>
            <h3>New Note:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={note} onChange={(e)=> setNote(e.target.value)}/>
                <button> Enter </button>
            </form>
            <h3>Current Notes:  </h3>
            <ul>
                {notes.map(n => <li>{n}</li>)}
            </ul>
        </div>
    );
}
export default NoteModal;