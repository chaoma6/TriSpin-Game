import collection from '../assets/symbols/index';
import generateInitialState from './outcomeGenerators/generateInitialState';
import generateLosingOutcomes from './outcomeGenerators/generateLosingOutcomes';
import generateWinningOutcomes from './outcomeGenerators/generateWinningOutcomes';

const { symbol1, symbol2, symbol3, symbol4, symbol5, symbol6 } = collection;
export const symbolsData = generateInitialState(
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5,
  symbol6
);

export const loosingOutcome = generateLosingOutcomes(
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5,
  symbol6
);

export const winningOutcome = generateWinningOutcomes(
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5,
  symbol6
);
