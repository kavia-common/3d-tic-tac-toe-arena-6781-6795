import React from 'react';
import { THEME } from '../game/constants';

const Cell = ({ value, onClick, highlighted, disabled }) => {
  const cellStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: highlighted ? THEME.secondary : THEME.surface,
    border: `2px solid ${THEME.primary}`,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: value === 'X' ? THEME.primary : THEME.error,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: highlighted ? '0 0 15px rgba(245, 158, 11, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
    opacity: disabled ? 0.7 : 1,
  };

  return (
    <button
      className="game-cell"
      style={cellStyle}
      onClick={onClick}
      disabled={disabled || value !== null}
      aria-label={`Cell ${value || 'empty'}`}
    >
      {value}
    </button>
  );
};

export default Cell;
