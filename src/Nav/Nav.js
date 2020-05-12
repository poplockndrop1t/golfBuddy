import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
  return (
    <div className="navContainer">
      <Link to="/">
        <h2>Landing</h2>
      </Link>
      <Link to="/bagCreator">
        <h2>bagCreator</h2>
      </Link>
    </div>
  )
};

export default Nav;