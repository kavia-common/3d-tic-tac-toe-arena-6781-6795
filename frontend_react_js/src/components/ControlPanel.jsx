import React from 'react';
import { THEME } from '../game/constants';

const ControlPanel = ({ onNewGame, onToggleMode, gameMode }) => {
  const buttonStyle = {
    backgroundColor: THEME.primary,
    color: THEME.surface,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    margin: '0 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const panelStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  return (
    <div style={panelStyle}>
      <button
        style={buttonStyle}
        onClick={onNewGame}
        onMouseOver={e => e.target.style.backgroundColor = THEME.secondary}
        onMouseOut={e => e.target.style.backgroundColor = THEME.primary}
      >
        New Game
      </button>
      <button
        style={buttonStyle}
        onClick={onToggleMode}
        onMouseOver={e => e.target.style.backgroundColor = THEME.secondary}
        onMouseOut={e => e.target.style.backgroundColor = THEME.primary}
      >
        Mode: {gameMode === 'AI' ? 'vs AI' : 'vs Player'}
      </button>
    </div>
  );
};

export default ControlPanel;
