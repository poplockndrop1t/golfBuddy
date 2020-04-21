import React from 'react';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import BagCreator from './BagCreator/BagCreator.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bag: {
        driver: '',
        woods: [
          {
            'type': '3wood',
            'brand': 'Titleist'
          }
        ],
        hybrids: [],
        irons: '',
        gapWedge: '',
        sandWedge: '',
        lobWedge: '',
        putter: ''
      },
      newClub: {
        type: '',
        brand: ''
      }
    };

    this.setBagState = this.setBagState.bind(this);
  };

  setBagState(stateName, newStateValue) {
    const { bag } = { ...this.state };
    const currentBagState = bag;
    currentBagState[stateName] = newStateValue;
    this.setState({ bag: currentBagState });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator
          bag={this.state.bag}
          newClub={this.state.newClub}
          setBagState={this.setBagState} />
        <Footer />
      </div>
    )
  }
};

export default App;