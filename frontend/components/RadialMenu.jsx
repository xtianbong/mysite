// RadialMenu.jsx
import React from 'react';
import { motion } from 'framer-motion';

const items = ["About", "Projects", "Contact", "Resume"];

const RadialMenu = ({ onSelect }) => {
  const radius = 120;
  const center = 150;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="relative w-[300px] h-[300px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {items.map((item, i) => {
          const angle = (2 * Math.PI * i) / items.length;
          const x = center + radius * Math.cos(angle) - 50;
          const y = center + radius * Math.sin(angle) - 50;
          return (
            <motion.button
              key={item}
              className="absolute w-[100px] h-[100px] bg-indigo-600 hover:bg-indigo-400 rounded-full flex items-center justify-center shadow-lg"
              style={{ left: `${x}px`, top: `${y}px` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onSelect(item)}
            >
              {item}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RadialMenu;