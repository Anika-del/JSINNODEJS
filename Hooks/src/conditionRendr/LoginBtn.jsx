import React from 'react';

const LoginBtn = ({ onLogin }) => {
  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginBtn;
