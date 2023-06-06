interface Outcome {
  combination: string[][];
  payout: number;
  winningLine: number[];
}

const generateLosingOutcomes = (
  symb1: string,
  symb2: string,
  symb3: string,
  symb4: string,
  symb5: string,
  symb6: string
): Outcome[] => [
  {
    combination: [
      [symb4, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb2, symb6, symb5, symb3, symb6, symb4, symb2, symb3, symb5],
      [symb4, symb5, symb6, symb2, symb6, symb3, symb2, symb5, symb3],
      [symb6, symb3, symb4, symb5, symb2, symb1, symb6, symb4, symb1],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb1, symb5, symb6, symb3, symb4, symb1, symb6, symb3, symb5],
      [symb3, symb5, symb6, symb4, symb6, symb1, symb2, symb3, symb4],
      [symb6, symb4, symb3, symb5, symb2, symb1, symb6, symb4, symb1],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb4, symb6, symb1, symb3, symb5, symb4, symb1, symb2],
      [symb4, symb3, symb5, symb2, symb4, symb6, symb3, symb1, symb4],
      [symb6, symb1, symb4, symb5, symb3, symb4, symb2, symb3, symb1],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb3, symb1, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb3, symb1, symb4, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb6, symb4, symb3, symb1, symb5, symb6, symb5, symb6, symb5],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb4, symb1, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb4, symb3, symb1, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb5, symb6, symb4, symb3, symb1, symb6, symb5, symb6, symb5],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb1, symb4, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb1, symb4, symb3, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb5, symb6, symb3, symb4, symb1, symb6, symb5, symb6, symb5],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb4, symb1, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb5, symb3, symb4, symb6, symb5, symb6, symb5, symb6, symb5],
      [symb5, symb6, symb4, symb1, symb3, symb6, symb5, symb6, symb5],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb1, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb4, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb4, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb4, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb6, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb6, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb6, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb3, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb3, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb5, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb5, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb1, symb5, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb1, symb5, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb6, symb5, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb2, symb5, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb5, symb6, symb2, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb5, symb6, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb6, symb5, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb1, symb1, symb1, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb1, symb1, symb1, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb6, symb5, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb3, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb3, symb3, symb3, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb6, symb5, symb4, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb5, symb6, symb2, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb5, symb6, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb6, symb5, symb3, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb2, symb2, symb2, symb4, symb1, symb3, symb4, symb1, symb3],
      [symb2, symb6, symb4, symb1, symb3, symb4, symb1, symb3, symb4],
      [symb6, symb2, symb2, symb4, symb1, symb3, symb4, symb1, symb3],
    ],
    payout: 0,
    winningLine: [0],
  },

  {
    combination: [
      [symb2, symb1, symb3, symb4, symb1, symb6, symb4, symb3, symb1],
      [symb5, symb4, symb6, symb1, symb4, symb3, symb1, symb2, symb6],
      [symb6, symb3, symb1, symb5, symb3, symb4, symb1, symb6, symb4],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb2, symb2, symb1, symb4, symb1, symb6, symb4, symb3, symb1],
      [symb5, symb4, symb6, symb1, symb4, symb3, symb1, symb2, symb6],
      [symb1, symb2, symb1, symb5, symb3, symb4, symb1, symb6, symb4],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb1, symb3, symb4, symb1, symb6, symb4, symb3, symb1],
      [symb4, symb3, symb6, symb1, symb4, symb3, symb1, symb2, symb6],
      [symb6, symb2, symb2, symb5, symb3, symb4, symb1, symb6, symb4],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb1, symb3, symb3, symb5, symb6, symb6, symb2, symb2, symb1],
      [symb1, symb5, symb6, symb6, symb2, symb2, symb6, symb1, symb1],
      [symb6, symb2, symb5, symb4, symb5, symb3, symb3, symb1, symb1],
    ],
    payout: 0,
    winningLine: [0],
  },

  {
    combination: [
      [symb1, symb2, symb6, symb1, symb5, symb1, symb6, symb4, symb4],
      [symb4, symb5, symb4, symb6, symb6, symb2, symb5, symb2, symb1],
      [symb2, symb1, symb3, symb3, symb5, symb4, symb6, symb1, symb5],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb1, symb3, symb3, symb5, symb6, symb6, symb2, symb2, symb1],
      [symb4, symb4, symb4, symb5, symb5, symb5, symb6, symb2, symb1],
      [symb2, symb1, symb3, symb3, symb5, symb4, symb6, symb1, symb5],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb2, symb1, symb3, symb5, symb6, symb2, symb3, symb5, symb6],
      [symb1, symb5, symb6, symb4, symb3, symb1, symb6, symb3, symb2],
      [symb6, symb4, symb4, symb2, symb1, symb5, symb2, symb1, symb6],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb2, symb5, symb6, symb1, symb2, symb1, symb3, symb3],
      [symb3, symb6, symb5, symb1, symb6, symb1, symb5, symb3, symb2],
      [symb2, symb5, symb6, symb3, symb1, symb1, symb6, symb3, symb4],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb2, symb1, symb4, symb4, symb5, symb6, symb2, symb1, symb5],
      [symb4, symb6, symb3, symb6, symb5, symb1, symb3, symb2, symb2],
      [symb3, symb6, symb4, symb2, symb5, symb1, symb2, symb1, symb6],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb1, symb4, symb5, symb5, symb4, symb1, symb6, symb3, symb4],
      [symb6, symb3, symb4, symb1, symb3, symb5, symb4, symb1, symb2],
      [symb2, symb1, symb5, symb4, symb1, symb6, symb3, symb4, symb6],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb4, symb6, symb1, symb4, symb5, symb1, symb6, symb2],
      [symb1, symb6, symb4, symb3, symb6, symb1, symb4, symb5, symb3],
      [symb4, symb3, symb5, symb1, symb6, symb4, symb1, symb2, symb4],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb4, symb1, symb6, symb4, symb1, symb6, symb3, symb4],
      [symb5, symb1, symb6, symb4, symb3, symb1, symb4, symb6, symb3],
      [symb6, symb3, symb1, symb4, symb1, symb5, symb4, symb2, symb4],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb4, symb1, symb3, symb6, symb4, symb1, symb3, symb4, symb6],
      [symb1, symb5, symb4, symb3, symb6, symb4, symb1, symb3, symb4],
      [symb6, symb4, symb3, symb1, symb4, symb6, symb3, symb5, symb1],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [symb3, symb1, symb4, symb5, symb4, symb6, symb1, symb6, symb4],
      [symb1, symb6, symb3, symb4, symb1, symb5, symb4, symb3, symb6],
      [symb4, symb3, symb1, symb6, symb4, symb1, symb4, symb5, symb2],
    ],
    payout: 0,
    winningLine: [0],
  },
];

export default generateLosingOutcomes;
