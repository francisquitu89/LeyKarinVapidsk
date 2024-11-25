import React from 'react';
import { ClipboardList, AlertCircle, Phone } from 'lucide-react';

export const Simulator = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <ClipboardList className="w-6 h-6 mr-2 text-purple-600" />
          Medidas de Prevención
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Protocolos Obligatorios</p>
              <p className="text-gray-600">Empresas y organismos estatales deben implementar protocolos de prevención</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Investigación y Sanción</p>
              <p className="text-gray-600">Procesos mejorados para investigar casos de acoso sexual y laboral</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold">Atención Psicológica</p>
              <p className="text-gray-600">Apoyo temprano para víctimas de acoso o violencia laboral</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Phone className="w-6 h-6 mr-2 text-purple-600" />
          Cómo Denunciar
        </h3>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold text-purple-900">Inspección del Trabajo</p>
            <p className="text-purple-800">Presenta una denuncia confidencial en cualquier oficina</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold text-purple-900">Portal MiDT</p>
            <p className="text-purple-800">Realiza tu denuncia en línea a través de la plataforma oficial</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold text-purple-900">Atención Inmediata</p>
            <p className="text-purple-800">Solicita atención psicológica temprana como medida de primera respuesta</p>
          </div>
        </div>
      </div>
    </div>
  );
};