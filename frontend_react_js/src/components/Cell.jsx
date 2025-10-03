import React from 'react';
import { THEME } from '../game/constants';

const Cell = ({ value, onClick, highlighted, disabled, layerIndex }) => {
  const cellStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: 'var(--surface)',
    border: '1px solid rgba(0,0,0,0.06)',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: value === 'X' ? THEME.primary : THEME.error,
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: highlighted ? 'translateZ(8px)' : 'translateZ(0)',
    opacity: disabled ? 0.7 : 1,
  };

  const textStyle = value ? {
    transform: 'translateZ(2px)',
    textShadow: value === 'X' 
      ? `0 2px 4px rgba(37,99,235,0.3)`
      : `0 2px 4px rgba(239,68,68,0.3)`,
  } : {};

  const highlightStyle = highlighted ? {
    boxShadow: `
      0 0 15px rgba(245, 158, 11, 0.5),
      0 8px 24px rgba(37, 99, 235, 0.15)
    `,
    background: 'var(--ocean-grad)',
  } : {
    boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 8px 18px rgba(37,99,235,0.08)',
    background: 'var(--ocean-grad)',
  };

  return (
    <button
      className={`game-cell ${value ? 'placed' : ''}`}
      style={{ ...cellStyle, ...highlightStyle }}
      onClick={onClick}
      disabled={disabled || value !== null}
      aria-label={`Cell ${value || 'empty'} on layer ${layerIndex + 1}`}
    >
      <span style={textStyle}>{value}</span>
    </button>
  );
};

export default Cell;
