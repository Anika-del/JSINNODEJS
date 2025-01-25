// src/Coin.js
import React, { useState } from 'react';
import './Coin.css';

const Coin = () => {
  const [side, setSide] = useState(null);

  const flipCoin = () => {
    const newSide = Math.random() < 0.5 ? 'heads' : 'tails';
    setSide(newSide);
  };

  return (
    <div className="coin-container">
      <div className={`coin ${side}`}>
        {side && <img src={`/images/${side}.jfif`} alt={side} />}
      </div>
      <button onClick={flipCoin}>Flip Coin</button>
    </div>
  );
};

export default Coin;
