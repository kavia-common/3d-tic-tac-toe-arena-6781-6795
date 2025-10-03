import React, { useState, useEffect } from 'react';
import './App.css';
import Board3D from './components/Board3D';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
import ControlPanel from './components/ControlPanel';
import { EMPTY_CELL, PLAYER_X, PLAYER_O, TOTAL_CELLS, GAME_MODES, ANIMATIONS } from './game/constants';
import { checkWinner, isDraw } from './game/logic';
import { makeAiMove } from './game/ai';

function App() {
  const [board, setBoard] = useState(Array(TOTAL_CELLS).fill(EMPTY_CELL));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const [gameMode, setGameMode] = useState(GAME_MODES.PVP);
  const [winningLine, setWinningLine] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Handle AI moves
  useEffect(() => {
    if (gameMode === GAME_MODES.AI && currentPlayer === PLAYER_O && !gameOver) {
      const timer = setTimeout(() => {
        const aiMoveIndex = makeAiMove(board, PLAYER_O);
        handleMove(aiMoveIndex);
      }, ANIMATIONS.aiDelay);
      return () => clearTimeout(timer);
    }
  }, [gameMode, currentPlayer, board, gameOver]);

  const handleMove = (index) => {
    if (board[index] !== EMPTY_CELL || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    if (winResult) {
      setWinningLine(winResult.line);
      setGameOver(true);
    } else if (isDraw(newBoard)) {
      setGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
    }
  };

  const handleNewGame = () => {
    setBoard(Array(TOTAL_CELLS).fill(EMPTY_CELL));
    setCurrentPlayer(PLAYER_X);
    setWinningLine(null);
    setGameOver(false);
  };

  const handleToggleMode = () => {
    setGameMode(gameMode === GAME_MODES.PVP ? GAME_MODES.AI : GAME_MODES.PVP);
    handleNewGame();
  };

  return (
    <div className="App">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Header currentPlayer={currentPlayer} gameMode={gameMode} />
        <Board3D
          board={board}
          onCellClick={handleMove}
          winningLine={winningLine}
          disabled={gameOver || (gameMode === GAME_MODES.AI && currentPlayer === PLAYER_O)}
        />
        <StatusBar
          winner={winningLine ? board[winningLine[0]] : null}
          isDraw={!winningLine && isDraw(board)}
        />
        <ControlPanel
          onNewGame={handleNewGame}
          onToggleMode={handleToggleMode}
          gameMode={gameMode}
        />
      </div>
    </div>
  );
}

export default App;
