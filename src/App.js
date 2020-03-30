import React from 'react';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import BagCreator from './BagCreator/BagCreator.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <BagCreator />
      <Footer />
    </div>
  );
}

export default App;