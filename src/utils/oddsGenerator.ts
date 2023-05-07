import { winningOutcome, loosingOutcome } from '../resultStore/store';

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


const oddsGenerator = (): OddsGeneratorResult => {
	let playerWin = false;
	let loosingOutcomeIndex = 0;
	let winningOutcomeIndex = 0;
	let outcome: Outcome = {
		combination: [],
		winningLine: [0],
		payout: 0,
	};

	const winOdd = Math.trunc(Math.random() * 3000);

	if (winOdd <= 500 || winOdd > 1000) {
		playerWin = false;
		loosingOutcomeIndex = Math.trunc(Math.random() * loosingOutcome.length);
	} else if (winOdd >= 501 && winOdd <= 700) {
		playerWin = true;
		const winningCombinations = winningOutcome.filter((item:Outcome) => item.payout === 4);
		winningOutcomeIndex = Math.trunc(Math.random() * winningCombinations.length);
		outcome = winningCombinations[winningOutcomeIndex];
	} else if (winOdd >= 701 && winOdd <= 800) {
		playerWin = true;
		const winningCombinations = winningOutcome.filter((item:Outcome) => item.payout === 8);
		winningOutcomeIndex = Math.trunc(Math.random() * winningCombinations.length);
		outcome = winningCombinations[winningOutcomeIndex];
	} else if (winOdd >= 801 && winOdd <= 900) {
		playerWin = true;
		const winningCombinations = winningOutcome.filter(
			(item:Outcome) => item.payout >= 12 && item.payout <= 20
		);
		winningOutcomeIndex = Math.trunc(Math.random() * winningCombinations.length);
		outcome = winningCombinations[winningOutcomeIndex];
	} else if (winOdd >= 901 && winOdd <= 950) {
		playerWin = true;
		const winningCombinations = winningOutcome.filter(
			(item:Outcome) => item.payout > 20 && item.payout <= 40
		);
		winningOutcomeIndex = Math.trunc(Math.random() * winningCombinations.length);
		outcome = winningCombinations[winningOutcomeIndex];
	} else if (winOdd >= 951 && winOdd <= 980) {
		playerWin = true;
		const winningCombinations = winningOutcome.filter((item:Outcome) => item.payout === 50);
		winningOutcomeIndex = Math.trunc(Math.random() * winningCombinations.length);
		outcome = winningCombinations[winningOutcomeIndex];
	} else if (winOdd > 981 && winOdd <= 1000) {
		playerWin = true;
		const winningCombinations = winningOutcome.filter((item:Outcome) => item.payout === 100);
		winningOutcomeIndex = Math.trunc(Math.random() * winningCombinations.length);
		outcome = winningCombinations[winningOutcomeIndex];
	}

	return {
		playerWin, // 是否获胜
		loosingOutcomeIndex, // 失败的结果索引
		winningOutcomeIndex, // 获胜的结果索引
		outcome, // 结果对象
	};
};

export default oddsGenerator;
