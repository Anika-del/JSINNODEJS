import React, { useState } from "react";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";
// import './App.css'

function LogInOut() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  // Conditional rendering using if-else
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome everyone to my app</h1>
        <LogoutBtn onLogout={handleLogout} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome everyone to my app</h1>
        <LoginBtn onLogin={handleLogin} />
      </div>
    );
  }
}

export default LogInOut;
