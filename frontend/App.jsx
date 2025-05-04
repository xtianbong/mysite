// App.jsx
import React, { useState } from 'react';
import RadialMenu from './components/RadialMenu';
import SectionViewer from './components/SectionViewer';
import BackButton from './components/BackButton';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {activeSection ? (
        <>
          <BackButton onBack={() => setActiveSection(null)} />
          <SectionViewer section={activeSection} />
        </>
      ) : (
        <RadialMenu onSelect={setActiveSection} />
      )}
    </div>
  );
};

export default App;



