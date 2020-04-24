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
        woods: [],
        hybrids: [],
        irons: '',
        gapWedge: '',
        sandWedge: '',
        lobWedge: '',
        putter: ''
      },
      newClub: {
        category: '',
        type: '',
        brand: ''
      }
    };

    this.setBagState = this.setBagState.bind(this);
    this.createNewClub = this.createNewClub.bind(this);
    this.setNewClubValue = this.setNewClubValue.bind(this);
  };

  setBagState(stateName, newStateValue) {
    const { bag } = { ...this.state };
    const currentBagState = bag;
    currentBagState[stateName] = newStateValue;
    this.setState({ bag: currentBagState });
  }

  createNewClub(clubType, clubBrand, clubCategory) {
    const { bag, newClub } = { ...this.state };
    const currentBagState = bag;
    const currentNewClub = { type: clubType, brand: clubBrand };
    const resetClub = { category: '', type: '', brand: '' };
    currentBagState[newClub.category].push(currentNewClub);
    this.setState({ bag: currentBagState });
    this.setState({ newClub: resetClub });
  };

  setNewClubValue(typeOrBrand, value, category) {
    const { newClub } = {...this.state};
    const currentNewClubState = newClub;
    currentNewClubState[typeOrBrand] = value;
    currentNewClubState['category'] = category;
    this.setState({ newClub: currentNewClubState });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator
          bag={this.state.bag}
          newClub={this.state.newClub}
          createNewClub={this.createNewClub}
          setNewClubValue={this.setNewClubValue}
          setBagState={this.setBagState} />
        <Footer />
      </div>
    )
  }
};

export default App;