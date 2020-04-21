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
    this.createNewClub = this.createNewClub.bind(this);
  };

  setBagState(stateName, newStateValue) {
    const { bag } = { ...this.state };
    const currentBagState = bag;
    currentBagState[stateName] = newStateValue;
    this.setState({ bag: currentBagState });
  }

  createNewClub(clubType, clubBrand) {
    const { bag, newClub } = { ...this.state };
    const currentBagState = bag;
    console.log(bag, newClub);
    // if both type and brand exist on the new club
      // add new club to bag
      // remove temp club from new club state
    // if only one exists

  };

  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator
          bag={this.state.bag}
          newClub={this.state.newClub}
          createNewClub={this.state.createNewClub}
          setBagState={this.setBagState} />
        <Footer />
      </div>
    )
  }
};

export default App;