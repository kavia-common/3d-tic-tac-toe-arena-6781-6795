import { BOARD_SIZE, EMPTY_CELL } from './constants';

// Convert 1D index to 3D coordinates
export const indexToCoords = (index) => ({
  x: index % BOARD_SIZE,
  y: Math.floor((index % (BOARD_SIZE * BOARD_SIZE)) / BOARD_SIZE),
  z: Math.floor(index / (BOARD_SIZE * BOARD_SIZE))
});

// Convert 3D coordinates to 1D index
export const coordsToIndex = (x, y, z) => 
  z * BOARD_SIZE * BOARD_SIZE + y * BOARD_SIZE + x;

// Generate all possible winning line combinations
export const generateWinningLines = () => {
  const lines = [];
  
  // Horizontal lines in each layer (9 lines)
  for (let z = 0; z < BOARD_SIZE; z++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      lines.push(Array.from({length: BOARD_SIZE}, (_, x) => coordsToIndex(x, y, z)));
    }
  }
  
  // Vertical lines in each layer (9 lines)
  for (let z = 0; z < BOARD_SIZE; z++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      lines.push(Array.from({length: BOARD_SIZE}, (_, y) => coordsToIndex(x, y, z)));
    }
  }
  
  // Depth lines through layers (9 lines)
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      lines.push(Array.from({length: BOARD_SIZE}, (_, z) => coordsToIndex(x, y, z)));
    }
  }
  
  // Diagonals in each layer (6 lines)
  for (let z = 0; z < BOARD_SIZE; z++) {
    lines.push(Array.from({length: BOARD_SIZE}, (_, i) => coordsToIndex(i, i, z)));
    lines.push(Array.from({length: BOARD_SIZE}, (_, i) => coordsToIndex(i, BOARD_SIZE - 1 - i, z)));
  }
  
  // Vertical diagonals across layers (4 main space diagonals)
  lines.push(Array.from({length: BOARD_SIZE}, (_, i) => coordsToIndex(i, i, i)));
  lines.push(Array.from({length: BOARD_SIZE}, (_, i) => coordsToIndex(i, i, BOARD_SIZE - 1 - i)));
  lines.push(Array.from({length: BOARD_SIZE}, (_, i) => coordsToIndex(i, BOARD_SIZE - 1 - i, i)));
  lines.push(Array.from({length: BOARD_SIZE}, (_, i) => coordsToIndex(BOARD_SIZE - 1 - i, i, i)));
  
  return lines;
};

// Winning lines cache
export const WINNING_LINES = generateWinningLines();

// Check for a winner
export const checkWinner = (board) => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        line: line
      };
    }
  }
  return null;
};

// Check if the game is a draw
export const isDraw = (board) => {
  return board.every(cell => cell !== EMPTY_CELL);
};

// Get all empty cell indices
export const getEmptyCells = (board) => {
  return board.reduce((empty, cell, index) => {
    if (cell === EMPTY_CELL) empty.push(index);
    return empty;
  }, []);
};
