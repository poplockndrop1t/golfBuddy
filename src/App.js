import React from 'react';
import { connect } from 'react-redux';
import { incrementBagSize } from './redux/actions/actions';
import store from './redux/store/store.js';
import BagCreator from './BagCreator/BagCreator.js';
import Footer from './Footer/Footer.js';
import Nav from './Nav/Nav.js';
import './App.css';

function mapDispatchToProps(dispatch) {
  return {
    incrementBagSize: size => dispatch(incrementBagSize(size))
  }
};

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
      }
      // bagSize: 0
    };

    this.createNewClub = this.createNewClub.bind(this);
    this.setBagState = this.setBagState.bind(this);
    this.setNewClubValue = this.setNewClubValue.bind(this);

    this.brands = ["", "TaylorMade", "Titleist", "Callaway", "Ping"];
    this.clubNumbers = ["", "2", "3+", "3", "4", "5"];
    this.ironNumbers = ["", "3p", "4a", "4p", "5a", "5p"];
    this.wedgeNumbers = ["", "46", "48", "50", "52", "54", "56", "58", "60"];
  };

  setBagState(stateName, newStateValue, numberOfClubs) {
    const { bag, bagSize } = { ...this.state };
    const currentBagState = bag;
    var newBagSize = bagSize;
    newBagSize += 1;
    currentBagState[stateName] = newStateValue;
    this.setState({ bag: currentBagState });
    this.setState({ bagSize: newBagSize });
  }

  createNewClub(clubType, clubBrand, numberOfClubs) {
    this.props.incrementBagSize();
    const { bag, newClub, bagSize } = { ...this.state };
    const currentNewClub = { type: clubType, brand: clubBrand };
    const resetClub = { category: '', type: '', brand: '' };
    const currentBagState = bag;
    // var newBagSize = bagSize;
    currentBagState[newClub.category].push(currentNewClub);
    // newBagSize += numberOfClubs;
    this.setState({ bag: currentBagState });
    this.setState({ newClub: resetClub });
    // this.setState({ bagSize: newBagSize });
  };

  setNewClubValue(typeOrBrand, value, category) {
    const { newClub } = {...this.state};
    const currentNewClubState = newClub;
    currentNewClubState[typeOrBrand] = value;
    currentNewClubState['category'] = category;
    this.setState({ newClub: currentNewClubState });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator
          bag={this.state.bag}
          brands={this.brands}
          clubNumbers={this.clubNumbers}
          createNewClub={this.createNewClub}
          ironNumbers={this.ironNumbers}
          newClub={this.state.newClub}
          setBagState={this.setBagState}
          setNewClubValue={this.setNewClubValue}
          wedgeNumbers={this.wedgeNumbers}
          bagSize={store.getState().bagSize}
        />
        <Footer />
      </div>
    )
  }
};


const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;