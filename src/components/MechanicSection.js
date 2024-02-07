// src/components/MechanicSection.js
import React from 'react';
import mechanicImage from '../images/mechanic.jpg';

const MechanicSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Våra Erfarna Cykelmekaniker</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={mechanicImage}
            alt="Cykelmekaniker"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Våra kunniga cykelmekaniker är här för att hålla dina cyklar i toppskick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicSection;
