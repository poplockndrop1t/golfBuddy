import React from 'react';
import { connect } from 'react-redux';
import store from './redux/store/store.js';
import BagCreator from './BagCreator/BagCreator.js';
import Footer from './Footer/Footer.js';
import Nav from './Nav/Nav.js';
import './App.css';
import {
  addClub,
  addNewClub,
  decrementBagSize,
  incrementBagSize,
  removeClub,
  setNewClubValue } from './redux/actions/actions';

function mapStateToProps(state) {
  console.log('state', state);
  return {
    bag: state.bag,
    bagSize: state.bagSize,
    newClub: state.newClub
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addClub: club => dispatch(addClub(club)),
    addNewClub: club => dispatch(addNewClub(club)),
    decrementBagSize: size => dispatch(decrementBagSize(size)),
    incrementBagSize: size => dispatch(incrementBagSize(size)),
    removeClub: club => dispatch(removeClub(club)),
    setNewClubValue: value => dispatch(setNewClubValue(value))
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.createNewClub = this.createNewClub.bind(this);
    this.removeClub = this.removeClub.bind(this);
    this.setDriverOrPutter = this.setDriverOrPutter.bind(this);
    this.setNewClubValue = this.setNewClubValue.bind(this);

    this.brands = ["", "TaylorMade", "Titleist", "Callaway", "Ping"];
    this.clubNumbers = ["", "2", "3+", "3", "4", "5"];
    this.ironNumbers = ["", "3p", "4a", "4p", "5a", "5p"];
    this.wedgeNumbers = ["", "46", "48", "50", "52", "54", "56", "58", "60"];
  };

  createNewClub(clubType, clubBrand, numberOfClubs) {
    this.props.addNewClub({ type: clubType, brand: clubBrand });
    this.props.incrementBagSize(numberOfClubs);
  };

  removeClub(clubType, clubBrand, i) {
    if (this.props.bagSize > 0) {
      this.props.removeClub({ type: clubType, brand: clubBrand, i: i });
      this.props.decrementBagSize(1);
    }
  };

  setDriverOrPutter(clubType, clubBrand, numberOfClubs) {
    this.props.addClub({ type: clubType, brand: clubBrand });
    this.props.incrementBagSize(numberOfClubs);
  };

  setNewClubValue(typeOrBrand, value, category) {
    const newClub = store.getState().newClub;
    newClub[typeOrBrand] = value;
    newClub['category'] = category;
    this.props.setNewClubValue(newClub);
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <BagCreator
          bag={this.props.bag}
          brands={this.brands}
          clubNumbers={this.clubNumbers}
          createNewClub={this.createNewClub}
          ironNumbers={this.ironNumbers}
          newClub={this.props.newClub}
          removeClub={this.removeClub}
          setDriverOrPutter={this.setDriverOrPutter}
          setNewClubValue={this.setNewClubValue}
          wedgeNumbers={this.wedgeNumbers}
          bagSize={this.props.bagSize}
        />
        <Footer />
      </div>
    )
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;