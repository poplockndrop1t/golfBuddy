import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store/store.js';

import Footer from './Footer/Footer.js';
import Nav from './Nav/Nav.js';

import BagCreator from './Components/BagCreator/BagCreator.js';
import Landing from './Components/Landing/Landing.js';

import './App.css';

import { addNewClub, decrementBagSize, incrementBagSize,
  resetClub, removeClub, setBag, setNewClubValue
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
    setBag: bag => dispatch(setBag(bag)),
    setNewClubValue: value => dispatch(setNewClubValue(value))
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.createNewClub = this.createNewClub.bind(this);
    this.fetchBag = this.fetchBag.bind(this);
    this.removeClub = this.removeClub.bind(this);
    this.postBag = this.postBag.bind(this);
    this.setBagSizeFromMongo = this.setBagSizeFromMongo.bind(this);
    this.setBagStateFromMongo = this.setBagStateFromMongo.bind(this);
    this.setNewClubValue = this.setNewClubValue.bind(this);
    this.updateBag = this.updateBag.bind(this);
  };

  componentDidMount() {
    this.updateBag('GET');
  }

  createNewClub(category, clubType, brand, numberOfClubs, flex) {
    if (this.props.bagSize < 14) {
      this.props.addNewClub({ category, clubType, brand, flex });
      this.props.resetClub({ category: '', clubType: '', brand: '' });
      this.props.incrementBagSize(numberOfClubs);
      this.postBag(this.props.bag);
    }
  };

  fetchBag() {
    fetch(`/api/bag`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      res.json()
        .then(data => {
          this.setBagStateFromMongo(data)
          this.setBagSizeFromMongo(data);
        });
    });
  };

  postBag(body) {
    fetch(`/api/bag`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  }

  updateBag(requestType, body) {
    const request = { method: requestType, headers: { 'Content-Type': 'application/json' } }
    if (body) request.body = body;
    fetch('/api/bag', request)
      .then(res => {
        res.json()
          .then(data => {
            if (requestType === 'GET') {
              this.setBagStateFromMongo(data)
              this.setBagSizeFromMongo(data);
            }
            return data;
          });
      });
  }

  removeClub(club, i) {
    if (this.props.bagSize > 0) {
      this.props.removeClub({ clubType: club.category, i: i });
      this.postBag(this.props.bag);
      if (club.category !== 'irons') {
        this.props.decrementBagSize(1);
      } else {
        if (club.clubType === "3p") return this.props.decrementBagSize(8);
        if (club.clubType === "4a") return this.props.decrementBagSize(8);
        if (club.clubType === "4p") return this.props.decrementBagSize(7);
        if (club.clubType === "5a") return this.props.decrementBagSize(7);
        if (club.clubType === "5p") return this.props.decrementBagSize(6);
      }
    }
  };

  setBagSizeFromMongo(dataFromServer) {
    var bagLength = 0;
    for (var key in dataFromServer) {
      let clubArray = dataFromServer[key];
      if (Array.isArray(clubArray) && clubArray.length > 0) {
        if (clubArray[0].clubType === "3p") bagLength += 8;
        if (clubArray[0].clubType === "4a") bagLength += 8;
        if (clubArray[0].clubType === "4p") bagLength += 7;
        if (clubArray[0].clubType === "5a") bagLength += 7;
        if (clubArray[0].clubType === "5p") bagLength += 6;
        if (key !== 'irons') bagLength += clubArray.length;
      }
    };
    this.props.incrementBagSize(bagLength);
  };

  setBagStateFromMongo(dataFromServer) {
    this.props.setBag({
      driver: dataFromServer.driver,
      woods: dataFromServer.woods,
      hybrids: dataFromServer.hybrids,
      irons: dataFromServer.irons,
      wedges: dataFromServer.wedges,
      putter: dataFromServer.putter
    });
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