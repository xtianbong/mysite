// frontend/components/RadialMenu.jsx
import React from 'react';
import { motion } from 'framer-motion';

const items = ["About", "Projects", "Contact", "Resume"];

const RadialMenu = ({ onSelect }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        className="grid grid-cols-2 gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        {items.map((item, i) => (
          <motion.button
            key={item}
            className="relative w-[180px] h-[100px] bg-indigo-600 text-xl font-semibold text-white skew-x-[-15deg] transform hover:scale-105 focus:scale-105 hover:shadow-2xl focus:shadow-2xl transition-all duration-200 ease-in-out"
            onClick={() => onSelect(item)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="skew-x-[15deg]">{item}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default RadialMenu;
