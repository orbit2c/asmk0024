import React from 'react';
import './TipsAndTricks.css';

const TipsAndTricks = () => {
  return (
    <section className="tips-and-tricks">
      <h2>Tips och Trix för Cykelentusiaster</h2>
      <p>Här delar vi med oss av användbara tips för att underhålla och maximera prestandan på din cykel:</p>
      <ul>
        <li>Hur du smörjer din cykelkedja</li>
        <li>Rätt däcktryck för olika förhållanden</li>
        <li>Enkla sätt att kontrollera cykelns växlar</li>
        {/* Lägg till fler tips */}
      </ul>
    </section>
  );
};

export default TipsAndTricks;