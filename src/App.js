import React from 'react';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import BagCreator from './BagCreator/BagCreator.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: '',
      threeWood: '',
      gapWood: '',
      irons: '',
      gapWedge: '',
      sandWedge: '',
      lobWedge: '',
      putter: ''
    };
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator bag={this.state} />
        <Footer />
      </div>
    )
  }
};

export default App;