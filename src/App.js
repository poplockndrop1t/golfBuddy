import React from 'react';
import { connect } from 'react-redux';
import store from './redux/store/store.js';
import BagCreator from './BagCreator/BagCreator.js';
import Footer from './Footer/Footer.js';
import Nav from './Nav/Nav.js';
import './App.css';
import {
  addNewClub,
  decrementBagSize,
  incrementBagSize,
  removeClub,
  setNewClubValue } from './redux/actions/actions';

function mapStateToProps(state) {
  return {
    bag: state.bag,
    bagSize: state.bagSize,
    brands: state.brands,
    clubTypeNumbers: state.clubTypeNumbers,
    newClub: state.newClub
  };
};

function mapDispatchToProps(dispatch) {
  return {
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
    this.setNewClubValue = this.setNewClubValue.bind(this);
  };

  createNewClub(clubType, clubBrand, numberOfClubs) {
    this.props.addNewClub({ type: clubType, brand: clubBrand });
    this.props.incrementBagSize(numberOfClubs);
  };

  removeClub(club, i) {
    if (this.props.bagSize > 0 && club.category !== 'irons') {
      this.props.removeClub({ type: club.category, i: i });
      this.props.decrementBagSize(1);
    }
     // else {
      // this.props.removeClub({ type: clubType, i: i });
      // console.log('yes', clubType, clubBrand, i);
      // if (newClub.type === "3p") return createNewClub(newClub.type, newClub.brand, 8);
      // if (newClub.type === "4a") return createNewClub(newClub.type, newClub.brand, 8);
      // if (newClub.type === "4p") return createNewClub(newClub.type, newClub.brand, 7);
      // if (newClub.type === "5a") return createNewClub(newClub.type, newClub.brand, 7);
      // if (newClub.type === "5p") return createNewClub(newClub.type, newClub.brand, 6);
    // }
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
          bagSize={this.props.bagSize}
          brands={this.props.brands}
          clubTypeNumbers={this.props.clubTypeNumbers}
          createNewClub={this.createNewClub}
          newClub={this.props.newClub}
          removeClub={this.removeClub}
          setNewClubValue={this.setNewClubValue}
        />
        <Footer />
      </div>
    )
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;