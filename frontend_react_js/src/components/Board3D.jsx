import React, { useState, useEffect, useCallback } from 'react';
import LayerGrid from './LayerGrid';
import { BOARD_SIZE } from '../game/constants';

const Board3D = ({ board, onCellClick, winningLine, disabled }) => {
  const [rotation, setRotation] = useState({ x: 18, z: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!isHovering) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;
    
    setRotation({
      x: 18 + y * 10,
      z: x * 10
    });
  }, [isHovering]);

  useEffect(() => {
    return () => {
      setIsHovering(false);
    };
  }, []);

  // Create layers of the 3D board
  const layers = Array.from({ length: BOARD_SIZE }, (_, z) =>
    Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, i) =>
      z * BOARD_SIZE * BOARD_SIZE + i
    )
  );

  // Calculate winning line position if exists
  const getWinningLineStyle = () => {
    if (!winningLine) return null;

    const startCell = winningLine[0];
    const endCell = winningLine[2];
    
    // Calculate 3D positions
    const startZ = Math.floor(startCell / (BOARD_SIZE * BOARD_SIZE));
    const endZ = Math.floor(endCell / (BOARD_SIZE * BOARD_SIZE));
    
    return {
      position: 'absolute',
      width: '4px',
      height: '100%',
      transformOrigin: '50% 50%',
      transform: `translateZ(${startZ * 26}px)`,
      opacity: 0.8
    };
  };

  const winningLineStyle = getWinningLineStyle();

  return (
    <div 
      className="board-3d"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setRotation({ x: 18, z: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="board-3d-container"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg)`
        }}
      >
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
        {winningLine && <div className="winning-line" style={winningLineStyle} />}
      </div>
    </div>
  );
};

export default Board3D;
