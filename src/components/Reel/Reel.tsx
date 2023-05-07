import SymbolCard from '../SymbolCard/SymbolCard';
import classes from './Reel.module.css';

interface ReelProps {
	// 转轴是否正在旋转
	reelSpinning: boolean;
	// 转轴上的符号数组
	symbols: string[];
	// 转轴的位置（左、中、右）
	reelOrder: number;
	// 中奖的线路编号
	winningLine: number[];
	// 中奖金额
	payout: number;
	// 是否为中奖状态
	winningClass: boolean;
}

const Reel: React.FC<ReelProps> = ({
	reelSpinning,
	symbols,
	reelOrder,
	winningLine,
	payout,
	winningClass,
}) => {
	// 存储每个符号是否中奖的标志
	const winMark = [false, false, false];

	// 如果中奖线路中包含1，则第1个符号中奖
	if (winningLine.includes(1)) {
		winMark.splice(0, 0, true);
	}

	// 如果中奖线路中包含2，则第2个符号中奖
	if (winningLine.includes(2)) {
		winMark.splice(1, 0, true);
	}

	// 如果中奖线路中包含3，则第3个符号中奖
	if (winningLine.includes(3)) {
		winMark.splice(2, 0, true);
	}

	// 如果中奖线路中包含4，则左起第1个符号中奖
	if (winningLine.includes(4)) {
		if (reelOrder === 0) winMark.splice(0, 1, true);
		if (reelOrder === 1) winMark.splice(1, 1, true);
		if (reelOrder === 2) winMark.splice(2, 1, true);
	}

	// 如果中奖线路中包含5，则右起第1个符号中奖
	if (winningLine.includes(5)) {
		if (reelOrder === 0) winMark.splice(2, 1, true);
		if (reelOrder === 1) winMark.splice(1, 1, true);
		if (reelOrder === 2) winMark.splice(0, 1, true);
	}

	return (
		<div className={classes.main}>
			{/* 遍历符号数组，渲染每个符号卡片 */}
			{symbols.map((symbol, i) => (
				<SymbolCard
					symbolPath={symbol}
					spinning={reelSpinning}
					key={Math.random() * 100} // 使用随机数作为 key，不推荐
					winMark={winMark[i]}
					winningClass={winningClass}
				/>
			))}
		</div>
	);
};

export default Reel;
