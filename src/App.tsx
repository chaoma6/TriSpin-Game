import {
  faCircleInfo,
  faRotate,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import classes from './App.module.css';
import BetPicker from './components/BetMultiplierPicker/BetMultiplierPicker';
import InfoModal from './components/Modal/Modal';
import Reel from './components/Reel/Reel';
import { loosingOutcome, symbolsData } from './store/store';
import oddsGenerator from './utils/oddsGenerator';
import shuffleArray from './utils/shuffle';

interface SpinOutcome {
  combination: string[][];
  winningLine: number[];
  payout: number;
}

function App() {
  const [reelOneSymbols, setReelOneSymbols] = useState(
    shuffleArray([...symbolsData])
  );
  const [reelTwoSymbols, setReelTwoSymbols] = useState(
    shuffleArray([...symbolsData])
  );
  const [reelThreeSymbols, setReelThreeSymbols] = useState(
    shuffleArray([...symbolsData])
  );
  const [reelOneWinningLine, setReelOneWinningLine] = useState([0]);
  const [reelTwoWinningLine, setReelTwoWinningLine] = useState([0]);
  const [reelThreeWinningLine, setReelThreeWinningLine] = useState([0]);
  const [reelOnePayout, setReelOnePayout] = useState(0);
  const [reelTwoPayout, setReelTwoPayout] = useState(0);
  const [reelThreePayout, setReelThreePayout] = useState(0);
  const [reelOneSpinning, setReelOneSpinning] = useState(false);
  const [reelTwoSpinning, setReelTwoSpinning] = useState(false);
  const [reelThreeSpinning, setReelThreeSpinning] = useState(false);
  const [startClicked, setStartClicked] = useState(false);
  const [payoutMessage, setPayoutMessage] = useState('Spin the reels');
  const [winningClass, setWinningClass] = useState(false);
  const [credits, setCredits] = useState(1000);
  const [insufficientCredits, setInsufficientCredits] = useState(false);
  const [selectedBet, setSelectedBet] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const betHandler = (bet: number) => {
    setSelectedBet(bet);
  };

  const startFirstReel = (
    playerWin: boolean,
    loosingIndex: number,
    outcome: SpinOutcome
  ) => {
    setReelOneSpinning(true);
    setPayoutMessage('Good luck!');
    setReelOneSymbols(shuffleArray([...symbolsData]));
    if (playerWin) {
      setTimeout(() => {
        setReelOneSymbols(outcome.combination[0]);
        setReelOneWinningLine(outcome.winningLine);
        setReelOnePayout(outcome.payout);

        setReelOneSpinning(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setReelOneSymbols(loosingOutcome[loosingIndex].combination[0]);
        setReelOneWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelOnePayout(loosingOutcome[loosingIndex].payout);

        setReelOneSpinning(false);
      }, 1000);
    }
  };

  const startSecondReel = (
    playerWin: boolean,
    loosingIndex: number,
    outcome: SpinOutcome
  ) => {
    setReelTwoSpinning(true);
    setReelTwoSymbols(shuffleArray([...symbolsData]));
    if (playerWin) {
      setTimeout(() => {
        setReelTwoSymbols(outcome.combination[1]);
        setReelTwoWinningLine(outcome.winningLine);
        setReelTwoPayout(outcome.payout);

        setReelTwoSpinning(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setReelTwoSymbols(loosingOutcome[loosingIndex].combination[1]);
        setReelTwoWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelTwoPayout(loosingOutcome[loosingIndex].payout);
        setReelTwoSpinning(false);
      }, 1500);
    }
  };

  const startThirdReel = (
    playerWin: boolean,
    loosingIndex: number,
    outcome: SpinOutcome
  ) => {
    setReelThreeSpinning(true);
    setReelThreeSymbols(shuffleArray([...symbolsData]));
    if (playerWin) {
      setTimeout(() => {
        setReelThreeSymbols(outcome.combination[2]);
        setReelThreeWinningLine(outcome.winningLine);
        setReelThreePayout(outcome.payout);

        setReelThreeSpinning(false);
        setStartClicked(false);
        setTimeout(() => {
          setPayoutMessage(`You won ${outcome.payout * selectedBet} coins!`);

          setWinningClass(true);
          setCredits((curr) => curr + outcome.payout * selectedBet);
        }, 500);
      }, 2000);
    } else {
      setTimeout(() => {
        setReelThreeSymbols(loosingOutcome[loosingIndex].combination[2]);
        setReelThreeWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelThreePayout(loosingOutcome[loosingIndex].payout);

        setReelThreeSpinning(false);
        setStartClicked(false);
        setPayoutMessage('Good luck!');
      }, 2000);
    }
  };

  const onStartHandler = () => {
    if (credits < selectedBet) {
      setInsufficientCredits(true);
      setTimeout(() => {
        setInsufficientCredits(false);
      }, 1500);
      return;
    }
    setStartClicked(true);
    setCredits((curr) => curr - selectedBet);
    setWinningClass(false); // clear the old state before new game
    const { playerWin, loosingOutcomeIndex, outcome } = oddsGenerator();
    startFirstReel(playerWin, loosingOutcomeIndex, outcome);
    startSecondReel(playerWin, loosingOutcomeIndex, outcome);
    startThirdReel(playerWin, loosingOutcomeIndex, outcome);
  };

  useEffect(() => {
    if (reelThreeSpinning) {
      setBtnDisabled(true);
    } else {
      setTimeout(() => {
        setBtnDisabled(false);
      }, 500);
    }
  }, [reelThreeSpinning]);

  const onInfoHandler = () => {
    setShowInfo(true);
  };

  return (
    <div className={classes.wrapper}>
      {showInfo && <InfoModal bet={selectedBet} setShowInfo={setShowInfo} />}
      {insufficientCredits && (
        <div className={classes.no_credits}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={classes.triangle_icon}
          />
          <p>Insufficient credits</p>{' '}
        </div>
      )}
      <div className={classes.app_display}>
        <div className={classes.header}>
          <div className={classes.payout_container}>
            <p className={classes.payout}>{payoutMessage}</p>
          </div>
          <div className={classes.info_container}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className={classes.info}
              onClick={onInfoHandler}
            />
          </div>
        </div>
        <div className={classes.app}>
          <div className={classes.container}>
            <Reel
              reelSpinning={reelOneSpinning}
              symbols={reelOneSymbols}
              reelOrder={0}
              winningLine={reelOneWinningLine}
              payout={reelOnePayout}
              winningClass={winningClass}
            />
            <Reel
              reelSpinning={reelTwoSpinning}
              symbols={reelTwoSymbols}
              reelOrder={1}
              winningLine={reelTwoWinningLine}
              payout={reelTwoPayout}
              winningClass={winningClass}
            />
            <Reel
              reelSpinning={reelThreeSpinning}
              symbols={reelThreeSymbols}
              reelOrder={2}
              winningLine={reelThreeWinningLine}
              payout={reelThreePayout}
              winningClass={winningClass}
            />
          </div>
          <div className={classes.actions}>
            <BetPicker betHandler={betHandler} bet={selectedBet} />
            <button
              type='button'
              className={classes.btn_start}
              onClick={onStartHandler}
              disabled={btnDisabled}
            >
              <FontAwesomeIcon
                icon={faRotate}
                className={
                  startClicked ? classes.icon_spin_active : classes.icon_spin
                }
                size='5x'
              />
            </button>
            <div className={classes.credits_container}>
              <p className={classes.credits_headline}>Credits</p>
              <p className={classes.credits_sum}>{credits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
