// src/components/Services.js
import React from 'react';
import Service from './Service';

const servicesData = [
  {
    title: 'Standard Service',
    description: 'En grundläggande service för att hålla din cykel i toppskick.',
    price: '',
  },
  {
    title: 'Premium Service',
    description: 'En omfattande service med extra funktioner och justeringar.',
    price: '',
  },
  // Lägg till fler cykelservicer här
];

const Services = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Våra Cykelservicer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
