import React from 'react';
import Cell from './Cell';
import { BOARD_SIZE } from '../game/constants';

const LayerGrid = ({ layer, board, onCellClick, winningLine, disabled, layerIndex }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
    gap: '8px',
    padding: '12px',
    backgroundColor: 'rgba(37, 99, 235, 0.05)',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transform: `translateY(${layerIndex * -10}px)`,
    zIndex: BOARD_SIZE - layerIndex,
  };

  return (
    <div className="layer-grid" style={gridStyle}>
      {layer.map((cellIndex) => {
        const isHighlighted = winningLine?.includes(cellIndex);
        return (
          <Cell
            key={cellIndex}
            value={board[cellIndex]}
            onClick={() => onCellClick(cellIndex)}
            highlighted={isHighlighted}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default LayerGrid;
