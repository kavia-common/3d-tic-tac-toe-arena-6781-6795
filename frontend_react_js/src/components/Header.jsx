import React from 'react';
import { THEME } from '../game/constants';

const Header = ({ currentPlayer, gameMode }) => {
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: THEME.text,
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    color: THEME.primary,
  };

  const statusStyle = {
    fontSize: '1.2rem',
    color: currentPlayer === 'X' ? THEME.primary : THEME.error,
  };

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>3D Tic Tac Toe</h1>
      <div style={statusStyle}>
        Current Player: {currentPlayer}
        <span style={{ color: THEME.text, marginLeft: '10px' }}>
          ({gameMode === 'AI' && currentPlayer === 'O' ? 'AI' : 'Player'})
        </span>
      </div>
    </div>
  );
};

export default Header;
