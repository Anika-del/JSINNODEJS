import React, { useState } from 'react';

function NoteForm({ onSave }) {
  const [note, setNote] = useState({ heading: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(note);
    setNote({ heading: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="heading" value={note.heading} onChange={handleChange} placeholder="Heading" required />
      <textarea name="description" value={note.description} onChange={handleChange} placeholder="Description" required></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default NoteForm;
