# 3D Tic Tac Toe

A modern web-based implementation of 3D Tic Tac Toe using React. Players can compete against each other or play against a simple AI opponent on a 3x3x3 grid.

## Features

- 3x3x3 game board with three layers
- Player vs Player and Player vs AI modes
- Modern Ocean Professional theme
- Winning line highlighting
- Responsive design
- Keyboard accessible

## How to Play

1. The game is played on three 3x3 grids stacked on top of each other
2. Players take turns placing their marks (X or O) in empty cells
3. Win by getting three marks in a line across any:
   - Horizontal row (9 possibilities per layer)
   - Vertical column (9 possibilities per layer)
   - Diagonal (2 possibilities per layer)
   - Vertical line through layers (9 possibilities)
   - 3D diagonal (4 main space diagonals)

## Controls

- Click or tap any empty cell to place your mark
- Use Tab and Enter/Space for keyboard navigation
- "New Game" button to restart
- "Mode" button to toggle between PvP and AI modes

## Running the Game

In the project directory, run:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to play in your browser.
