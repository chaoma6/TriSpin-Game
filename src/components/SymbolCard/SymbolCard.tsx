import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';

import classes from './SymbolCard.module.css';

interface SymbolCardProps {
  symbolPath: string;
  spinning: boolean;
  winMark: boolean;
  winningClass: boolean;
}

const SymbolCard: React.FC<SymbolCardProps> = ({
  symbolPath,
  spinning,
  winMark,
  winningClass,
}) => {
  const [imgClass, setImgClass] = useState(classes.img);
  const [containerClass, setContainerClass] = useState(classes.container);

  useMemo(() => {
    const updateClasses = () => {
      setContainerClass(
        `${classes.container} ${winMark ? classes.winning : ''} ${classes.spin}`
      );
      setImgClass(`${classes.img} ${winMark ? classes.img_winning : ''}`);
    };

    if (winningClass) {
      updateClasses();
    }
  }, [winMark, winningClass]);

  return (
    <motion.div
      animate={spinning ? { y: [-600, -200] } : { y: 0 }}
      transition={
        spinning
          ? {
              duration: 0.2,
              repeat: Infinity,
              repeatType: 'loop',
              stiffness: 0,
            }
          : { stiffness: 0 }
      }
      className={containerClass}
    >
      <img src={symbolPath} alt='symbol' className={imgClass} />
    </motion.div>
  );
};

export default SymbolCard;
