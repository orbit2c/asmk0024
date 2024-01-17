// src/components/Footer.js
import React from 'react';
import './Footer.css';  // Skapa en separat CSS-fil för varje komponent

const Footer = () => {
  return (
    <footer className="footer">
      <a>Axelssons Cykel & Motor</a>
      <a>Ståthållaregatan 56, 392 44 Kalmar</a>
      <a>Telefon: 070-221 80 88</a>
    </footer>
  );
};

export default Footer;
