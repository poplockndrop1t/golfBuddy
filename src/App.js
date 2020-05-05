import React from 'react';
import { connect } from 'react-redux';
import { addClub, incrementBagSize } from './redux/actions/actions';
import store from './redux/store/store.js';
import BagCreator from './BagCreator/BagCreator.js';
import Footer from './Footer/Footer.js';
import Nav from './Nav/Nav.js';
import './App.css';

const mapStateToProps = (state, ownProps) => ({
  // active: ownProps.filter === state.visibilityFilter
  active: console.log('ran', state, ownProps)
})

function mapDispatchToProps(dispatch) {
  return {
    addClub: club => dispatch(addClub(club)),
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
      },
      bagSize: 0
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
    this.props.addClub({ type: stateName, brand: newStateValue });
    this.props.incrementBagSize(numberOfClubs);
    this.setState({ bag: store.getState().bag });
    this.setState({ bagSize: store.getState().bagSize });
  };

  createNewClub(clubType, clubBrand, numberOfClubs) {
    const { bag, newClub } = { ...this.state };
    const currentNewClub = { type: clubType, brand: clubBrand };
    const resetClub = { category: '', type: '', brand: '' };
    const currentBagState = bag;
    currentBagState[newClub.category].push(currentNewClub);
    this.setState({ bag: currentBagState });
    this.setState({ newClub: resetClub });
    this.props.incrementBagSize(numberOfClubs);
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
          bagSize={this.state.bagSize}
        />
        <Footer />
      </div>
    )
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;