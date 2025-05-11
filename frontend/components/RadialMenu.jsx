import React from 'react';
import { motion } from 'framer-motion';

const items = ["About", "Projects", "Contact", "Resume"];
const colors = {
  About: '#EF4444',    // red-500
  Projects: '#F59E0B', // yellow-500
  Contact: '#10B981',  // green-500
  Resume: '#3B82F6',   // blue-500
};

const RadialMenu = ({ onSelect }) => {
  const radius = 130;
  const center = 150;
  const anglePerItem = 360 / items.length;

  const getSectorPath = (startAngle, endAngle, r) => {
    const rad = (deg) => (deg * Math.PI) / 180;
    const x1 = center + r * Math.cos(rad(startAngle));
    const y1 = center + r * Math.sin(rad(startAngle));
    const x2 = center + r * Math.cos(rad(endAngle));
    const y2 = center + r * Math.sin(rad(endAngle));

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return `M${center},${center} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <svg width="300" height="300" viewBox="0 0 300 300">
        {items.map((item, i) => {
          const startAngle = i * anglePerItem - 90;
          const endAngle = (i + 1) * anglePerItem - 90;
          const midAngle = (startAngle + endAngle) / 2;
          const labelX = center + (radius / 1.7) * Math.cos((midAngle * Math.PI) / 180);
          const labelY = center + (radius / 1.7) * Math.sin((midAngle * Math.PI) / 180);

          return (
            <g key={item} onClick={() => onSelect(item)} className="cursor-pointer">
              <motion.path
                d={getSectorPath(startAngle, endAngle, radius)}
                fill={colors[item]}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: i * 0.1 }}
              />
              <text
                x={labelX}
                y={labelY}
                fill="white"
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {item}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default RadialMenu;
