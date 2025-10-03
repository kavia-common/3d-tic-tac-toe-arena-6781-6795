import React from 'react';
import LayerGrid from './LayerGrid';
import { BOARD_SIZE } from '../game/constants';

const Board3D = ({ board, onCellClick, winningLine, disabled }) => {
  // Create layers of the 3D board
  const layers = Array.from({ length: BOARD_SIZE }, (_, z) =>
    Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, i) =>
      z * BOARD_SIZE * BOARD_SIZE + i
    )
  );

  const boardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    padding: '20px',
    perspective: '1000px',
  };

  return (
    <div className="board-3d" style={boardStyle}>
      {layers.map((layer, index) => (
        <LayerGrid
          key={index}
          layer={layer}
          board={board}
          onCellClick={onCellClick}
          winningLine={winningLine}
          disabled={disabled}
          layerIndex={index}
        />
      ))}
    </div>
  );
};

export default Board3D;
