// src/components/Header.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css';
import AboutUs from './AboutUs'; // Make sure to import your components
import TipsAndTricks from './TipsAndTricks';
import Services from './Services';

const Home = () => <div>Hem</div>;

const Header = () => {
  return (
    <Router>
      <header className="header bg-gray-800 text-white p-4">
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Hem
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-gray-300 transition duration-300"
          >
            Om Oss
          </Link>
          <Link
            to="/tips"
            className="hover:text-gray-300 transition duration-300"
          >
            Tips och Trix
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-300 transition duration-300"
          >
            Tjänster
          </Link>
        </nav>
        <h1 className="text-4xl font-bold mt-4">Axelssons Cykel & Motor</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tips" element={<TipsAndTricks />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </header>
    </Router>
  );
};

export default Header;
