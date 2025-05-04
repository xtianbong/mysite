// BackButton.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ onBack }) => (
  <button
    onClick={onBack}
    className="absolute top-4 left-4 p-2 bg-black/50 backdrop-blur text-white rounded-full hover:bg-white hover:text-black transition"
  >
    <ArrowLeft />
  </button>
);

export default BackButton;
