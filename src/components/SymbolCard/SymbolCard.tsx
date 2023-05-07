import { useMemo, useState } from 'react';
import classes from './SymbolCard.module.css';
import { motion } from 'framer-motion';

// 定义 SymbolCard 组件所需的 props
interface SymbolCardProps {
	symbolPath: string; // 贴纸的路径
	spinning: boolean; // 是否正在旋转
	winMark: boolean; // 是否为获胜贴纸
	winningClass: boolean; // 是否添加获胜样式
}

// 定义 SymbolCard 组件
const SymbolCard: React.FC<SymbolCardProps> = (props) => {
	const [imgClass, setImgClass] = useState(classes.img); // 图片的类名
	const [containerClass, setContainerClass] = useState(classes.container); // 容器的类名

	// 更新类名
	const updateClasses = () => {
		// 如果是获胜贴纸，则添加获胜样式
		setContainerClass(
			`${classes.container} ${props.winMark ? classes.winning : ''} ${classes.spin}`
		);
		// 如果是获胜贴纸，则添加获胜图片样式
		setImgClass(`${classes.img} ${props.winMark ? classes.img_winning : ''}`);
	};

	// 如果 props 中的 winningClass 发生变化，则更新类名
	useMemo(() => {
		if (props.winningClass) {
			updateClasses();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.winningClass]);

	return (
		// 定义动画效果
		<motion.div
			animate={props.spinning ? { y: [-600, -200] } : { y: 0 }}
			transition={
				props.spinning
					? {
							duration: 0.2,
							repeat: Infinity,
							repeatType: 'loop',
							stiffness: 0,
					  }
					: { stiffness: 0 }
			}
			className={containerClass} // 添加容器类名
		>
			<img src={props.symbolPath} alt='symbol' className={imgClass} />
		</motion.div>
	);
};

export default SymbolCard;
