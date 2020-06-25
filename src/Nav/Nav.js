import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {

  function isLoggedIn({ username }) {
    if (username.length === 0) {
      return (
        <Link to="/signIn">
          <p>Sign In</p>
        </Link>
      )
    } else {
      return (
        <div className="signedInContainer">
          <Link to="/signIn">
            <p onClick={props.logoutUser}>Sign Out</p>
          </Link>
        </div>
      )
    }
  };

  return (
    <div className="navContainer">
      <div className="golfBuddyLogoContainer">
        <Link to="/">
          <p>Golf Buddy<span role="img" aria-label="golf buddy"> ⛳️</span></p>
        </Link>
      </div>
      <Link to="/">
        <p className="golfBuddy">Golf Buddy</p>
      </Link>
      <Link to="/bagCreator">
        <p>Bag Creator</p>
      </Link>
      { isLoggedIn(props.username) }
      <Link to="/stats">
        <p>Stats</p>
      </Link>
    </div>
  )
};

export default Nav;