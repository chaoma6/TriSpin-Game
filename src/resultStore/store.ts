import collection from '../assets/symbols/index';
import {
	generateInitilaState,
	generateLoosingOutcomes,
	generateWinningOutcome,
} from './outcomeGenerators/generators';

const { symbol1, symbol2, symbol3, symbol4, symbol5, symbol6 } = collection;
export const symbols_data = generateInitilaState(
	symbol1,
	symbol2,
	symbol3,
	symbol4,
	symbol5,
	symbol6
);

export const loosingOutcome = generateLoosingOutcomes(
	symbol1,
	symbol2,
	symbol3,
	symbol4,
	symbol5,
	symbol6
);

export const winningOutcome = generateWinningOutcome(
	symbol1,
	symbol2,
	symbol3,
	symbol4,
	symbol5,
	symbol6
);
