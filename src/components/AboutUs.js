// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-4">Välkommen till Axelssons Cykel & Motor</h2>
      <p className="text-lg text-gray-700">
        Vi är passionerade för cyklar och strävar efter att erbjuda högkvalitativ service för alla dina cykelbehov.
      </p>
      <p className="text-lg text-gray-700">
        Vårt team av erfarna cykelmekaniker är dedikerade till att hålla din cykel i toppskick och ge dig en säker och njutbar cykelupplevelse.
      </p>
    </section>
  );
};

export default AboutUs;
