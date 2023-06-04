import React, { useState } from 'react';
import classes from './BetPicker.module.css';
import Multiplier from './Multiplier';

interface BetMultiplierPickerProps {
  betHandler: (bet: number) => void;
  bet: number;
}

const betMultiplierData = [1, 2, 5, 10, 20, 100];

const BetMultiplierPicker: React.FC<BetMultiplierPickerProps> = ({
  betHandler,
  bet,
}) => {
  const [selectedMultiplier, setSelectedMultiplier] = useState<number>(0);

  const handleMultiplierClick = (multiplierIndex: number) => {
    setSelectedMultiplier(multiplierIndex);
    betHandler(betMultiplierData[multiplierIndex]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.multiplier_container}>
        {betMultiplierData.map((multiplier, index) => (
          <Multiplier
            key={multiplier}
            handleMultipliers={() => handleMultiplierClick(index)}
            name={`x${multiplier}`}
            active={selectedMultiplier === index}
          />
        ))}
      </div>
      <p className={classes.credit}>1 spin = {bet} credit</p>
    </div>
  );
};

export default BetMultiplierPicker;
