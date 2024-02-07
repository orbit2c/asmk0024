// src/components/TipsAndTricks.js
import React from 'react';

const TipsAndTricks = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Tips och Trix för Cykelentusiaster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Hur du smörjer din cykelkedja</h3>
            <p className="text-gray-600">
              För att hålla din cykelkedja smidig och effektiv, använd ett högkvalitativt
              smörjmedel regelbundet.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Rätt däcktryck för olika förhållanden</h3>
            <p className="text-gray-600">
              Anpassa däcktrycket beroende på terrängen. Lägre tryck ger mer grepp i terrängen.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Enkla sätt att kontrollera cykelns växlar</h3>
            <p className="text-gray-600">
              Testa att växla genom alla växlar när du står stilla för att säkerställa smidig
              växling under körning.
            </p>
          </div>
          {/* Lägg till fler tips */}
        </div>
      </div>
    </section>
  );
};

export default TipsAndTricks;
