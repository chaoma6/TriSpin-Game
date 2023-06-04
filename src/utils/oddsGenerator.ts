import { winningOutcome, loosingOutcome } from '../store/store';

interface Outcome {
  combination: string[][];
  winningLine: number[];
  payout: number;
}

interface OddsGeneratorResult {
  playerWin: boolean;
  loosingOutcomeIndex: number;
  winningOutcomeIndex: number;
  outcome: Outcome;
}

// Function to generate a random index within the range of the given array length
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateRandomIndex = (array: any[]): number =>
  Math.trunc(Math.random() * array.length);

// Function to retrieve a random outcome with the specified payout from the given array of outcomes
const getRandomOutcome = (outcomes: Outcome[], payout: number): Outcome => {
  const filteredOutcomes = outcomes.filter(
    (item: Outcome) => item.payout === payout,
  );
  const index = generateRandomIndex(filteredOutcomes);
  return filteredOutcomes[index];
};

const oddsGenerator = (): OddsGeneratorResult => {
  // Generate a random number between 0 and 3000 to determine the winning odds
  const winOdd = Math.trunc(Math.random() * 3000);

  let playerWin = false;
  let loosingOutcomeIndex = 0;
  const winningOutcomeIndex = 0;
  let outcome: Outcome = {
    combination: [],
    winningLine: [0],
    payout: 0,
  };

  if (winOdd <= 500 || winOdd > 1000) {
    // If the winOdd falls outside the range of 501-1000, player loses
    playerWin = false;
    loosingOutcomeIndex = generateRandomIndex(loosingOutcome);
  } else if (winOdd >= 501 && winOdd <= 700) {
    // If the winOdd falls within the range of 501-700, player wins with a payout of 4
    playerWin = true;
    outcome = getRandomOutcome(winningOutcome, 4);
  } else if (winOdd >= 701 && winOdd <= 800) {
    // If the winOdd falls within the range of 701-800, player wins with a payout of 8
    playerWin = true;
    outcome = getRandomOutcome(winningOutcome, 8);
  } else if (winOdd >= 801 && winOdd <= 900) {
    // If the winOdd falls within the range of 801-900, player wins with a payout between 12 and 20
    playerWin = true;
    outcome = getRandomOutcome(
      winningOutcome.filter(
        (item: Outcome) => item.payout >= 12 && item.payout <= 20,
      ),
      12,
    );
  } else if (winOdd >= 901 && winOdd <= 950) {
    // If the winOdd falls within the range of 901-950, player wins with a payout between 20 and 40
    playerWin = true;
    outcome = getRandomOutcome(
      winningOutcome.filter(
        (item: Outcome) => item.payout > 20 && item.payout <= 40,
      ),
      20,
    );
  } else if (winOdd >= 951 && winOdd <= 980) {
    // If the winOdd falls within the range of 951-980, player wins with a payout of 50
    playerWin = true;
    outcome = getRandomOutcome(winningOutcome, 50);
  } else if (winOdd > 981 && winOdd <= 1000) {
    // If the winOdd falls within the range of 981-1000, player wins with a payout of 100
    playerWin = true;
    outcome = getRandomOutcome(winningOutcome, 100);
  }

  return {
    playerWin, // Indicates whether the player has won or not
    loosingOutcomeIndex, // Index of the losing outcome in the loosingOutcome array
    winningOutcomeIndex, // Index of the winning outcome in the winningOutcome array
    outcome, // The selected outcome object
  };
};

export default oddsGenerator;
