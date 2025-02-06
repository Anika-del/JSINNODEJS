//---------------------Notes App---------------------------------------------------
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ConfirmDialog from './components/ConfirmDialog';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ heading: '', description: '' });
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSaveNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleEditNote = (index, updatedNote) => {
    const updatedNotes = notes.map((note, i) => (i === index ? updatedNote : note));
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    
    <div className="App">
      <h1 className="text-3xl font-bold underline"> Notes App! </h1>
      <NoteForm onSave={handleSaveNote} />
      <NoteList notes={notes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
      {showConfirm && <ConfirmDialog onConfirm={() => setShowConfirm(false)} onCancel={() => setShowConfirm(false)} />}
    </div>
  );
}

export default App;
//-------------------------------------------Notes app-----------------------------------------------
