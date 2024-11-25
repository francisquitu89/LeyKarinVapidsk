import React from 'react';
import { Shield, BookOpen } from 'lucide-react';

export const InfoSection = () => (
  <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-purple-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-900">
          <Shield className="w-6 h-6 mr-2" />
          Sobre la Ley Karín
        </h3>
        <p className="text-purple-900">
          La Ley Karín (Ley 21.643) fue promulgada en honor a Karin Salgado, una funcionaria 
          de la salud que perdió la vida en 2019 debido al acoso laboral. Esta ley establece 
          un marco legal para prevenir y sancionar el acoso y la violencia en el entorno laboral.
        </p>
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-indigo-900">
          <BookOpen className="w-6 h-6 mr-2" />
          Principios Fundamentales
        </h3>
        <ul className="list-disc list-inside text-indigo-900 space-y-2">
          <li>Relaciones laborales libres de violencia</li>
          <li>Perspectiva de género en el trabajo</li>
          <li>Protección de la dignidad personal</li>
          <li>Prevención del acoso laboral</li>
          <li>Confidencialidad en denuncias</li>
        </ul>
      </div>
    </div>
  </div>
);