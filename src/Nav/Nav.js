import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {

  function isLoggedIn({ username }) {
    if (username.length === 0) {
      return (
        <p>Sign In</p>
      )
    } else {
      return (
        <p>Signed In</p>
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
      <Link to="/signIn">
        { isLoggedIn(props.username) }
      </Link>
    </div>
  )
};

export default Nav;