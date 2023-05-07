import collection from '../assets/symbols/index';
import {
	generateInitilaState,
	generateLoosingOutcomes,
	generateWinningOutcome,
} from './outcomeGenerators/generators';

const { banana, plum, berries, hat, crown, diamond } = collection;
export const symbols_data = generateInitilaState(
	banana,
	plum,
	berries,
	hat,
	crown,
	diamond
);
//plum,banana,berries,hat,crown,diamond
export const loosingOutcome = generateLoosingOutcomes(
	plum,
	banana,
	berries,
	hat,
	crown,
	diamond
);

export const winningOutcome = generateWinningOutcome(
	plum,
	banana,
	berries,
	hat,
	crown,
	diamond
);
