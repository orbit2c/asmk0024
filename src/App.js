import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import TipsAndTricks from './components/TipsAndTricks';
import MechanicSection from './components/MechanicSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <AboutUs />
      <TipsAndTricks />
      <MechanicSection />
      <Footer />
    </div>
  );
}

export default App;