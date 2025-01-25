// src/App.js
import React from 'react';
import Coin from './Coin';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coin Flip</h1>
      </header>
      <Coin />
    </div>
  );
}

export default App;
