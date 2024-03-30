import { useEffect, useState } from "react";
import classes from "./NoteModal.module.css"
import { format } from "date-fns";

function NoteModal({ onNoteClose, dayDate}) {

    const formattedDate = format(dayDate, "yyyy-MM-dd'T'HH:mm");

    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {fetchNotes()}, []);
    useEffect(()=>{
        function escape(e){
            if(e.code==="Escape"){
                onNoteClose();
            }
        }
        document.addEventListener("keydown", escape);

        return function(){
            document.removeEventListener("keydown", escape);
        }
    },[onNoteClose]);

    async function fetchNotes() {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/notes/${format(dayDate, "yyyy-MM-dd'T'HH:mm")}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            
            const transformedNotes = data.map(note => ({
                ...note,
                date: new Date(note.date)
            }));
            
            setNotes(transformedNotes);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
       
        
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!note) return;
    
        const newNote = {
            date: formattedDate,
            text: note
        };
    
        try {
            const response = await fetch("http://localhost:8080/api/v1/addNote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newNote)
            });
    
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            setNotes(prevNotes => [...prevNotes, newNote]);
            console.log("Note added successfully");
    
        } catch (error) {
            console.error("Error adding note:", error);
        }
       
        setNote("");
    }
    
    return (
        <div className={classes.modal}>
            <button onClick={onNoteClose} className={classes.close}>&times;</button>
            <h1 className={classes.title}>Your Notes </h1>
            <h3>New Note:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                <button> Enter </button>
            </form>
            <h3>Current Notes:  </h3>
            <ul>
                {notes.map(n => <li>{n.text}</li>)}
            </ul>
        </div>
    );
}

export default NoteModal;