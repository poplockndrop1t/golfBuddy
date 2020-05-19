import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store/store.js';

import Footer from './Footer/Footer.js';
import Nav from './Nav/Nav.js';

import BagCreator from './Components/BagCreator/BagCreator.js';
import Landing from './Components/Landing/Landing.js';

import './App.css';

import {
  addNewClub, decrementBagSize,incrementBagSize,
  resetClub, removeClub, setNewClubValue
} from './redux/actions/actions';

function mapStateToProps(state) {
  console.log(state);
  return {
    bag: state.clubReducer.bag,
    bagSize: state.bagCountReducer.bagSize,
    brands: state.rootReducer.brands,
    clubTypeNumbers: state.rootReducer.clubTypeNumbers,
    flexOptions: state.rootReducer.flexOptions,
    newClub: state.clubReducer.newClub
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addNewClub: club => dispatch(addNewClub(club)),
    decrementBagSize: size => dispatch(decrementBagSize(size)),
    incrementBagSize: size => dispatch(incrementBagSize(size)),
    removeClub: club => dispatch(removeClub(club)),
    resetClub: club => dispatch(resetClub(club)),
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
    this.props.resetClub({ type: clubType, brand: clubBrand });
    this.props.incrementBagSize(numberOfClubs);
  };

  removeClub(club, i) {
    if (this.props.bagSize > 0) {
      if (club.category !== 'irons') {
        this.props.removeClub({ type: club.category, i: i });
        this.props.decrementBagSize(1);
      } else {
        this.props.removeClub({ type: club.category, i: i });
        if (club.type === "3p") return this.props.decrementBagSize(8);
        if (club.type === "4a") return this.props.decrementBagSize(8);
        if (club.type === "4p") return this.props.decrementBagSize(7);
        if (club.type === "5a") return this.props.decrementBagSize(7);
        if (club.type === "5p") return this.props.decrementBagSize(6);
      }
    }
  };

  setNewClubValue(item, value, category) {
    const newClub = store.getState().clubReducer.newClub;
    newClub[item] = value;
    newClub['category'] = category;
    this.props.setNewClubValue(newClub);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route path="/bagCreator">
            <BagCreator
              bag={this.props.bag}
              bagSize={this.props.bagSize}
              brands={this.props.brands}
              clubTypeNumbers={this.props.clubTypeNumbers}
              createNewClub={this.createNewClub}
              flexOptions={this.props.flexOptions}
              newClub={this.props.newClub}
              removeClub={this.removeClub}
              setNewClubValue={this.setNewClubValue}
            />
          </Route>
          <Footer />
        </Router>
      </div>
    )
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;