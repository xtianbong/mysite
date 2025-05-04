// SectionViewer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionViewer = ({ section }) => {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">{section}</h1>
      <p>This is the {section} section. Replace this with real content.</p>
    </motion.div>
  );
};

export default SectionViewer;

