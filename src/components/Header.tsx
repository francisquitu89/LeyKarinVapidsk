import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header = () => (
  <header className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <ShieldCheck className="w-12 h-12 text-purple-600 mr-3" />
      <h1 className="text-4xl font-bold text-gray-900">Ley Karín</h1>
    </div>
    <p className="text-lg text-gray-600">
      Ley 21.643 - Prevención y sanción del acoso y la violencia laboral
    </p>
  </header>
);