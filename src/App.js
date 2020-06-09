import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store/store.js';

import BagCreator from './Components/BagCreator/BagCreator.js';
import Footer from './Footer/Footer.js';
import Landing from './Components/Landing/Landing.js';
import Nav from './Nav/Nav.js';
import SignIn from './Components/SignIn/SignIn.js';

import './App.css';

import { addNewClub, decrementBagSize, incrementBagSize,
  resetClub, removeClub, setBag, setNewClubValue, setUsername
} from './redux/actions/actions';

function mapStateToProps(state) {
  // console.log(state);
  return {
    bag: state.clubReducer.bag,
    bagSize: state.bagCountReducer.bagSize,
    clubOptions: state.rootReducer,
    newClub: state.clubReducer.newClub,
    username: state.clubReducer.username
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addNewClub: club => dispatch(addNewClub(club)),
    decrementBagSize: size => dispatch(decrementBagSize(size)),
    incrementBagSize: size => dispatch(incrementBagSize(size)),
    removeClub: club => dispatch(removeClub(club)),
    resetClub: club => dispatch(resetClub(club)),
    setBag: bagObject => dispatch(setBag(bagObject)),
    setNewClubValue: value => dispatch(setNewClubValue(value)),
    setUsername: usernameObject => dispatch(setUsername(usernameObject))
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.createNewClub = this.createNewClub.bind(this);
    this.handleBagResponseFromServer = this.handleBagResponseFromServer.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.removeClub = this.removeClub.bind(this);
    this.setBagSizeFromMongo = this.setBagSizeFromMongo.bind(this);
    this.setBagStateFromMongo = this.setBagStateFromMongo.bind(this);
    this.setNewClubValue = this.setNewClubValue.bind(this);
    this.saveBag = this.saveBag.bind(this);
  };

  createNewClub(category, clubType, brand, numberOfClubs, flex) {
    if (this.props.bagSize < 14) {
      this.props.addNewClub({ category, clubType, brand, flex });
      this.props.resetClub({ category: '', clubType: '', brand: '', flex: '' });
      this.props.incrementBagSize(numberOfClubs);
    }
  };

  handleBagResponseFromServer(dataObject) {
    this.setBagStateFromMongo(dataObject);
    this.props.setUsername({ username: dataObject.username });
    this.setBagSizeFromMongo(dataObject);
  };

  loginUser(userObject, path) {
    const request = { method: 'POST', headers: { 'Content-Type': 'application/json' }};
    request.body = JSON.stringify(userObject);
    fetch(path, request)
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        this.handleBagResponseFromServer(data)
      })
      .catch(err => console.error('err', err));
  };

  removeClub(club, i) {
    if (this.props.bagSize > 0) {
      this.props.removeClub({ clubType: club.category, i: i });
      if (club.clubType === '3p') return this.props.decrementBagSize(8);
      if (club.clubType === '4a') return this.props.decrementBagSize(8);
      if (club.clubType === '4p') return this.props.decrementBagSize(7);
      if (club.clubType === '5a') return this.props.decrementBagSize(7);
      if (club.clubType === '5p') return this.props.decrementBagSize(6);
      if (club.category !== 'irons') return this.props.decrementBagSize(1);
    }
  };

  setBagSizeFromMongo(dataFromServer) {
    var bagLength = 0;
    for (var key in dataFromServer) {
      let clubArray = dataFromServer[key];
      if (Array.isArray(clubArray) && clubArray.length > 0) {
        if (clubArray[0].clubType === '3p') bagLength += 8;
        if (clubArray[0].clubType === '4a') bagLength += 8;
        if (clubArray[0].clubType === '4p') bagLength += 7;
        if (clubArray[0].clubType === '5a') bagLength += 7;
        if (clubArray[0].clubType === '5p') bagLength += 6;
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

  saveBag(requestType, body, actionType) {
    const request = { method: requestType, headers: { 'Content-Type': 'application/json' }};
    if (body) request.body = JSON.stringify(body);
    fetch('/api/bag', request)
      .then(res => res.json())
      .then(data => data);
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
              brands={this.props.clubOptions.brands}
              clubTypeNumbers={this.props.clubOptions.clubTypeNumbers}
              createNewClub={this.createNewClub}
              flexOptions={this.props.clubOptions.flexOptions}
              newClub={this.props.newClub}
              removeClub={this.removeClub}
              setNewClubValue={this.setNewClubValue}
              saveBag={this.saveBag}
              setUsername={this.props.setUsername}
              username={this.props.username}
            />
          </Route>
          <Route path="/signIn">
            <SignIn
              loginUser={this.loginUser}
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