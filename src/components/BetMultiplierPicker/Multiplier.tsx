import classes from './BetPicker.module.css';

interface MultiplierProps {
	active: boolean;
	name: string;
	handleMultipliers: (name: string) => void;
}

const Multiplier: React.FC<MultiplierProps> = ({ active, name, handleMultipliers }) => {
	const btnClass = `${classes.multiplier} ${active ? classes.clicked : ''}`;

	const handleClick = () => {
		handleMultipliers(name);
	};

	return (
		<button className={btnClass} onClick={handleClick}>
			{name}
		</button>
	);
};

export default Multiplier;
