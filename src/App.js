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
        irons: [],
        wedges: [],
        putter: ''
      },
      newClub: {
        category: '',
        type: '',
        brand: ''
      },
    };

    this.setBagState = this.setBagState.bind(this);
    this.createNewClub = this.createNewClub.bind(this);
    this.setNewClubValue = this.setNewClubValue.bind(this);

    this.brands = ["", "TaylorMade", "Titleist", "Callaway", "Ping"];
    this.clubNumbers = ["", "2", "3+", "3", "4", "5"];
    this.ironNumbers = ["", "3p", "4a", "4p", "5a", "5p"];
    this.wedgeNumbers = ["", "46", "48", "50", "52", "54", "56", "58", "60"];
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
          setBagState={this.setBagState}
          brands={this.brands}
          clubNumbers={this.clubNumbers}
          ironNumbers={this.ironNumbers}
          wedgeNumbers={this.wedgeNumbers} />
        <Footer />
      </div>
    )
  }
};

export default App;
