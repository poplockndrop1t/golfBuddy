import React from 'react';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import BagCreator from './BagCreator/BagCreator.js';
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

    this.setBagState = this.setBagState.bind(this);
  };

  setBagState(stateName, newStateValue) {
    this.setState({
      [stateName]: newStateValue
    });
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