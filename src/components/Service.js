import React from 'react';

const Service = ({ title, description, price }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-blue-500 font-bold mt-2">{price}</p>
    </div>
  );
};

export default Service;