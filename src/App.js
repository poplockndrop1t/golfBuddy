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
      driver: 'm4',
      threeWood: '',
      gapWood: '',
      irons: '',
      gapWedge: '',
      sandWedge: '',
      lobWedge: '',
      putter: ''
    };
  };

  setBagState(event) {
    this.setState(state => {
      console.log('here');
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator
          bag={this.state}
          setBagState={this.setBagState} />
        <Footer />
      </div>
    )
  }
};

export default App;