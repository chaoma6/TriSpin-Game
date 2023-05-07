// Dimensions of symbols
export const SYMBOL_WIDTH = 300; // width of symbol image
export const SYMBOL_HEIGHT = 300; // height of symbol image

// Scale of symbols
export const SYMBOL_SCALE = 0.365; // scaling factor for symbols

// How many symbols are in the game
export const NUMBER_OF_SYMBOLS = 9; // total number of symbols in the game

// How many reels are in the game
export const REEL_NUMBER = 5; // total number of reels in the game

// Full length of one reel of game
export const REEL_LENGTH = 5; // total number of symbols in each reel

// How many times the reel is gonna respin
export const REEL_REPEAT = 12; // number of times the reel will re-spin

// How many symbols of reel are visible on screen
export const SYMBOLS_ON_SCREEN = 3; // number of symbols that are visible on screen at a time

// This is for small spaces between two symbols
export const FRAME_SCALE_OFFSET = 0.9; // scaling factor for the frame

// STARTING_BALANCE / CURRENT_BALANCE
export const DEMO_BALANCE = 2000; // starting balance for demo mode

// Starting level of bet
export const DEFAULT_BET_LEVEL = 4; // default bet level

// All available bet amounts
export const BET_AMOUNT_LEVELS = [1, 2, 4, 5, 10, 20, 50, 100, 200, 500, 1000]; // array of available bet amounts

// Reel spinning speed
export const REEL_SPEED = 25; // speed of reel spinning animation

// Reel stopping speed modifier
export const REEL_DECAY = 0.085; // modifier for reel stopping speed

// Reel stopping threshlod
export const STOP_SPIN_SPEED = 3; // threshold for stopping reel spinning animation

// Max win line length
export const WIN_LINE_LENGTH = 5; // maximum number of symbols in a win line

// Total game lines
export const TOTAL_LINES = 10; // total number of win lines in the game

export const SCATTER_SYMBOL_ID = 8; // ID of the scatter symbol

// EPS used when stopping symbol to right position
export const EPS_Y = (SYMBOL_HEIGHT * SYMBOL_SCALE) / 2; // epsilon value for symbol stopping position on the Y-axis
export const EPS = EPS_Y / 2; // epsilon value for symbol stopping position

// Default font style of game
export const DEFAULT_FONT_STYLE = {
	fontFamily: 'Verdana', // font family for game text
	fontVariant: 'small-caps', // font variant for game text
	fontWeight: 'bold', // font weight for game text
};
