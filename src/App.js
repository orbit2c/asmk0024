import React from 'react';
import Header from './components/Header';

import PresentationSite from './components/PresentationSite'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <PresentationSite />
 
      <Footer />
    </div>
  );
}

export default App;