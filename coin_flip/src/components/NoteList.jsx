import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onEdit, onDelete }) {
  return (
    <div>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onEdit={(updatedNote) => onEdit(index, updatedNote)} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default NoteList;
