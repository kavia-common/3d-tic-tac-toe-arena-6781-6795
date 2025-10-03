import { EMPTY_CELL, BOARD_SIZE } from './constants';
import { checkWinner, getEmptyCells } from './logic';

const findWinningMove = (board, player) => {
  const emptyCells = getEmptyCells(board);
  
  for (const cell of emptyCells) {
    const testBoard = [...board];
    testBoard[cell] = player;
    if (checkWinner(testBoard)) {
      return cell;
    }
  }
  return null;
};

export const makeAiMove = (board, aiPlayer) => {
  // Try to win
  const winningMove = findWinningMove(board, aiPlayer);
  if (winningMove !== null) return winningMove;

  // Block opponent's winning move
  const opponentPlayer = aiPlayer === 'X' ? 'O' : 'X';
  const blockingMove = findWinningMove(board, opponentPlayer);
  if (blockingMove !== null) return blockingMove;

  // Take center cell of middle layer if available
  const centerIndex = Math.floor((Math.pow(BOARD_SIZE, 3) - 1) / 2);
  if (board[centerIndex] === EMPTY_CELL) return centerIndex;

  // Take random empty cell
  const emptyCells = getEmptyCells(board);
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};
