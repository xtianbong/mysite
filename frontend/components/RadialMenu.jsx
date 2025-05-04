// RadialMenu.jsx
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const items = ["About", "Projects", "Contact", "Resume"];

const colors = {
  About: 'from-red-500 to-red-700',
  Projects: 'from-yellow-500 to-yellow-700',
  Contact: 'from-green-500 to-green-700',
  Resume: 'from-blue-500 to-blue-700',
};

const RadialMenu = ({ onSelect }) => {
  const radius = 130;
  const center = 150;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <motion.div
        className="relative w-[300px] h-[300px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {items.map((item, i) => {
          const angle = (2 * Math.PI * i) / items.length - Math.PI / 4; // offset for Smash-like tilt
          const x = center + radius * Math.cos(angle) - 60;
          const y = center + radius * Math.sin(angle) - 40;

          return (
            <motion.button
              key={item}
              className={clsx(
                'absolute w-[120px] h-[80px] transform -skew-x-12',
                'bg-gradient-to-br text-white font-bold text-lg shadow-2xl',
                'hover:scale-105 hover:brightness-110 transition-all duration-200',
                colors[item],
              )}
              style={{ left: `${x}px`, top: `${y}px` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(item)}
            >
              <div className="skew-x-12">{item}</div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RadialMenu;
