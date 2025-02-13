import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import background from './background.jpg'
import love from './love-sweet.png'
import explosion from './explosion.png'

function Main() {
  const [health, setHealth] = useState(1);
  const [charm, setCharm] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const navigate = useNavigate();

  const attack = () => {
    setHealth(prevHealth => Math.max(prevHealth - 0.05, 0));
    setCharm(true)
    setTimeout(() => {
      setCharm(false);
    }, 500);
  }

  const failed_attack = () => {
    setAttempt(true)
    setTimeout(() => {
      setAttempt(false);
    }, 500);
  }

  useEffect(() => {
    setTimeout(() => {
      if (health === 0) {
        navigate('/game-over');
      }
    }, 1000);
  }, [health, navigate]);

  return (
    <div 
      className="main-container"
      style={{
        backgroundImage: `url(${background})`
      }}>

      <a 
        className="pokemon1"
        onClick={attack}
      >
        <div className="pokemon-info">
          <div className="pokemon-title">
            <div>Jirachi</div>
            <div>Lv23</div>
          </div>
          <progress value={1}></progress>
        </div>
        <img 
          src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/jirachi.gif" 
          alt="Jirachi"
        />
      </a>

      <a 
        className="pokemon2" 
        onClick={failed_attack}
      >
        <div className="pokemon-info">
        <div className="pokemon-title">
          <div>Ditto</div>
          <div>Lv23</div>
        </div>
          <progress value={health}></progress>
        </div>
        {health === 0 && (
          <>
            <img className="explosion" src={explosion} alt="explosion" />
          </>
        )}
        {health !== 0 && (
          <>
            <img 
              src="https://img.pokemondb.net/sprites/black-white/anim/shiny/ditto.gif" 
              alt="Ditto"
            />
          </>
        )}
        {attempt && (
          <>
            <div className="attempt-message">The foe is charmed by the user’s cute appeals</div>
          </>
        )}
      </a>

      {charm && (
        <>
          <img className="charm1" src={love} alt="charm1" />
          <img className="charm2" src={love} alt="charm2" />
          <img className="charm3" src={love} alt="charm3" />
        </>
      )}

    </div>
  );
}

export default Main;
