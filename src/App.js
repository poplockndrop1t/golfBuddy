import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BagCreator from './Components/BagCreator/BagCreator.js';
import Footer from './Footer/Footer.js';
import Landing from './Components/Landing/Landing.js';
import Nav from './Nav/Nav.js';
import SignIn from './Components/SignIn/SignIn.js';
import './App.css';
import { addNewClub, decrementBagSize, displayLogo, incrementBagSize,
  resetClub, removeClub, setBag, setBagSize, setNewClubValue, setUsername
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
    displayLogo: boolean => dispatch(displayLogo(boolean)),
    incrementBagSize: size => dispatch(incrementBagSize(size)),
    removeClub: club => dispatch(removeClub(club)),
    resetClub: club => dispatch(resetClub(club)),
    setBag: bagObject => dispatch(setBag(bagObject)),
    setBagSize: bagObject => dispatch(setBagSize(bagObject)),
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
    this.logoutUser = this.logoutUser.bind(this);
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
    const { driver, woods, hybrids, irons, wedges, putter, username } = dataObject;
    this.props.setBag({ driver, woods, hybrids, irons, wedges, putter });
    this.props.setUsername({ username });
    this.props.setBagSize({ driver, woods, hybrids, irons, wedges, putter });
  };

  loginUser(userObject, path, cb) {
    const request = { method: 'POST', headers: { 'Content-Type': 'application/json' }};
    request.body = JSON.stringify(userObject);
    fetch(path, request)
      .then(res => res.json())
      .then(data => {
        if (typeof data === 'object') this.handleBagResponseFromServer(data);
        else console.log('USER EXISTS', data);
        cb(data);
      })
      .catch(err => console.error('err', err));
  };

  logoutUser() {
    return setTimeout(() => window.location.reload(), 1000);
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
          <Nav username={this.props.username} logoutUser={this.logoutUser} />
          <Route exact path="/" component={Landing} />
          <Route path="/bagCreator">
            <BagCreator
              bag={this.props.bag}
              bagSize={this.props.bagSize}
              brands={this.props.clubOptions.brands}
              clubTypeNumbers={this.props.clubOptions.clubTypeNumbers}
              createNewClub={this.createNewClub}
              decrementBagSize={this.props.decrementBagSize}
              flexOptions={this.props.clubOptions.flexOptions}
              newClub={this.props.newClub}
              removeClub={this.props.removeClub}
              setNewClubValue={this.props.setNewClubValue}
              saveBag={this.saveBag}
              setUsername={this.props.setUsername}
              username={this.props.username}
            />
          </Route>
          <Route path="/signIn">
            <SignIn loginUser={this.loginUser}/>
          </Route>
          <Footer />
        </Router>
      </div>
    )
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;