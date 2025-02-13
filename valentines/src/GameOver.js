import React from 'react';
import { Link } from 'react-router-dom';
import legend_background from './legend-background.jpg'
import './GameOver.css';

function GameOver() {
  return (
    <div 
      className="main-container"
      style={{
            backgroundImage: `url(${legend_background})`
          }}
      >
      <div className="message-container">
        <h1>You've been charmed!</h1>
        <h2>Happy Valentine's Day &lt;3</h2>
        <p className="first-line">Technically neither Pokemon have genders so the move "Charm" wouldn't work.</p>
        <p>But I guess for us it did?</p>
        <Link to="/">
          <button>
            Relive the terror
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
