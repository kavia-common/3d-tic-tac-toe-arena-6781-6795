import React from 'react';
import { THEME } from '../game/constants';

const StatusBar = ({ winner, isDraw }) => {
  const statusStyle = {
    backgroundColor: winner ? THEME.success : isDraw ? THEME.primary : 'transparent',
    color: winner || isDraw ? THEME.surface : THEME.text,
    padding: '10px 20px',
    borderRadius: '8px',
    marginTop: '20px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  let message = '';
  if (winner) {
    message = `Player ${winner} wins!`;
  } else if (isDraw) {
    message = "It's a draw!";
  }

  return message ? <div style={statusStyle}>{message}</div> : null;
};

export default StatusBar;
