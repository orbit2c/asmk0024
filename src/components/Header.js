// src/components/Header.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import './Header.css';


const Home = () => <div>Hem</div>;
const About = () => <div>Om Oss</div>;
const Tips = () => <div>Tips och Trix</div>;
const Services = () => <div>Tjänster</div>;

const Header = () => {
  return (
   <Router>
      <header className="header">
        <nav>
          <Link to="/">Hem</Link>
          <Link to="/about">Om Oss</Link>
          <Link to="/tips">Tips och Trix</Link>
          <Link to="/services">Tjänster</Link>
        </nav>
        <h1>Axelssons Cykel & Motor</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </header>
    </Router>
  );
};

export default Header;
