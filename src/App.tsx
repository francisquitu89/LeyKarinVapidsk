import React from 'react';
import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { Simulator } from './components/Simulator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <InfoSection />
        <Simulator />
      </div>
    </div>
  );
}

export default App;