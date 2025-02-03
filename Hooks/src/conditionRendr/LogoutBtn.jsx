import React from 'react';

const LogoutBtn = ({ onLogout }) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LogoutBtn;
