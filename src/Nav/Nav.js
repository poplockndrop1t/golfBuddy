import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
  return (
    <div className="navContainer">
      <Link to="/">
        <p>Landing</p>
      </Link>
      <Link to="/bagCreator">
        <p>Bag Creator</p>
      </Link>
    </div>
  )
};

export default Nav;