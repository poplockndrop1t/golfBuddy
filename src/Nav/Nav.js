import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
  return (
    <div className="navContainer">
      <Link to="/bagCreator">
        <h2>bagCreator</h2>
      </Link>
    </div>
  )
};

export default Nav;

// <Link
//   to={{
//     pathname: "/courses",
//     search: "?sort=name",
//     hash: "#the-hash",
//     state: { fromDashboard: true }
//   }}
// />
// to: function