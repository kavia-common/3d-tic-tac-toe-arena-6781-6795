// Game symbols and players
export const PLAYER_X = 'X';
export const PLAYER_O = 'O';
export const EMPTY_CELL = null;

// Board dimensions
export const BOARD_SIZE = 3;
export const TOTAL_CELLS = Math.pow(BOARD_SIZE, 3);

// Game modes
export const GAME_MODES = {
  PVP: 'PVP',
  AI: 'AI'
};

// Theme colors (Ocean Professional)
export const THEME = {
  primary: '#2563EB',
  secondary: '#F59E0B',
  success: '#F59E0B',
  error: '#EF4444',
  background: '#f9fafb',
  surface: '#ffffff',
  text: '#111827',
};

// Animation durations
export const ANIMATIONS = {
  moveDelay: 300,
  aiDelay: 800,
  winHighlight: 1000,
};
