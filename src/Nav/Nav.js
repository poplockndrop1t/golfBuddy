import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  function isLoggedIn(username) {
    console.log('username', username);
  }

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
        <p>Sign In</p>
      </Link>
    </div>
  )
};

export default Nav;