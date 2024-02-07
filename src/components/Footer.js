import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">Axelssons Cykel & Motor</p>
        <p>Ståthållaregatan 56, 392 44 Kalmar</p>
        <p>
          Telefon: <a href="tel:0702218088" className="phone-number">070-221 80 88</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;