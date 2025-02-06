import React, { useState } from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedNote);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input type="text" name="heading" value={editedNote.heading} onChange={handleEditChange} required />
          <textarea name="description" value={editedNote.description} onChange={handleEditChange} required></textarea>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <h3>{note.heading}</h3>
          <p>{note.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
