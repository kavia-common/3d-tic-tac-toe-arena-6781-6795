import React from 'react';
import Cell from './Cell';
import { BOARD_SIZE } from '../game/constants';

const LayerGrid = ({ layer, board, onCellClick, winningLine, disabled, layerIndex }) => {
  const scale = 1 - (layerIndex * 0.02); // Subtle scale reduction for depth
  const zTranslate = layerIndex * 26; // Using CSS variable value

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
    gap: '8px',
    padding: '12px',
    backgroundColor: 'rgba(37, 99, 235, 0.05)',
    borderRadius: '12px',
    transform: `translateZ(${zTranslate}px) scale(${scale})`,
    transformStyle: 'preserve-3d',
    position: 'absolute',
    top: layerIndex * -10,
    left: 0,
    right: 0,
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
            layerIndex={layerIndex}
          />
        );
      })}
    </div>
  );
};

export default LayerGrid;
