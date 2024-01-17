// src/components/MechanicSection.js
import React from 'react';
import mechanicImage from '../images/mechanic.jpg'; // Lägg till en bild för cykelmekaniker
import './MechanicSection.css';

const MechanicSection = () => {
  return (
    <section className="mechanic-section">
      <h2>Våra Erfarna Cykelmekaniker</h2>
      <img src={mechanicImage} alt="Cykelmekaniker" className="mechanic-image" />
      <p>Våra kunniga cykelmekaniker är här för att hålla dina cyklar i toppskick.</p>
    </section>
  );
};

export default MechanicSection;
