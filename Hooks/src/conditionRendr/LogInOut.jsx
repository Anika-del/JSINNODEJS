import React, { useState } from "react";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
// import './App.css'

function LogInOut() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  //1).----------------useState phle se true h to ye false dega------------kuki != to h
  if (!isLoggedIn) {  //condition useState phle se hi true h 
    return (
      <LoginBtn onLogin={handleLogin} />
    );
  }

  //2). ----------------useState phle se true h to ye true dega------------kuki == to h
  //   if (isLoggedIn) {  //condition useState phle se hi true h 
  //     return (
  //       <LoginBtn />
  //     )
  //   }
  
  // 0).---------- Logical Operator---------------
  // return (
  // <div>
  //   <h1>Welcome everyone to my app</h1>
  //   <div>
  //     {isLoggedIn && <LogoutBtn />}
  //   </div>
  // </div>
  // )

  //1).-------------- ternary operator -------------------------
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn onLogin={handleLogin} />}
  //   </div>
  // )

  // 2). ---------------if else -----------------
  return (
    <div>
      <h1>Welcome everyone to my app</h1>
      {isLoggedIn ? (
        <LogoutBtn onLogout={handleLogout} />  //true h to ye dikhe ga
      ) : (
        <LoginBtn onLogin={handleLogin} />   //false h to ye dikhega
      )}
    </div>
  );
}

export default LogInOut;
