import React from 'react';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import BagCreator from './BagCreator/BagCreator.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator />
        <Footer />
      </div>
    )
  }
};

export default App;