import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
  
  const [notes, setNotes] = React.useState( () => JSON.parse(localStorage.getItem("key")) || [])
  

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
    
  )

  console.log (`This is NoteID ${currentNoteId}`);

  React.useEffect(() => {
    localStorage.setItem("key", JSON.stringify(notes))
  }, [notes])


  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(preNotes => [newNote, ...preNotes])
    setCurrentNoteId(newNote.id)
  }

  function updateNote(text) {
    
    setNotes(oldNotes => {
      const newArray = []
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i]
        if (oldNote.id === currentNoteId) {
          newArray.unshift({...oldNote, body: text})
        } else {
          newArray.push(oldNote)
        }
      }
      return newArray
    })
  }
  /* setNotes(oldNotes => oldNotes.map(oldNote => {
    return oldNote.id === currentNoteId
      ? { ...oldNote, body: text}
      : oldNote
  })) */

  function deleteNote(event, noteId) {

    if (confirm("Delete this note?")) {
      setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }    //setCurrentNoteId(notes[0] && notes[0].id)

  }
  /* const newArray = []
  for (let i = 0; i < oldNotes.length; i++) {
    const oldNote = oldNotes[i]
    if (oldNote.id !== noteId) {
      newArray.push(oldNote)
    }
  }
  return newArray */
  



  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0
        ?
        <Split
          sizes={[30, 70]}
          direction="horizontal"
          className="split"
        >
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            delete={deleteNote}
          />
          {
            currentNoteId &&
            notes.length > 0 &&
            <Editor
              currentNote={findCurrentNote()}
              updateNote={updateNote}
            />
          }
        </Split>
        :
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button
            className="first-note"
            onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      }
    </main>
  )

}