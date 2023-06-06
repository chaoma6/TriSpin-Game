import React from 'react';

import SymbolCard from '../SymbolCard/SymbolCard';
import classes from './Reel.module.css';

interface ReelProps {
  // Whether the reel is spinning or not
  reelSpinning: boolean;
  // Array of symbols on the reel
  symbols: string[];
  // Position of the reel (left, center, right)
  reelOrder: number;
  // Winning line number
  winningLine: number[];
  // Payout amount
  // eslint-disable-next-line react/no-unused-prop-types
  payout: number;
  // Whether it is a winning state
  winningClass: boolean;
}

const Reel: React.FC<ReelProps> = ({
  reelSpinning,
  symbols,
  reelOrder,
  winningLine,
  winningClass,
}) => {
  // Store the flags for each symbol indicating if it's a winning symbol
  const winMark = [false, false, false];

  // If winning line includes 1, first symbol is a winning symbol
  if (winningLine.includes(1)) {
    winMark.splice(0, 0, true);
  }

  // If winning line includes 2, second symbol is a winning symbol
  if (winningLine.includes(2)) {
    winMark.splice(1, 0, true);
  }

  // If winning line includes 3, third symbol is a winning symbol
  if (winningLine.includes(3)) {
    winMark.splice(2, 0, true);
  }

  // If winning line includes 4, first symbol from the left is a winning symbol
  if (winningLine.includes(4)) {
    if (reelOrder === 0) winMark.splice(0, 1, true);
    if (reelOrder === 1) winMark.splice(1, 1, true);
    if (reelOrder === 2) winMark.splice(2, 1, true);
  }

  // If winning line includes 5, first symbol from the right is a winning symbol
  if (winningLine.includes(5)) {
    if (reelOrder === 0) winMark.splice(2, 1, true);
    if (reelOrder === 1) winMark.splice(1, 1, true);
    if (reelOrder === 2) winMark.splice(0, 1, true);
  }

  return (
    <div className={classes.main}>
      {/* Map through the symbols array and render each symbol card */}
      {symbols.map((symbol, i) => (
        <SymbolCard
          symbolPath={symbol}
          spinning={reelSpinning}
          key={Math.random() * 100} // Using random number as key, not recommended
          winMark={winMark[i]}
          winningClass={winningClass}
        />
      ))}
    </div>
  );
};

export default Reel;
// 'payout' PropType is defined but prop is never usedeslintreact/no-unused-prop-types
