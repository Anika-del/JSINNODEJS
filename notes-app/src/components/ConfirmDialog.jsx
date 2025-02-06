import React from 'react';

function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="confirm-dialog">
      <p>Are you sure?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}

export default ConfirmDialog;
